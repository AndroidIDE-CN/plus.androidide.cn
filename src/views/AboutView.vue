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

  <v-alert type="warning" variant="tonal" border="start" icon="gavel" :title="$t('about.noticeTitle')">
    {{ $t('about.notice') }}
  </v-alert>

  <section class="section">
    <h2 class="section-title">{{ $t('about.membersTitle') }}</h2>
    <v-row dense>
      <v-col v-for="m in MEMBERS" :key="m.name" cols="12" sm="6" md="4">
        <v-card elevation="1" :href="m.url" target="_blank" rel="noopener">
          <v-card-item :title="m.name" :subtitle="$t(`about.roles.${m.roleKey}`)">
            <template #prepend>
              <v-avatar color="primary">
                <v-img v-if="m.github" :src="`https://github.com/${m.github}.png?size=96`" :alt="m.name">
                  <template #error><span>{{ m.name.slice(0, 1) }}</span></template>
                </v-img>
                <span v-else>{{ m.name.slice(0, 1) }}</span>
              </v-avatar>
            </template>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('about.communityTitle') }}</h2>
    <v-card elevation="1">
      <v-list lines="two">
        <v-list-item v-for="(c, i) in COMMUNITY" :key="i" :prepend-icon="c.icon" append-icon="open_in_new"
                     :href="c.url" target="_blank" rel="noopener"
                     :title="$t(`about.community.${c.nameKey}`)" :subtitle="c.extra || c.url"></v-list-item>
      </v-list>
    </v-card>
  </section>

  <section class="section">
    <h2 class="section-title">{{ $t('about.thanksTitle') }}</h2>
    <p class="section-desc">{{ $t('about.thanksDesc') }}</p>
    <v-card elevation="1">
      <v-list lines="two">
        <v-list-item v-for="p in THANKS" :key="p.key" prepend-icon="favorite_border" append-icon="open_in_new"
                     :href="p.url" target="_blank" rel="noopener"
                     :title="p.name" :subtitle="$t(`about.thanks.${p.key}`)"></v-list-item>
      </v-list>
    </v-card>
  </section>
</template>
