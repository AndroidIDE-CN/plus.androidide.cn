<script setup lang="ts">
import {computed, ref, watch} from "vue"
import {RouterView, useRoute, useRouter} from "vue-router"
import {useI18n} from "vue-i18n"
import {useDisplay} from "vuetify"
import {changeLanguage} from "@/lang/i18n"
import {applyThemeMode, MONO, savedThemeMode, themeColor} from "@/plugins/vuetify"
import type {ThemeMode} from "@/plugins/vuetify"
import ColorPicker from "@/components/ColorPicker.vue"
import {LOGO_URL, REPO_URL} from "@/config"

/** 侧边栏导航项 */
const NAV_ITEMS = [
  {path: '/', icon: 'home', titleKey: 'menu.home'},
  {path: '/feature', icon: 'featured_play_list', titleKey: 'menu.feature'},
  {path: '/docs', icon: 'menu_book', titleKey: 'menu.docs'},
  {path: '/download', icon: 'file_download', titleKey: 'menu.download'},
  {path: '/about', icon: 'info', titleKey: 'menu.about'}
]

/** 明暗模式菜单 */
const THEME_MODES: { mode: ThemeMode, icon: string }[] = [
  {mode: 'light', icon: 'light_mode'},
  {mode: 'dark', icon: 'dark_mode'},
  {mode: 'auto', icon: 'brightness_auto'}
]

const route = useRoute()
const router = useRouter()
const {t, locale} = useI18n()
const {mdAndUp} = useDisplay()

/** 窄屏下抽屉是否打开；宽屏时抽屉常驻 */
const drawer = ref(mdAndUp.value)
const themeMode = ref<ThemeMode>(savedThemeMode())
const year = new Date().getFullYear()

const title = computed(() => t((route.meta.titleKey as string) || 'menu.home'))
/** 黑白配色时顶栏用白底（深色模式下为深灰），否则用主题色 */
const barColor = computed(() => themeColor.value === MONO ? 'surface' : 'primary')
const themeIcon = computed(() => THEME_MODES.find(m => m.mode === themeMode.value)?.icon ?? 'brightness_auto')

/**
 * 判断导航项是否为当前页面，/docs/xxx 也算文档页。
 * @param path 导航项路径
 */
function isActive(path: string): boolean {
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}

/**
 * 点击导航项：跳转并在窄屏收起抽屉。
 * @param path 目标路径
 */
function navigate(path: string) {
  router.push(path).catch(() => {})
  if (!mdAndUp.value) drawer.value = false
}

/**
 * 切换明暗模式。
 * @param mode light / dark / auto
 */
function setThemeMode(mode: ThemeMode) {
  themeMode.value = mode
  applyThemeMode(mode)
}

// 网页标题跟随路由；跨过断点时自动展开或收起抽屉
watch(title, v => document.title = `${v} - AIDE Plus`, {immediate: true})
watch(mdAndUp, v => drawer.value = v)
</script>

<template>
  <v-app>
    <v-app-bar :color="barColor" elevation="2" density="comfortable">
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>{{ title }}</v-app-bar-title>

      <template #append>
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon="translate" v-bind="props" :title="$t('menu.submenu.language')"></v-btn>
          </template>
          <v-list density="compact" :selected="[locale]">
            <v-list-item value="zh" title="简体中文" @click="changeLanguage('zh')"></v-list-item>
            <v-list-item value="en" title="English" @click="changeLanguage('en')"></v-list-item>
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn :icon="themeIcon" v-bind="props" :title="$t('menu.submenu.theme')"></v-btn>
          </template>
          <v-list density="compact" :selected="[themeMode]">
            <v-list-item v-for="m in THEME_MODES" :key="m.mode" :value="m.mode" :prepend-icon="m.icon"
                         :title="$t(`menu.theme.${m.mode}`)" @click="setThemeMode(m.mode)"></v-list-item>
          </v-list>
        </v-menu>

        <v-menu :close-on-content-click="false">
          <template #activator="{ props }">
            <v-btn icon="palette" v-bind="props" :title="$t('menu.submenu.color')"></v-btn>
          </template>
          <ColorPicker/>
        </v-menu>

        <v-btn class="d-none d-sm-flex" icon="code" :href="REPO_URL" target="_blank" rel="noopener"
               :title="$t('common.viewOnGithub')"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :permanent="mdAndUp" :temporary="!mdAndUp" width="256">
      <div class="drawer-brand">
        <img :src="LOGO_URL" alt="" width="40" height="40">
        <div>
          <div class="drawer-brand-name">AIDE Plus</div>
          <div class="drawer-brand-sub">plus.androidide.cn</div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-list nav color="primary">
        <v-list-item v-for="item in NAV_ITEMS" :key="item.path" :prepend-icon="item.icon"
                     :title="$t(item.titleKey)" :active="isActive(item.path)" @click="navigate(item.path)">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="page-wrapper">
        <RouterView/>
      </div>
      <footer class="site-footer">
        <span>{{ $t('footer.copyright', {year}) }}</span>
        <span>{{ $t('footer.madeWith') }}</span>
      </footer>
    </v-main>
  </v-app>
</template>
