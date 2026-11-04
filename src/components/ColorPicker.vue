<script setup lang="ts">
import {setColorScheme} from "mdui"

/** 预设主题色，样式在 main.css 的 .color-preset 中 */
const PRESETS = ['red', 'purple', 'blue', 'green', 'yellow', 'grey']

/**
 * 把 rgb()/rgba() 颜色转为大写 HEX，其他格式原样返回。
 * @param rgb CSS 颜色值
 */
function rgbToHex(rgb: string) {
  const result = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([01]|0?\.\d+))?\)$/)
  if (!result) return rgb
  const hex = result.slice(1, 4).map(v => parseInt(v).toString(16).padStart(2, '0')).join('')
  return `#${hex}`.toUpperCase()
}

/**
 * 应用主题色并保存到本地。
 * @param color HEX 颜色
 */
function applyColor(color: string) {
  localStorage.setItem('themeColor', color)
  setColorScheme(color)
}

/**
 * 点击预设色块：读取色块背景色作为主题色。
 * @param event 点击事件
 */
function setPreset(event: MouseEvent) {
  applyColor(rgbToHex(window.getComputedStyle(event.target as Element).getPropertyValue('background-color')))
}

/**
 * 自选颜色变化。
 * @param event input 事件
 */
function setCustom(event: Event) {
  applyColor((event.target as HTMLInputElement).value)
}
</script>

<template>
  <mdui-card data-v-e56655cb="" class="card" variant="elevated">
    <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.preset') }}</div>
    <div data-v-e56655cb="" class="color-preset">
      <div v-for="c in PRESETS" :key="c" data-v-e56655cb="" :class="c" @click="setPreset"></div>
    </div>
    <div data-v-e56655cb="" class="color-label">{{ $t('menu.color.custom') }}</div>
    <input data-v-e56655cb="" type="color" class="color-custom" @input="setCustom">
  </mdui-card>
</template>
