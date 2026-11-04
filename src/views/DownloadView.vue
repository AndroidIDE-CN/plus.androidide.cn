<script setup lang="ts">
import {computed, onMounted, ref} from "vue"
import {useI18n} from "vue-i18n"
import {fetchReleases} from "@/api/github"
import type {Release, ReleaseAsset, ReleaseResult} from "@/api/github"
import {DOWNLOAD_MIRRORS, REPO_URL} from "@/config"
import {assetPackage, formatDate, formatSize, MAIN_PACKAGE, renderMarkdown} from "@/utils/format"

const {t, tm, rt, locale} = useI18n()

const result = ref<ReleaseResult | null>(null)
const loading = ref(true)
const failed = ref(false)
/** 当前选择的下载线路下标 */
const mirror = ref(Number(localStorage.getItem('downloadMirror') || 0) || 0)
/** 已展开更新说明的历史版本 */
const expanded = ref<Set<string>>(new Set())
/** 刚复制过 SHA-256 的附件名 */
const copied = ref('')

const latest = computed<Release | null>(() => result.value?.releases[0] ?? null)
const history = computed<Release[]>(() => result.value?.releases.slice(1) ?? [])
/** 最新版本的更新说明 HTML，只在数据变化时重新渲染 */
const latestHtml = computed(() => latest.value?.body ? renderMarkdown(latest.value.body) : '')
/** 历史版本更新说明 HTML 缓存，展开时才渲染 */
const historyHtml = new Map<string, string>()
const tips = computed(() => (tm('download.tips') as unknown as any[]).map(item => rt(item)))

/** 数据来源提示文字 */
const sourceText = computed(() => {
  if (!result.value) return ''
  const time = new Date(result.value.fetchedAt).toLocaleString(locale.value === 'zh' ? 'zh-CN' : 'en-US')
  return t(`download.source.${result.value.source}`, {time})
})

/**
 * 加载发布列表。
 * @param force 是否跳过缓存重新请求
 */
async function load(force = false) {
  loading.value = true
  historyHtml.clear()
  expanded.value = new Set()
  failed.value = false
  try {
    result.value = await fetchReleases(force)
  } catch {
    failed.value = true
  } finally {
    loading.value = false
  }
}

/**
 * 附件排序：推荐包名在前，其余 APK 次之，非 APK 最后。
 * @param assets 附件列表
 */
function sortAssets(assets: ReleaseAsset[]): ReleaseAsset[] {
  const rank = (a: ReleaseAsset) => {
    if (!a.name.endsWith('.apk')) return 2
    const pkg = assetPackage(a.name)
    return pkg === MAIN_PACKAGE || pkg === null ? 0 : 1
  }
  return [...assets].sort((a, b) => rank(a) - rank(b))
}

/**
 * 是否为推荐下载的附件：包名为正式包名，或只有一个 APK 的旧版本。
 * @param asset 附件
 * @param release 所属版本
 */
function isRecommended(asset: ReleaseAsset, release: Release): boolean {
  const pkg = assetPackage(asset.name)
  if (pkg) return pkg === MAIN_PACKAGE
  return asset.name.endsWith('.apk') && release.assets.filter(a => a.name.endsWith('.apk')).length === 1
}

/**
 * 按所选线路拼接下载地址。
 * @param url GitHub 原始下载地址
 */
function downloadUrl(url: string): string {
  const m = DOWNLOAD_MIRRORS[mirror.value] ?? DOWNLOAD_MIRRORS[0]
  return m.prefix ? m.prefix + url : url
}

/**
 * 切换下载线路并记住选择。
 * @param value 线路下标
 */
function onMirror(value: number) {
  mirror.value = value
  localStorage.setItem('downloadMirror', String(value))
}

/** 下载线路选项 */
const mirrorItems = computed(() => DOWNLOAD_MIRRORS.map((m, i) => ({
  value: i,
  title: m.labelKey ? t(`download.mirrors.${m.labelKey}`) : (m.label ?? '')
})))

