<script setup lang="ts">
import {onMounted, ref} from "vue"
import {fetchReleases, fetchRepoStats, totalDownloads} from "@/api/github"
import type {Release, RepoStats} from "@/api/github"
import {COMMUNITY} from "@/config"
import {HIGHLIGHTS, STEPS} from "@/data/features"
import {formatCount} from "@/utils/format"

const latest = ref<Release | null>(null)
const stats = ref<RepoStats | null>(null)
const downloads = ref<number | null>(null)
const releaseCount = ref<number | null>(null)

/**
 * 加载首页统计：最新版本号、Star/Fork 与累计下载。失败时这些数字不显示，不影响页面。
 */
async function loadStats() {
  const [releases, repo] = await Promise.allSettled([fetchReleases(), fetchRepoStats()])
  if (releases.status === 'fulfilled' && releases.value.releases.length) {
    latest.value = releases.value.releases[0]
    downloads.value = totalDownloads(releases.value.releases)
    releaseCount.value = releases.value.releases.length
  }
  if (repo.status === 'fulfilled') stats.value = repo.value
}

onMounted(loadStats)
</script>

<template>
  <section class="hero">
    <img class="hero-logo" src="/favicon.png" alt="AIDE Plus" width="96" height="96">
    <mdui-chip class="hero-badge" icon="android">{{ $t('home.badge') }}</mdui-chip>
    <h1 class="hero-title">{{ $t('home.title') }}</h1>
    <p class="hero-subtitle">{{ $t('home.subtitle') }}</p>
    <div class="hero-actions">
      <mdui-button icon="download" @click="$router.push('/download')">{{ $t('home.download') }}</mdui-button>
      <mdui-button variant="tonal" icon="menu_book" @click="$router.push('/docs')">{{ $t('home.docs') }}</mdui-button>
    </div>
    <p v-if="latest" class="hero-version">{{ $t('home.latest', {version: latest.tag}) }}</p>
  </section>

  <section class="stats-grid" v-if="stats || downloads !== null">
    <div class="stat" v-if="stats">
      <div class="stat-value">{{ formatCount(stats.stars) }}</div>
      <div class="stat-label">{{ $t('home.stats.stars') }}</div>
    </div>
    <div class="stat" v-if="stats">
      <div class="stat-value">{{ formatCount(stats.forks) }}</div>
      <div class="stat-label">{{ $t('home.stats.forks') }}</div>
    </div>
    <div class="stat" v-if="downloads !== null">
      <div class="stat-value">{{ formatCount(downloads) }}</div>
      <div class="stat-label">{{ $t('home.stats.downloads') }}</div>
    </div>
    <div class="stat" v-if="releaseCount !== null">
      <div class="stat-value">{{ releaseCount }}</div>
      <div class="stat-label">{{ $t('home.stats.releases') }}</div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('home.highlightsTitle') }}</h2>
    <div class="card-grid">
      <mdui-card v-for="h in HIGHLIGHTS" :key="h.id" class="feature-card" variant="filled" clickable
                 @click="$router.push(h.to)">
        <mdui-icon :name="h.icon" class="feature-icon"></mdui-icon>
        <h3>{{ $t(`home.highlights.${h.id}.title`) }}</h3>
        <p>{{ $t(`home.highlights.${h.id}.desc`) }}</p>
      </mdui-card>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('home.stepsTitle') }}</h2>
    <ol class="steps">
      <li v-for="(s, i) in STEPS" :key="s.id" class="step">
        <span class="step-index">{{ i + 1 }}</span>
        <div>
          <h3>{{ $t(`home.steps.${s.id}.title`) }}</h3>
          <p>{{ $t(`home.steps.${s.id}.desc`) }}</p>
        </div>
      </li>
    </ol>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('home.communityTitle') }}</h2>
    <p class="section-desc">{{ $t('home.communityDesc') }}</p>
    <div class="chip-row">
      <mdui-chip v-for="(c, i) in COMMUNITY" :key="i" :icon="c.icon" :href="c.url" target="_blank" rel="noopener">
        {{ $t(`about.community.${c.nameKey}`) }}<template v-if="c.extra"> {{ c.extra }}</template>
      </mdui-chip>
    </div>
  </section>
</template>
