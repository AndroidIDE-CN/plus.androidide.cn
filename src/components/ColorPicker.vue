<script setup lang="ts">
import {ref} from "vue"
import {applyPrimaryColor, MONO} from "@/plugins/vuetify"
import {CUSTOM_THEME_COLOR} from "@/config"

/** MD2 调色板中的预设主题色（700 色阶） */
const PRESETS = ['#D32F2F', '#C2185B', '#7B1FA2', '#303F9F', '#1976D2', '#0097A7', '#00796B', '#388E3C', '#F57C00', '#455A64']

/** 当前选择：MONO 或大写 HEX */
const current = ref(CUSTOM_THEME_COLOR === MONO ? MONO : CUSTOM_THEME_COLOR.toUpperCase())

/**
 * 应用主题色。
 * @param color HEX 颜色或 MONO
 */
function pick(color: string) {
  current.value = color === MONO ? MONO : color.toUpperCase()
  applyPrimaryColor(color)
}

/**
 * 自选颜色变化。
 * @param event input 事件
 */
function onCustom(event: Event) {
  pick((event.target as HTMLInputElement).value)
}
</script>

<template>
  <v-card class="color-card" min-width="248">
    <v-card-subtitle class="pt-3">{{ $t('menu.color.preset') }}</v-card-subtitle>
    <div class="color-grid">
      <button type="button" class="color-swatch mono" :aria-label="$t('menu.color.mono')" :title="$t('menu.color.mono')"
              @click="pick(MONO)">
        <v-icon v-if="current === MONO" icon="check" color="white" size="18"></v-icon>
      </button>
      <button v-for="c in PRESETS" :key="c" type="button" class="color-swatch" :style="{ background: c }"
              :aria-label="c" @click="pick(c)">
        <v-icon v-if="current === c" icon="check" color="white" size="18"></v-icon>
      </button>
    </div>
    <v-card-subtitle>{{ $t('menu.color.custom') }}</v-card-subtitle>
    <div class="color-custom-row">
      <input type="color" class="color-custom" :value="current === MONO ? '#212121' : current" @input="onCustom">
      <code>{{ current === MONO ? $t('menu.color.mono') : current }}</code>
    </div>
  </v-card>
</template>