/**
 * 复制附件的 SHA-256。
 * @param asset 附件
 */
async function copyDigest(asset: ReleaseAsset) {
  if (!asset.digest) return
  try {
    await navigator.clipboard.writeText(asset.digest.replace(/^sha256:/, ''))
    copied.value = asset.name
    setTimeout(() => copied.value = '', 2000)
  } catch {
    // 不支持剪贴板时用户仍可手动选中文本复制
  }
}

/**
 * 展开或收起历史版本的更新说明。
 * @param tag 版本标签
 */
function toggle(tag: string) {
  const release = history.value.find(r => r.tag === tag)
  if (release && !historyHtml.has(tag)) historyHtml.set(tag, renderMarkdown(release.body))
  const next = new Set(expanded.value)
  next.has(tag) ? next.delete(tag) : next.add(tag)
  expanded.value = next
}

onMounted(() => load())
</script>

<template>
  <header class="page-header">
    <h1>{{ $t('download.title') }}</h1>
    <p>{{ $t('download.subtitle') }}</p>
  </header>

  <div class="download-toolbar">
    <span class="source-text" v-if="result">
      <v-icon :icon="result.source === 'snapshot' ? 'cloud_off' : 'cloud_done'" size="18"></v-icon>
      {{ sourceText }}
    </span>
    <span class="spacer"></span>
    <v-select v-if="DOWNLOAD_MIRRORS.length > 1" class="mirror-select" :label="$t('download.mirror')"
              :items="mirrorItems" :model-value="mirror" density="compact" hide-details
              @update:model-value="onMirror"></v-select>
    <v-btn variant="text" prepend-icon="refresh" :loading="loading" @click="load(true)">
      {{ $t('download.refresh') }}
    </v-btn>
  </div>

  <v-progress-linear v-if="loading && !result" indeterminate color="primary"></v-progress-linear>

  <v-card v-else-if="failed && !result" class="state-card" elevation="1">
    <v-icon icon="error_outline" color="error" size="40"></v-icon>
    <p>{{ $t('common.loadFailed') }}</p>
    <div>
      <v-btn @click="load(true)">{{ $t('common.retry') }}</v-btn>
      <v-btn variant="text" :href="`${REPO_URL}/releases`" target="_blank">{{ $t('common.viewOnGithub') }}</v-btn>
    </div>
  </v-card>

  <p v-else-if="!latest" class="empty-state">{{ $t('download.empty') }}</p>

  <template v-else>
    <v-card class="release-card latest" elevation="3">
      <v-card-item>
        <v-card-subtitle class="release-label">{{ $t('download.latest') }}</v-card-subtitle>
        <v-card-title class="release-name">{{ latest.name }}</v-card-title>
        <div class="release-meta">
          <span>{{ $t('download.publishedAt', {date: formatDate(latest.publishedAt, locale)}) }}</span>
          <v-chip v-if="latest.prerelease" size="small" color="warning">{{ $t('download.prerelease') }}</v-chip>
        </div>
        <template #append>
          <v-btn icon="open_in_new" variant="text" :href="latest.url" target="_blank" rel="noopener"
                 :title="$t('common.viewOnGithub')"></v-btn>
        </template>
      </v-card-item>

      <v-card-text>
        <p v-if="!latest.assets.length" class="empty-state">{{ $t('download.noAssets') }}</p>
        <div class="asset-list">
          <v-sheet v-for="asset in sortAssets(latest.assets)" :key="asset.name" rounded border
                   :class="['asset', {recommended: isRecommended(asset, latest)}]">
            <div class="asset-info">
              <div class="asset-title">
                <v-icon icon="android" color="success"></v-icon>
                <span class="asset-name">{{ asset.name }}</span>
                <v-chip v-if="isRecommended(asset, latest)" size="small" color="primary" prepend-icon="star"
                        variant="flat">
                  {{ $t('download.recommended') }}
                </v-chip>
              </div>
              <div class="asset-meta">
                <span v-if="assetPackage(asset.name)">{{ $t('download.packageName', {name: assetPackage(asset.name)}) }}</span>
                <span>{{ formatSize(asset.size) }}</span>
                <span>{{ $t('download.downloads', {count: asset.downloadCount}) }}</span>
              </div>
              <div class="asset-digest" v-if="asset.digest">
                <span class="digest-label">{{ $t('download.sha256') }}</span>
                <code>{{ asset.digest.replace(/^sha256:/, '') }}</code>
                <v-btn :icon="copied === asset.name ? 'check' : 'content_copy'" variant="text" size="small"
                       :title="copied === asset.name ? $t('download.copied') : $t('download.copy')"
                       @click="copyDigest(asset)"></v-btn>
              </div>
            </div>
            <v-btn class="asset-download" :variant="isRecommended(asset, latest) ? 'elevated' : 'outlined'"
                   prepend-icon="file_download" :href="downloadUrl(asset.url)" rel="noopener">
              {{ formatSize(asset.size) }}
            </v-btn>
          </v-sheet>
        </div>
      </v-card-text>

      <template v-if="latest.body">
        <v-divider></v-divider>
        <v-card-text>
          <h3 class="changelog-title">{{ $t('download.changelog') }}</h3>
          <div class="markdown-body changelog" v-html="latestHtml"></div>
        </v-card-text>
      </template>
    </v-card>

    <v-row class="info-grid">
      <v-col cols="12" md="6">
        <v-card class="info-card" elevation="1">
          <v-card-item prepend-icon="help_outline" :title="$t('download.packagesTitle')"></v-card-item>
          <v-card-text>{{ $t('download.packagesDesc') }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="info-card" elevation="1">
          <v-card-item prepend-icon="tips_and_updates" :title="$t('download.tipsTitle')"></v-card-item>
          <v-card-text>
            <ul>
              <li v-for="(tip, i) in tips" :key="i">{{ tip }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <section class="section" v-if="history.length">
      <h2 class="section-title">{{ $t('download.history') }}</h2>
      <v-card v-for="r in history" :key="r.tag" class="release-card" elevation="1">
        <v-card-item>
          <v-card-title class="release-name small">{{ r.name }}</v-card-title>
          <div class="release-meta">
            <span>{{ formatDate(r.publishedAt, locale) }}</span>
            <v-chip v-if="r.prerelease" size="small" color="warning">{{ $t('download.prerelease') }}</v-chip>
          </div>
          <template #append>
            <v-btn icon="open_in_new" variant="text" :href="r.url" target="_blank" rel="noopener"></v-btn>
          </template>
        </v-card-item>
        <v-card-text class="asset-chips">
          <v-btn v-for="asset in sortAssets(r.assets)" :key="asset.name" variant="outlined" size="small"
                 prepend-icon="file_download" :href="downloadUrl(asset.url)" rel="noopener">
            {{ assetPackage(asset.name) || asset.name }} · {{ formatSize(asset.size) }}
          </v-btn>
          <span v-if="!r.assets.length" class="muted">{{ $t('download.noAssets') }}</span>
        </v-card-text>
        <template v-if="r.body">
          <v-card-actions>
            <v-btn variant="text" :append-icon="expanded.has(r.tag) ? 'expand_less' : 'expand_more'"
                   @click="toggle(r.tag)">
              {{ expanded.has(r.tag) ? $t('download.showLess') : $t('download.showMore') }}
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card-text v-if="expanded.has(r.tag)" class="markdown-body changelog" v-html="historyHtml.get(r.tag)">
            </v-card-text>
          </v-expand-transition>
        </template>
      </v-card>
      <div class="center">
        <v-btn variant="outlined" append-icon="open_in_new" :href="`${REPO_URL}/releases`" target="_blank">
          {{ $t('download.allReleases') }}
        </v-btn>
      </div>
    </section>
  </template>
</template>
