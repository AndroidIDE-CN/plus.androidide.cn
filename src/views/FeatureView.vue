<script setup lang="ts">
import {computed, ref} from "vue"
import {useI18n} from "vue-i18n"
import {FEATURE_CATEGORIES} from "@/data/features"

const {t, tm, rt} = useI18n()

/** 当前筛选的分类，'all' 表示全部 */
const active = ref('all')
const keyword = ref('')

/**
 * 读取 i18n 中的字符串数组。
 * @param key i18n 键
 * @returns 字符串数组
 */
function list(key: string): string[] {
  return (tm(key) as unknown as any[]).map(item => rt(item))
}

/** 按分类和关键字过滤后的功能列表 */
const categories = computed(() => {
  const q = keyword.value.trim().toLowerCase()
  return FEATURE_CATEGORIES
      .filter(c => active.value === 'all' || c.id === active.value)
      .map(c => ({
        ...c,
        title: t(`features.cat.${c.id}.title`),
        items: list(`features.cat.${c.id}.items`).filter(item => !q || item.toLowerCase().includes(q))
      }))
      .filter(c => c.items.length)
})

const planned = computed(() => list('features.planned'))

/**
 * 输入框内容变化。
 * @param event input 事件
 */
function onSearch(event: Event) {
  keyword.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <header class="page-header">
    <h1>{{ $t('features.title') }}</h1>
    <p>{{ $t('features.intro') }}</p>
  </header>

  <div class="toolbar">
    <mdui-text-field class="search-field" variant="outlined" icon="search" clearable
                     :label="$t('features.search')" :value="keyword" @input="onSearch"
                     @clear="keyword = ''"></mdui-text-field>
    <div class="chip-row chip-scroll">
      <mdui-chip selectable :selected="active === 'all'" @click="active = 'all'">
        {{ $t('features.filterAll') }}
      </mdui-chip>
      <mdui-chip v-for="c in FEATURE_CATEGORIES" :key="c.id" selectable :icon="c.icon"
                 :selected="active === c.id" @click="active = c.id">
        {{ $t(`features.cat.${c.id}.title`) }}
      </mdui-chip>
    </div>
  </div>

  <div class="masonry">
    <mdui-card v-for="c in categories" :key="c.id" class="category-card" variant="outlined">
      <div class="category-head">
        <mdui-icon :name="c.icon" class="feature-icon"></mdui-icon>
        <h2>{{ c.title }}</h2>
      </div>
      <ul class="check-list">
        <li v-for="(item, i) in c.items" :key="i">
          <mdui-icon name="check_circle" class="check-icon"></mdui-icon>
          <span>{{ item }}</span>
        </li>
      </ul>
    </mdui-card>
  </div>
  <p v-if="!categories.length" class="empty-state">{{ $t('features.noMatch') }}</p>

  <section class="section" v-if="active === 'all' && !keyword">
    <h2 class="section-title">{{ $t('features.plannedTitle') }}</h2>
    <ul class="check-list planned">
      <li v-for="(item, i) in planned" :key="i">
        <mdui-icon name="radio_button_unchecked" class="check-icon"></mdui-icon>
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>
