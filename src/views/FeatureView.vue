<script setup lang="ts">
import {computed, ref} from "vue"
import {useI18n} from "vue-i18n"
import {FEATURE_CATEGORIES} from "@/data/features"

/** 一项功能：t 功能说明，where 打开位置，how 使用方式 */
interface FeatureItem {
  t: string
  where?: string[][]
  how?: string
}

const {t, tm, rt} = useI18n()

/** 当前筛选的分类，'all' 表示全部 */
const active = ref('all')
const keyword = ref('')

/**
 * 把打开位置拆成路径：先按“；”分成几条入口，每条再按“→”分成若干级。
 * @param where 打开位置原文
 * @returns 每条入口的各级名称
 */
function splitPath(where: string): string[][] {
  return where.split(/[；;]/).map(p => p.split(/\s*→\s*/).map(s => s.trim()).filter(Boolean)).filter(p => p.length)
}

/**
 * 读取 i18n 中某分类的功能列表，把消息对象转为普通字符串。
 * @param id 分类 id
 * @returns 功能列表
 */
function items(id: string): FeatureItem[] {
  return (tm(`features.cat.${id}.items`) as unknown as any[]).map(item => ({
    t: rt(item.t),
    where: item.where ? splitPath(rt(item.where)) : undefined,
    how: item.how ? rt(item.how) : undefined
  }))
}

/**
 * 判断功能是否匹配搜索关键字（功能、打开位置与使用方式都参与搜索）。
 * @param item 功能
 * @param q 小写关键字
 */
function matches(item: FeatureItem, q: string): boolean {
  if (!q) return true
  const where = item.where?.map(p => p.join(' ')).join(' ')
  return [item.t, where, item.how].some(v => v?.toLowerCase().includes(q))
}

/** 按分类与关键字过滤后的功能列表 */
const categories = computed(() => {
  const q = (keyword.value || '').trim().toLowerCase()
  return FEATURE_CATEGORIES
      .filter(c => active.value === 'all' || c.id === active.value)
      .map(c => ({
        ...c,
        title: t(`features.cat.${c.id}.title`),
        items: items(c.id).filter(item => matches(item, q))
      }))
      .filter(c => c.items.length)
})

/** 筛选后的功能总数 */
const total = computed(() => categories.value.reduce((n, c) => n + c.items.length, 0))

const planned = computed(() => (tm('features.planned') as unknown as any[]).map(item => rt(item)))
</script>

<template>
  <header class="page-header">
    <h1>{{ $t('features.title') }}</h1>
    <p>{{ $t('features.intro') }}</p>
  </header>

  <v-card class="feature-filter" elevation="1">
    <v-text-field v-model="keyword" class="feature-search" prepend-inner-icon="search"
                  :placeholder="$t('features.search')" clearable hide-details single-line flat
                  variant="solo" density="comfortable"></v-text-field>
    <v-divider></v-divider>
    <v-tabs v-model="active" show-arrows density="compact" color="primary">
      <v-tab value="all">{{ $t('features.filterAll') }}</v-tab>
      <v-tab v-for="c in FEATURE_CATEGORIES" :key="c.id" :value="c.id">
        {{ $t(`features.cat.${c.id}.title`) }}
      </v-tab>
    </v-tabs>
  </v-card>

  <p class="feature-count" v-if="categories.length">{{ $t('features.count', {n: total}) }}</p>

  <section v-for="c in categories" :key="c.id" class="feature-section">
    <h2 class="feature-section-title">
      <v-icon :icon="c.icon" size="22"></v-icon>
      <span>{{ c.title }}</span>
      <span class="feature-section-count">{{ c.items.length }}</span>
    </h2>
    <div class="feature-grid">
      <v-card v-for="(item, i) in c.items" :key="i" class="feature-tile" elevation="1">
        <div class="feature-tile-title">{{ item.t }}</div>
        <div v-if="item.where" class="feature-where">
          <div v-for="(path, j) in item.where" :key="j" class="feature-path">
            <template v-for="(seg, k) in path" :key="k">
              <v-icon v-if="k" icon="chevron_right" size="16" class="feature-path-sep"></v-icon>
              <span class="feature-crumb">{{ seg }}</span>
            </template>
          </div>
        </div>
        <p v-if="item.how" class="feature-how">{{ item.how }}</p>
      </v-card>
    </div>
  </section>
  <p v-if="!categories.length" class="empty-state">{{ $t('features.noMatch') }}</p>

  <section class="section" v-if="active === 'all' && !keyword">
    <h2 class="section-title">{{ $t('features.plannedTitle') }}</h2>
    <v-card elevation="1">
      <v-list density="compact">
        <v-list-item v-for="(item, i) in planned" :key="i" prepend-icon="radio_button_unchecked" :title="item">
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>
