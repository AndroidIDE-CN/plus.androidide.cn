import axios from 'axios'
import {RELEASE_CACHE_TTL, REPO_NAME, REPO_OWNER} from '@/config'

/** 发布附件（APK 等） */
export interface ReleaseAsset {
    name: string
    size: number
    downloadCount: number
    url: string
    /** 形如 sha256:xxxx，旧附件可能没有 */
    digest: string | null
    updatedAt: string
}

/** 单个发布版本 */
export interface Release {
    tag: string
    name: string
    body: string
    url: string
    prerelease: boolean
    publishedAt: string
    author: string | null
    assets: ReleaseAsset[]
}

/** 仓库统计信息 */
export interface RepoStats {
    stars: number
    forks: number
    issues: number
}

/** 数据来源：GitHub API、本地缓存或构建时生成的快照 */
export type ReleaseSource = 'api' | 'cache' | 'snapshot'

export interface ReleaseResult {
    releases: Release[]
    source: ReleaseSource
    /** 数据生成时间（ISO 字符串） */
    fetchedAt: string
}

const API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`
const CACHE_KEY = 'releases-cache-v1'

/**
 * 把 GitHub API 返回的发布对象精简为页面需要的字段。
 * 与 scripts/fetch-releases.mjs 中的同名逻辑保持一致。
 * @param raw GitHub API 的 release 对象
 * @returns 精简后的 Release
 */
export function normalizeRelease(raw: any): Release {
    return {
        tag: raw.tag_name,
        name: raw.name || raw.tag_name,
        body: raw.body || '',
        url: raw.html_url,
        prerelease: !!raw.prerelease,
        publishedAt: raw.published_at || raw.created_at,
        author: raw.author?.login ?? null,
        assets: (raw.assets || []).map((a: any) => ({
            name: a.name,
            size: a.size,
            downloadCount: a.download_count,
            url: a.browser_download_url,
            digest: a.digest ?? null,
            updatedAt: a.updated_at
        }))
    }
}

/**
 * 读取 sessionStorage 中未过期的发布缓存。
 * @returns 缓存结果，不存在或已过期时返回 null
 */
function readCache(): ReleaseResult | null {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY)
        if (!raw) return null
        const data = JSON.parse(raw) as ReleaseResult
        if (Date.now() - new Date(data.fetchedAt).getTime() > RELEASE_CACHE_TTL) return null
        return {...data, source: 'cache'}
    } catch {
        return null
    }
}

/**
 * 加载构建时由 GitHub Actions 生成的 releases.json 快照。
 * API 被限流（未登录每小时 60 次）或网络不通时使用。
 * @returns 快照结果，加载失败时返回 null
 */
async function loadSnapshot(): Promise<ReleaseResult | null> {
    try {
        const res = await axios.get(`${import.meta.env.BASE_URL}releases.json`, {timeout: 10000})
        if (!Array.isArray(res.data?.releases)) return null
        return {releases: res.data.releases, fetchedAt: res.data.fetchedAt, source: 'snapshot'}
    } catch {
        return null
    }
}

/**
 * 获取发布列表：优先会话缓存，其次实时请求 GitHub API，失败时回退到构建快照。
 * @param force 为 true 时跳过会话缓存
 * @returns 发布列表及其来源
 * @throws 三种来源都不可用时抛出最后一次的请求错误
 */
export async function fetchReleases(force = false): Promise<ReleaseResult> {
    if (!force) {
        const cached = readCache()
        if (cached) return cached
    }
    try {
        const res = await axios.get(`${API}/releases`, {
            params: {per_page: 30},
            headers: {Accept: 'application/vnd.github+json'},
            timeout: 10000
        })
        const result: ReleaseResult = {
            releases: (res.data as any[]).filter(r => !r.draft).map(normalizeRelease),
            fetchedAt: new Date().toISOString(),
            source: 'api'
        }
        try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify(result))
        } catch {
            // 存储空间不足时忽略缓存
        }
        return result
    } catch (e) {
        const snapshot = await loadSnapshot()
        if (snapshot) return snapshot
        throw e
    }
}

/**
 * 获取仓库的 Star、Fork 与 Issue 数量，失败时返回 null，不影响页面其他部分。
 * @returns 统计信息或 null
 */
export async function fetchRepoStats(): Promise<RepoStats | null> {
    try {
        const res = await axios.get(API, {timeout: 10000})
        return {
            stars: res.data.stargazers_count,
            forks: res.data.forks_count,
            issues: res.data.open_issues_count
        }
    } catch {
        return null
    }
}

/**
 * 统计全部发布附件的累计下载次数。
 * @param releases 发布列表
 * @returns 总下载次数
 */
export function totalDownloads(releases: Release[]): number {
    return releases.reduce((sum, r) => sum + r.assets.reduce((s, a) => s + a.downloadCount, 0), 0)
}
