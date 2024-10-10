<script setup lang="ts">
import { RouterView } from 'vue-router'
import 'mdui/mdui.css'
import 'mdui'
import i18n, { changeLan } from "@/lang/i18n"
</script>

<script lang="ts">
import router from "@/router"
import {CUSTOM_THEME_COLOR} from "@/config"
import {setColorScheme} from "mdui"
if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)

export default {
  data() {
    return {
      isOpen: false,
      appBarTitle: this.$t('menu.home')
    }
  },
  methods: {
    menuClick() {
      this.isOpen = !this.isOpen
    },
    menuItemClick(path: string, title: string) {
      router.push(path)
      this.appBarTitle = title
      if (window.innerWidth < 840) this.isOpen = false
    }
  }
}
</script>
<template>
  <div class="root-div">
    <mdui-layout class="root-contained">
      <mdui-top-app-bar scroll-behavior="elevate" scroll-target=".layout-main">
        <mdui-button-icon class="menu-button" icon="menu" @click="menuClick"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ appBarTitle }}</mdui-top-app-bar-title>
        <mdui-dropdown trigger="hover">
          <mdui-button-icon icon="translate" slot="trigger"></mdui-button-icon>
          <mdui-menu class="menu-transition" selects="single" :value="i18n.global.locale.value">
            <mdui-menu-item value="zh" @click="changeLan('zh')">简体中文</mdui-menu-item>
            <mdui-menu-item value="en" @click="changeLan('en')">English</mdui-menu-item>
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
          <mdui-menu-item class="menu-list-home" icon="home" @click="menuItemClick('/',$t('menu.home'))">
            {{ $t('menu.home') }}
          </mdui-menu-item>
          <mdui-menu-item class="menu-list-feature" icon="featured_play_list" @click="menuItemClick('/feature', $t('menu.feature'))">
            {{ $t('menu.feature') }}
          </mdui-menu-item>
          <mdui-menu-item class="menu-list-about" icon="alternate_email" @click="menuItemClick('/about', $t('menu.about'))">
            {{ $t('menu.about') }}
          </mdui-menu-item>
        </mdui-list>
      </mdui-navigation-drawer>

      <mdui-layout-main class="layout-main hide-scrollbar">
        <keep-alive>
          <mdui-layout-main>
            <RouterView />
          </mdui-layout-main>
        </keep-alive>
      </mdui-layout-main>
    </mdui-layout>
    <mdui-bottom-app-bar scroll-target=".layout-main" scroll-behavior="hide" scroll-threshold="30">
    <span class="footer-content-text">
      Copyright © 2024 <a class="footer-content-text" href="https://github.com/hujiayucc" target="_blank">hujiayucc</a> All Rights Reserved.
    </span>
    </mdui-bottom-app-bar>
  </div>
</template>