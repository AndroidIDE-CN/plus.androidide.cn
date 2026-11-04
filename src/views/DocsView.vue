<script setup lang="ts">
import {computed, nextTick, ref, watch} from "vue"
import {useRoute, useRouter} from "vue-router"
import {useI18n} from "vue-i18n"
import {DOCS, loadDoc} from "@/docs"
import {REPO_URL} from "@/config"
import {renderMarkdown} from "@/utils/format"

interface TocItem {
  id: string
  text: string
  level: number
}

const route = useRoute()
const router = useRouter()
const {locale} = useI18n()

const html = ref('')
const toc = ref<TocItem[]>([])
const loading = ref(true)
const notFound = ref(false)
const content = ref<HTMLElement | null>(null)

/** 当前文档 id，未指定时显示第一篇 */
const currentId = computed(() => (route.params.id as string) || DOCS[0].id)
const index = computed(() => DOCS.findIndex(d => d.id === currentId.value))
const prev = computed(() => index.value > 0 ? DOCS[index.value - 1] : null)
const next = computed(() => index.value >= 0 && index.value < DOCS.length - 1 ? DOCS[index.value + 1] : null)

/**
 * 给 h2/h3 生成锚点 id，并收集成目录。
 * @param raw 已过滤的 HTML
 * @returns 带锚点的 HTML 与目录
 */
function buildToc(raw: string): { html: string, toc: TocItem[] } {
  const tpl = document.createElement('template')
  tpl.innerHTML = raw
  const items: TocItem[] = []
  tpl.content.querySelectorAll('h2, h3').forEach((el, i) => {
    const id = `section-${i + 1}`
    el.id = id
    items.push({id, text: el.textContent || '', level: el.tagName === 'H2' ? 2 : 3})
  })
  return {html: tpl.innerHTML, toc: items}
}

/**
 * 加载并渲染当前文档。
 */
async function load() {
  loading.value = true
  notFound.value = false
  const md = index.value >= 0 ? await loadDoc(currentId.value, locale.value) : null
  if (md === null) {
    notFound.value = true
    html.value = ''
    toc.value = []
  } else {
    const result = buildToc(renderMarkdown(md))
    html.value = result.html
    toc.value = result.toc
  }
  loading.value = false
  await nextTick()
  document.querySelector('.layout-main')?.scrollTo({top: 0})
}

/**
 * 打开另一篇文档。
 * @param id 文档 id
 */
function open(id: string) {
  router.push(`/docs/${id}`)
}

/**
 * 滚动到目录中的小节。
 * @param id 小节锚点
 */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

/**
 * 拦截文档正文中的站内链接，改用前端路由跳转，避免整页刷新。
 * @param event 点击事件
 */
function onContentClick(event: MouseEvent) {
  const link = (event.target as HTMLElement).closest('a')
  const href = link?.getAttribute('href')
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    event.preventDefault()
    router.push(href)
  }
}

/**
 * 手机端下拉选择文档。
 * @param event change 事件
 */
function onSelect(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  if (value && value !== currentId.value) open(value)
}

watch(currentId, load, {immediate: true})
</script>

<template>
  <div class="docs-layout">
    <aside class="docs-nav">
      <mdui-select class="docs-select" variant="outlined" :value="currentId" @change="onSelect">
        <mdui-menu-item v-for="d in DOCS" :key="d.id" :value="d.id" :icon="d.icon">
          {{ $t(`docs.items.${d.id}`) }}
        </mdui-menu-item>
      </mdui-select>
      <mdui-list class="docs-list">
        <mdui-list-subheader>{{ $t('docs.title') }}</mdui-list-subheader>
        <mdui-list-item v-for="d in DOCS" :key="d.id" rounded :icon="d.icon" :active="d.id === currentId"
                        @click="open(d.id)">
          {{ $t(`docs.items.${d.id}`) }}
        </mdui-list-item>
      </mdui-list>
    </aside>

    <article class="docs-content">
      <mdui-linear-progress v-if="loading"></mdui-linear-progress>
      <p v-else-if="notFound" class="empty-state">{{ $t('docs.notFound') }}</p>
      <div v-else ref="content" class="markdown-body" v-html="html" @click="onContentClick"></div>

      <nav class="docs-pager" v-if="!loading && !notFound">
        <mdui-button v-if="prev" variant="outlined" icon="arrow_back" @click="open(prev.id)">
          {{ $t('docs.prev') }} · {{ $t(`docs.items.${prev.id}`) }}
        </mdui-button>
        <span class="spacer"></span>
        <mdui-button v-if="next" variant="outlined" end-icon="arrow_forward" @click="open(next.id)">
          {{ $t('docs.next') }} · {{ $t(`docs.items.${next.id}`) }}
        </mdui-button>
      </nav>
      <p class="docs-edit">
        <a :href="`${REPO_URL}/issues`" target="_blank" rel="noopener">{{ $t('docs.edit') }}</a>
      </p>
    </article>

    <aside class="docs-toc" v-if="toc.length">
      <div class="docs-toc-title">{{ $t('docs.toc') }}</div>
      <a v-for="item in toc" :key="item.id" :class="['toc-item', `toc-level-${item.level}`]"
         :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">{{ item.text }}</a>
    </aside>
  </div>
</template>
