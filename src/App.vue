<script setup lang="ts">
import {RouterView} from 'vue-router'
import 'mdui/mdui.css'
import 'mdui'
import {changeLanguage} from "@/lang/i18n"
</script>

<script lang="ts">
import {CUSTOM_THEME_COLOR} from "@/config"
import {getTheme, Menu, setColorScheme, setTheme} from "mdui"
import i18n from "@/lang/i18n"
import type {Theme} from "mdui/internal/theme";

if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
let path = document.location.pathname.split('/').pop()
let title = (path) ? `menu.${path}` : 'menu.home'

function rgbToHex(rgb: string) {
  // 匹配 rgb 或 rgba 值
  let result = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([01]|0?\.\d+))?\)$/);

  if (!result) {
    return rgb; // 如果不是rgb/rgba，直接返回原值（如已有hex值）
  }

  // 将 RGB 分量转换为 16 进制，确保两位数
  let r = parseInt(result[1]).toString(16).padStart(2, '0');
  let g = parseInt(result[2]).toString(16).padStart(2, '0');
  let b = parseInt(result[3]).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`.toUpperCase(); // 返回大写的 HEX 颜色
}

document.title = `${i18n.global.t(title)} - AIDE Plus`
setTheme((localStorage.getItem('theme') as Theme) ?? 'auto')
export default {
  data() {
    return {
      isOpen: false,
      appBarTitle: this.$t(title),
      displayIcon: (getTheme() === 'dark') ? 'dark_mode' : 'light_mode',
      displayIconButton: (window.innerWidth >= 840)
    }
  },
  methods: {
    async menuButton() {
      this.isOpen = !this.isOpen
    },
    async menuClick(path: string, title: string) {
      this.$router.push(path).then(() => {
        title = this.$t(title)
        this.appBarTitle = title
        document.title = `${title} - AIDE Plus`
        if (window.innerWidth < 840) this.isOpen = false
      }).catch((e) => {
        console.log(e)
      })
    },
    async setColor(event: any) {
      let background = rgbToHex(window.getComputedStyle(event.target, null)
          .getPropertyValue('background-color'))
      localStorage.setItem('themeColor', background)
      setColorScheme(background)
    },
    async handleColorChange(event: any) {
      localStorage.setItem('themeColor', event.target?.value)
      setColorScheme(event.target?.value)
    },
    async changeTheme(theme: string) {
      setTheme(theme as Theme)
      localStorage.setItem('theme', theme)
    },
    async onCheckTheme() {
      this.displayIcon = (getTheme() === 'dark') ? 'dark_mode' : 'light_mode';
      (document.querySelector('.menu-theme') as Menu).value = [getTheme()]
    }
  },
  mounted() {
    window.onresize = () => {
      this.displayIconButton = (window.innerWidth >= 840)
    }
  }
}
</script>
<template>
  <mdui-layout class="root-contained">
    <mdui-top-app-bar scroll-behavior="elevate" scroll-target=".layout-main">
      <mdui-button-icon class="menu-button" icon="menu" @click="menuButton"></mdui-button-icon>
      <mdui-top-app-bar-title>{{ appBarTitle }}</mdui-top-app-bar-title>

      <mdui-dropdown v-if="!displayIconButton" trigger="click" @close="onCheckTheme()">
        <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
        <mdui-menu class="more_vert" submenu-trigger="click">
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
            <mdui-card slot="submenu" data-v-e56655cb="" class="card" variant="elevated">
              <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.preset') }}</div>
              <div data-v-e56655cb="" class="color-preset">
                <div data-v-e56655cb="" class="red" @click="setColor($event)"></div>
                <div data-v-e56655cb="" class="purple" @click="setColor($event)"></div>
                <div data-v-e56655cb="" class="blue" @click="setColor($event)"></div>
                <div data-v-e56655cb="" class="green" @click="setColor($event)"></div>
                <div data-v-e56655cb="" class="yellow" @click="setColor($event)"></div>
                <div data-v-e56655cb="" class="grey" @click="setColor($event)"></div>
              </div>
              <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.custom') }}</div>
              <input data-v-e56655cb="" type="color" class="color-custom" @input="handleColorChange">
            </mdui-card>
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

      <mdui-dropdown v-if="displayIconButton" trigger="hover" @close="onCheckTheme()">
        <mdui-button-icon slot="trigger" variant="standard" :icon="displayIcon"></mdui-button-icon>
        <mdui-menu class="menu-theme" selects="multiple" :value="getTheme()">
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
        <mdui-card data-v-e56655cb="" class="card" variant="elevated">
          <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.preset') }}</div>
          <div data-v-e56655cb="" class="color-preset">
            <div data-v-e56655cb="" class="red" @click="setColor($event)"></div>
            <div data-v-e56655cb="" class="purple" @click="setColor($event)"></div>
            <div data-v-e56655cb="" class="blue" @click="setColor($event)"></div>
            <div data-v-e56655cb="" class="green" @click="setColor($event)"></div>
            <div data-v-e56655cb="" class="yellow" @click="setColor($event)"></div>
            <div data-v-e56655cb="" class="grey" @click="setColor($event)"></div>
          </div>
          <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.custom') }}</div>
          <input data-v-e56655cb="" type="color" class="color-custom" @input="handleColorChange">
        </mdui-card>
      </mdui-dropdown>
    </mdui-top-app-bar>
    <mdui-navigation-drawer class="navigation-drawer" contained :open="isOpen" @overlay-click="isOpen=false">
      <mdui-list class="navigation-drawer-list">
        <mdui-menu-item icon="home" @click="menuClick('/','menu.home')">
          {{ $t('menu.home') }}
        </mdui-menu-item>
        <mdui-menu-item icon="featured_play_list" @click="menuClick('/feature','menu.feature')">
          {{ $t('menu.feature') }}
        </mdui-menu-item>
        <mdui-menu-item icon="alternate_email" @click="menuClick('/about','menu.about')">
          {{ $t('menu.about') }}
        </mdui-menu-item>
      </mdui-list>
    </mdui-navigation-drawer>

    <mdui-layout-main class="layout-main hide-scrollbar">
      <RouterView/>
    </mdui-layout-main>
  </mdui-layout>
  <mdui-bottom-app-bar scroll-target=".layout-main" scroll-behavior="hide" scroll-threshold="30">
    <span class="footer-content-text">
      Copyright © 2024 <a class="footer-content-text" href="https://github.com/hujiayucc" target="_blank">hujiayucc</a> All Rights Reserved.
    </span>
  </mdui-bottom-app-bar>
</template>