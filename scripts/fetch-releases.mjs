// 构建前从 GitHub 拉取发布列表，生成 public/releases.json 快照。
// 页面运行时优先请求 GitHub API，被限流或网络不通时回退到这份快照。
// 在 GitHub Actions 中会带上 GITHUB_TOKEN，避免匿名请求被限流。
// 拉取失败不会让构建失败：保留已有快照，没有则写入空列表。
import {existsSync, mkdirSync, writeFileSync} from 'node:fs'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const OWNER = process.env.RELEASE_OWNER || 'AndroidIDE-CN'
const REPO = process.env.RELEASE_REPO || 'AIDE-Plus'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const output = resolve(root, 'public/releases.json')

/**
 * 精简 GitHub release 对象，字段与 src/api/github.ts 的 normalizeRelease 一致。
 * @param raw GitHub API 的 release 对象
 */
function normalizeRelease(raw) {
    return {
        tag: raw.tag_name,
        name: raw.name || raw.tag_name,
        body: raw.body || '',
        url: raw.html_url,
        prerelease: !!raw.prerelease,
        publishedAt: raw.published_at || raw.created_at,
        author: raw.author?.login ?? null,
        assets: (raw.assets || []).map(a => ({
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
 * 请求发布列表并写入快照文件。
 */
async function main() {
    const headers = {Accept: 'application/vnd.github+json', 'User-Agent': 'plus.androidide.cn-build'}
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/releases?per_page=30`
    const token = process.env.GITHUB_TOKEN
    let res = await fetch(url, {headers: token ? {...headers, Authorization: `Bearer ${token}`} : headers})
    // 令牌无效时（例如没有该仓库权限）退回匿名请求
    if (token && res.status === 401) res = await fetch(url, {headers})
    if (!res.ok) throw new Error(`GitHub API ${res.status} ${res.statusText}`)
    const data = await res.json()
    const releases = data.filter(r => !r.draft).map(normalizeRelease)
    mkdirSync(dirname(output), {recursive: true})
    writeFileSync(output, JSON.stringify({fetchedAt: new Date().toISOString(), releases}))
    console.log(`[fetch-releases] ${releases.length} releases -> public/releases.json`)
}

main().catch(err => {
    console.warn(`[fetch-releases] skipped: ${err.message}`)
    if (!existsSync(output)) {
        mkdirSync(dirname(output), {recursive: true})
        writeFileSync(output, JSON.stringify({fetchedAt: new Date(0).toISOString(), releases: []}))
    }
})
