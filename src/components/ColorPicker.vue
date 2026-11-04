<script setup lang="ts">
import {ref} from "vue"
import {applyPrimaryColor} from "@/plugins/vuetify"
import {CUSTOM_THEME_COLOR} from "@/config"

/** MD2 调色板中的预设主题色（700 色阶） */
const PRESETS = ['#D32F2F', '#C2185B', '#7B1FA2', '#303F9F', '#1976D2', '#0097A7', '#00796B', '#388E3C', '#F57C00', '#455A64']

const current = ref(CUSTOM_THEME_COLOR.toUpperCase())

/**
 * 应用主题色。
 * @param color HEX 颜色
 */
function pick(color: string) {
  current.value = color.toUpperCase()
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
      <button v-for="c in PRESETS" :key="c" type="button" class="color-swatch" :style="{ background: c }"
              :aria-label="c" @click="pick(c)">
        <v-icon v-if="current === c" icon="check" color="white" size="18"></v-icon>
      </button>
    </div>
    <v-card-subtitle>{{ $t('menu.color.custom') }}</v-card-subtitle>
    <div class="color-custom-row">
      <input type="color" class="color-custom" :value="current" @input="onCustom">
      <code>{{ current }}</code>
    </div>
  </v-card>
</template>
