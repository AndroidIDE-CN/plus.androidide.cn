<script setup lang="ts">
import {RouterView} from 'vue-router'
import 'mdui/mdui.css'
import 'mdui'
import {changeLanguage} from "@/lang/i18n"
import ColorPicker from "@/components/ColorPicker.vue"
</script>

<script lang="ts">
import {CUSTOM_THEME_COLOR} from "@/config"
import {getTheme, Menu, setColorScheme, setTheme} from "mdui"
import i18n from "@/lang/i18n"
import router from "@/router"
import type {Theme} from "mdui/internal/theme";

/** 宽屏断点，与 MDUI 的 --mdui-breakpoint-md 一致 */
const WIDE_SCREEN = 840

/** 侧边栏导航项 */
const NAV_ITEMS = [
  {path: '/', icon: 'home', titleKey: 'menu.home'},
  {path: '/feature', icon: 'featured_play_list', titleKey: 'menu.feature'},
  {path: '/docs', icon: 'menu_book', titleKey: 'menu.docs'},
  {path: '/download', icon: 'download', titleKey: 'menu.download'},
  {path: '/about', icon: 'alternate_email', titleKey: 'menu.about'}
]

if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
setTheme((localStorage.getItem('theme') as Theme) ?? 'auto')

export default {
  data() {
    return {
      isOpen: window.innerWidth >= WIDE_SCREEN,
      appBarTitle: '',
      displayIcon: (getTheme() === 'dark') ? 'dark_mode' : 'light_mode',
      displayIconButton: (window.innerWidth >= WIDE_SCREEN),
      navItems: NAV_ITEMS,
      year: new Date().getFullYear()
    }
  },
  methods: {
    /** 切换侧边栏 */
    menuButton() {
      this.isOpen = !this.isOpen
    },
    /**
     * 判断导航项是否为当前页面，/docs/xxx 也算文档页。
     * @param path 导航项路径
     */
    isActive(path: string): boolean {
      const current = this.$route.path
      return path === '/' ? current === '/' : current.startsWith(path)
    },
    /**
     * 点击导航项：跳转并在手机端收起侧边栏。
     * @param path 目标路径
     */
    menuClick(path: string) {
      this.$router.push(path).catch(() => {})
      if (window.innerWidth < WIDE_SCREEN) this.isOpen = false
    },
    /**
     * 根据路由 meta.titleKey 同步标题栏和网页标题。
     */
    updateTitle() {
      const key = (this.$route.meta.titleKey as string) || 'menu.home'
      this.appBarTitle = this.$t(key)
      document.title = `${this.appBarTitle} - AIDE Plus`
    },
    /**
     * 切换明暗模式并记住选择。
     * @param theme light / dark / auto
     */
    changeTheme(theme: string) {
      setTheme(theme as Theme)
      localStorage.setItem('theme', theme)
      this.displayIcon = (getTheme() === 'dark') ? 'dark_mode' : 'light_mode'
    },
    /** 主题菜单关闭时刷新图标与选中项 */
    onCheckTheme() {
      this.displayIcon = (getTheme() === 'dark') ? 'dark_mode' : 'light_mode';
      (document.querySelector('.menu-theme') as Menu).value = [getTheme()]
    },
    /** 窄屏菜单关闭时刷新图标 */
    subCheckTheme() {
      this.displayIcon = (getTheme() === 'dark') ? 'dark_mode' : 'light_mode'
    },
    /** 屏幕宽度变化时切换顶栏按钮布局，跨过断点时自动展开或收起侧边栏 */
    onResize() {
      const wide = window.innerWidth >= WIDE_SCREEN
      if (wide !== this.displayIconButton) this.isOpen = wide
      this.displayIconButton = wide
    }
  },
  watch: {
    $route() {
      this.updateTitle()
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    router.afterEach((to, from) => {
      // 切换页面时滚动容器回到顶部；文档页之间切换由文档页自己处理
      if (to.path !== from.path) document.querySelector('.layout-main')?.scrollTo({top: 0})
    })
    this.updateTitle()
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
<template>
  <mdui-layout class="root-contained">
    <mdui-top-app-bar scroll-behavior="elevate" scroll-target=".layout-main">
      <mdui-button-icon class="menu-button" icon="menu" @click="menuButton"></mdui-button-icon>
      <mdui-top-app-bar-title>{{ appBarTitle }}</mdui-top-app-bar-title>

      <mdui-dropdown v-if="!displayIconButton" trigger="click" @close="subCheckTheme" stay-open-on-click>
        <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
        <mdui-menu class="more_vert" submenu-trigger="hover click">
          <mdui-menu-item>
           {{ $t('menu.submenu.language') }}
            <mdui-menu-item slot="submenu" value="zh" @click="changeLanguage('zh')">简体中文</mdui-menu-item>
            <mdui-menu-item slot="submenu" value="en" @click="changeLanguage('en')">English</mdui-menu-item>
          </mdui-menu-item>

          <mdui-menu-item>
            {{ $t('menu.submenu.theme') }}
            <mdui-menu-item slot="submenu" class="light" value="light" @click="changeTheme('light')">
              {{ $t('menu.theme.light') }}
            </mdui-menu-item>
            <mdui-menu-item slot="submenu" class="dark" value="dark" @click="changeTheme('dark')">
              {{ $t('menu.theme.dark') }}
            </mdui-menu-item>
            <mdui-menu-item slot="submenu" class="auto" value="auto" @click="changeTheme('auto')">
              {{ $t('menu.theme.auto') }}
            </mdui-menu-item>
          </mdui-menu-item>

          <mdui-menu-item>
            {{ $t('menu.submenu.color') }}
            <ColorPicker slot="submenu"/>
          </mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>

      <mdui-dropdown v-if="displayIconButton" trigger="hover">
        <mdui-button-icon icon="translate" slot="trigger"></mdui-button-icon>
        <mdui-menu class="menu-transition" selects="single" :value="i18n.global.locale.value">
          <mdui-menu-item value="zh" @click="changeLanguage('zh')">简体中文</mdui-menu-item>
          <mdui-menu-item value="en" @click="changeLanguage('en')">English</mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>

      <mdui-dropdown v-if="displayIconButton" trigger="hover" @close="onCheckTheme">
        <mdui-button-icon slot="trigger" variant="standard" :icon="displayIcon"></mdui-button-icon>
        <mdui-menu class="menu-theme" selects="single" :value="getTheme()">
          <mdui-menu-item class="light" value="light" @click="changeTheme('light')">
            {{ $t('menu.theme.light') }}
          </mdui-menu-item>
          <mdui-menu-item class="dark" value="dark" @click="changeTheme('dark')">
            {{ $t('menu.theme.dark') }}
          </mdui-menu-item>
          <mdui-divider></mdui-divider>
          <mdui-menu-item class="auto" value="auto" @click="changeTheme('auto')">
            {{ $t('menu.theme.auto') }}
          </mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>

      <mdui-dropdown v-if="displayIconButton" trigger="hover">
        <mdui-button-icon icon="color_lens" slot="trigger"></mdui-button-icon>
        <ColorPicker/>
      </mdui-dropdown>

      <mdui-button-icon v-if="displayIconButton" icon="code" href="https://github.com/AndroidIDE-CN/AIDE-Plus"
                        target="_blank" rel="noopener"></mdui-button-icon>
    </mdui-top-app-bar>

    <mdui-navigation-drawer class="navigation-drawer" contained close-on-esc close-on-overlay-click
                            :open="isOpen" @close="isOpen=false">
      <mdui-list class="navigation-drawer-list">
        <mdui-list-item v-for="item in navItems" :key="item.path" rounded :icon="item.icon"
                        :active="isActive(item.path)" @click="menuClick(item.path)">
          {{ $t(item.titleKey) }}
        </mdui-list-item>
      </mdui-list>
    </mdui-navigation-drawer>

    <mdui-layout-main class="layout-main hide-scrollbar">
      <div class="page-wrapper">
        <RouterView/>
      </div>
      <footer class="site-footer">
        <span>{{ $t('footer.copyright', {year}) }}</span>
        <span class="site-footer-sub">{{ $t('footer.madeWith') }}</span>
      </footer>
    </mdui-layout-main>
  </mdui-layout>
</template>
