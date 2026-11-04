<script setup lang="ts">
import {COMMUNITY, MEMBERS} from "@/config"

/** 借鉴或集成的开源项目，desc 对应 i18n 中 about.thanks.<key> */
const THANKS = [
  {name: 'AIDE-Plus (Gradle)', url: 'https://github.com/neu233/AIDE-Plus', key: 'gradle'},
  {name: 'AndroidIDE', url: 'https://github.com/AndroidIDEOfficial/AndroidIDE', key: 'androidide'},
  {name: 'CodeAssist', url: 'https://github.com/tyron12233/CodeAssist', key: 'codeassist'},
  {name: 'Termux', url: 'https://github.com/termux/termux-app', key: 'termux'},
  {name: 'AIDE-Pro', url: 'https://github.com/AndroidIDE-CN/', key: 'aidepro'},
  {name: 'AIDE-Ndk-Install', url: 'https://github.com/ZeroAicy/AIDE-Ndk-Install', key: 'ndk'},
  {name: 'AIDE-Repair', url: 'https://github.com/ZeroAicy/AIDE-Repair', key: 'repair'}
]
</script>

<template>
  <header class="page-header">
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.intro') }}</p>
  </header>

  <mdui-card class="notice-card" variant="filled">
    <h2><mdui-icon name="gavel"></mdui-icon>{{ $t('about.noticeTitle') }}</h2>
    <p>{{ $t('about.notice') }}</p>
  </mdui-card>

  <section class="section">
    <h2 class="section-title">{{ $t('about.membersTitle') }}</h2>
    <div class="member-grid">
      <a v-for="m in MEMBERS" :key="m.name" class="member" :href="m.url" target="_blank" rel="noopener">
        <mdui-avatar :src="m.github ? `https://github.com/${m.github}.png?size=96` : undefined">
          {{ m.name.slice(0, 1) }}
        </mdui-avatar>
        <div>
          <div class="member-name">{{ m.name }}</div>
          <div class="member-role">{{ $t(`about.roles.${m.roleKey}`) }}</div>
        </div>
      </a>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('about.communityTitle') }}</h2>
    <mdui-list class="link-list">
      <mdui-list-item v-for="(c, i) in COMMUNITY" :key="i" :icon="c.icon" end-icon="open_in_new"
                      :href="c.url" target="_blank" rel="noopener">
        {{ $t(`about.community.${c.nameKey}`) }}
        <span slot="description">{{ c.extra || c.url }}</span>
      </mdui-list-item>
    </mdui-list>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('about.thanksTitle') }}</h2>
    <p class="section-desc">{{ $t('about.thanksDesc') }}</p>
    <mdui-list class="link-list">
      <mdui-list-item v-for="p in THANKS" :key="p.key" icon="favorite_border" end-icon="open_in_new"
                      :href="p.url" target="_blank" rel="noopener">
        {{ p.name }}
        <span slot="description">{{ $t(`about.thanks.${p.key}`) }}</span>
      </mdui-list-item>
    </mdui-list>
  </section>
</template>
