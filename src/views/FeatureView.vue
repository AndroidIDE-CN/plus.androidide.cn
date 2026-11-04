<script setup lang="ts">
import {computed, ref} from "vue"
import {useI18n} from "vue-i18n"
import {useDisplay} from "vuetify"
import {FEATURE_CATEGORIES} from "@/data/features"

/** 一项功能：t 功能说明，where 打开位置，how 使用方式 */
interface FeatureItem {
  t: string
  where?: string
  how?: string
}

const {t, tm, rt} = useI18n()
/** 手机上筛选条改为横向滚动，避免占满一屏 */
const {smAndUp} = useDisplay()

/** 当前筛选的分类，'all' 表示全部 */
const active = ref('all')
const keyword = ref('')
/** 只显示带打开位置的功能 */
const entryOnly = ref(false)

/**
 * 读取 i18n 中某分类的功能列表，把消息对象转为普通字符串。
 * @param id 分类 id
 * @returns 功能列表
 */
function items(id: string): FeatureItem[] {
  return (tm(`features.cat.${id}.items`) as unknown as any[]).map(item => ({
    t: rt(item.t),
    where: item.where ? rt(item.where) : undefined,
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
  return [item.t, item.where, item.how].some(v => v?.toLowerCase().includes(q))
}

/** 按分类、关键字与“只看有入口”过滤后的功能列表 */
const categories = computed(() => {
  const q = (keyword.value || '').trim().toLowerCase()
  return FEATURE_CATEGORIES
      .filter(c => active.value === 'all' || c.id === active.value)
      .map(c => ({
        ...c,
        title: t(`features.cat.${c.id}.title`),
        items: items(c.id).filter(item => matches(item, q) && (!entryOnly.value || item.where))
      }))
      .filter(c => c.items.length)
})

const planned = computed(() => (tm('features.planned') as unknown as any[]).map(item => rt(item)))
</script>

<template>
  <header class="page-header">
    <h1>{{ $t('features.title') }}</h1>
    <p>{{ $t('features.intro') }}</p>
  </header>

  <v-card class="toolbar-card" elevation="1">
    <v-text-field v-model="keyword" prepend-inner-icon="search" :label="$t('features.search')" clearable
                  hide-details density="comfortable"></v-text-field>
    <v-checkbox v-model="entryOnly" :label="$t('features.entryOnly')" color="primary" hide-details
                density="compact"></v-checkbox>
    <v-chip-group v-model="active" mandatory selected-class="text-primary" :column="smAndUp">
      <v-chip value="all" filter variant="outlined">{{ $t('features.filterAll') }}</v-chip>
      <v-chip v-for="c in FEATURE_CATEGORIES" :key="c.id" :value="c.id" :prepend-icon="c.icon" filter variant="outlined">
        {{ $t(`features.cat.${c.id}.title`) }}
      </v-chip>
    </v-chip-group>
  </v-card>

  <div class="masonry">
    <v-card v-for="c in categories" :key="c.id" class="category-card" elevation="2">
      <v-card-item>
        <template #prepend>
          <v-icon :icon="c.icon" color="primary"></v-icon>
        </template>
        <v-card-title>{{ c.title }}</v-card-title>
      </v-card-item>
      <v-divider></v-divider>
      <ul class="feature-list">
        <li v-for="(item, i) in c.items" :key="i" class="feature-item">
          <div class="feature-line">
            <v-icon icon="check_circle" color="primary" size="20" class="feature-check"></v-icon>
            <span>{{ item.t }}</span>
          </div>
          <div v-if="item.where" class="feature-meta">
            <span class="meta-label"><v-icon icon="place" size="16"></v-icon>{{ $t('features.where') }}</span>
            <span class="meta-path">{{ item.where }}</span>
          </div>
          <div v-if="item.how" class="feature-meta">
            <span class="meta-label"><v-icon icon="lightbulb" size="16"></v-icon>{{ $t('features.how') }}</span>
            <span>{{ item.how }}</span>
          </div>
        </li>
      </ul>
    </v-card>
  </div>
  <p v-if="!categories.length" class="empty-state">{{ $t('features.noMatch') }}</p>

  <section class="section" v-if="active === 'all' && !keyword && !entryOnly">
    <h2 class="section-title">{{ $t('features.plannedTitle') }}</h2>
    <v-card elevation="1">
      <v-list density="compact">
        <v-list-item v-for="(item, i) in planned" :key="i" prepend-icon="radio_button_unchecked" :title="item">
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>
