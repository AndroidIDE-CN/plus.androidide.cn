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
  <v-sheet class="hero" color="primary" rounded elevation="2">
    <img class="hero-logo" src="/favicon.png" alt="AIDE Plus" width="88" height="88">
    <div class="hero-text">
      <div class="text-overline hero-badge">{{ $t('home.badge') }}</div>
      <h1 class="hero-title">{{ $t('home.title') }}</h1>
      <p class="hero-subtitle">{{ $t('home.subtitle') }}</p>
      <div class="hero-actions">
        <v-btn color="white" class="text-primary" size="large" prepend-icon="file_download" to="/download">
          {{ $t('home.download') }}
        </v-btn>
        <v-btn variant="outlined" color="white" size="large" prepend-icon="menu_book" to="/docs">
          {{ $t('home.docs') }}
        </v-btn>
      </div>
      <p v-if="latest" class="hero-version">{{ $t('home.latest', {version: latest.tag}) }}</p>
    </div>
  </v-sheet>

  <v-row class="stats-row" v-if="stats || downloads !== null" dense>
    <v-col v-if="stats" cols="6" sm="3">
      <v-card class="stat" elevation="1">
        <div class="stat-value">{{ formatCount(stats.stars) }}</div>
        <div class="stat-label">{{ $t('home.stats.stars') }}</div>
      </v-card>
    </v-col>
    <v-col v-if="stats" cols="6" sm="3">
      <v-card class="stat" elevation="1">
        <div class="stat-value">{{ formatCount(stats.forks) }}</div>
        <div class="stat-label">{{ $t('home.stats.forks') }}</div>
      </v-card>
    </v-col>
    <v-col v-if="downloads !== null" cols="6" sm="3">
      <v-card class="stat" elevation="1">
        <div class="stat-value">{{ formatCount(downloads) }}</div>
        <div class="stat-label">{{ $t('home.stats.downloads') }}</div>
      </v-card>
    </v-col>
    <v-col v-if="releaseCount !== null" cols="6" sm="3">
      <v-card class="stat" elevation="1">
        <div class="stat-value">{{ releaseCount }}</div>
        <div class="stat-label">{{ $t('home.stats.releases') }}</div>
      </v-card>
    </v-col>
  </v-row>

  <section class="section">
    <h2 class="section-title">{{ $t('home.highlightsTitle') }}</h2>
    <v-row>
      <v-col v-for="h in HIGHLIGHTS" :key="h.id" cols="12" sm="6" lg="4">
        <v-card class="feature-card" elevation="2" :to="h.to">
          <v-card-item>
            <template #prepend>
              <v-avatar color="primary" variant="tonal" rounded="circle">
                <v-icon :icon="h.icon"></v-icon>
              </v-avatar>
            </template>
            <v-card-title>{{ $t(`home.highlights.${h.id}.title`) }}</v-card-title>
          </v-card-item>
          <v-card-text>{{ $t(`home.highlights.${h.id}.desc`) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('home.stepsTitle') }}</h2>
    <v-card elevation="1">
      <v-list lines="two">
        <template v-for="(s, i) in STEPS" :key="s.id">
          <v-divider v-if="i > 0" inset></v-divider>
          <v-list-item :title="$t(`home.steps.${s.id}.title`)" :subtitle="$t(`home.steps.${s.id}.desc`)">
            <template #prepend>
              <v-avatar color="primary">{{ i + 1 }}</v-avatar>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('home.communityTitle') }}</h2>
    <p class="section-desc">{{ $t('home.communityDesc') }}</p>
    <div class="chip-row">
      <v-chip v-for="(c, i) in COMMUNITY" :key="i" :prepend-icon="c.icon" :href="c.url" target="_blank"
              rel="noopener" color="primary" variant="outlined">
        {{ $t(`about.community.${c.nameKey}`) }}<template v-if="c.extra">&nbsp;{{ c.extra }}</template>
      </v-chip>
    </div>
  </section>
</template>
