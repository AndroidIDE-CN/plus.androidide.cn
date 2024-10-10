<script setup lang="ts">
import {RouterView} from 'vue-router'
import 'mdui/mdui.css'
import 'mdui'
import {changeLanguage} from "@/lang/i18n"
</script>

<script lang="ts">
import {CUSTOM_THEME_COLOR} from "@/config"
import {setColorScheme} from "mdui"
import i18n from "@/lang/i18n"

if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
let path = document.location.pathname.split('/').pop()
let title = (path) ? `menu.${path}` : 'menu.home'
document.title = `${i18n.global.t(title)} - AIDE Plus`
export default {
  data() {
    return {
      isOpen: false,
      appBarTitle: this.$t(title)
    }
  },
  methods: {
    menuButton() {
      this.isOpen = !this.isOpen
    },
    async menuClick(path: string, title: string) {
      this.$router.push(path).then(() => {
      }).catch((e) => {
        console.log(e)
      })
      title = this.$t(title)
      this.appBarTitle = title
      document.title = `${title} - AIDE Plus`
      if (window.innerWidth < 840) this.isOpen = false
    }
  }
}
</script>
<template>
  <div class="root-div">
    <mdui-layout class="root-contained">
      <mdui-top-app-bar scroll-behavior="elevate" scroll-target=".layout-main">
        <mdui-button-icon class="menu-button" icon="menu" @click="menuButton"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ appBarTitle }}</mdui-top-app-bar-title>
        <mdui-dropdown trigger="hover">
          <mdui-button-icon icon="translate" slot="trigger"></mdui-button-icon>
          <mdui-menu class="menu-transition" selects="single" :value="i18n.global.locale.value">
            <mdui-menu-item value="zh" @click="changeLanguage('zh')">简体中文</mdui-menu-item>
            <mdui-menu-item value="en" @click="changeLanguage('en')">English</mdui-menu-item>
          </mdui-menu>
        </mdui-dropdown>

        <mdui-dropdown trigger="hover">
          <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
          <mdui-menu>
            <mdui-menu-item>Item 1</mdui-menu-item>
            <mdui-menu-item>Item 2</mdui-menu-item>
          </mdui-menu>
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
  </div>
</template>