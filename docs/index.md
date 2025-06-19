---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: AIDE Plus
  text:  |
    一个简单的IDE
    基于原版AIDE
  tagline: AIDE、AIDE+、AIDE-Plus、AIDE魔改版
  image:
    src: ./icon.svg
    alt: AIDE-Plus
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 使用帮助
      link: /docs/help/get-started
    - theme: alt
      text: 开发文档
      link: 


features:
  - title: Eclipse Compiler for Java
    details: ECJ 是 Eclipse 项目中用于编译 Java 代码的编译器
    icon: 🏷️
    link: /docs/help/ecj
    
  - title: D8 Dex Compiler
    details: D8 是将 .class 文件转换为 .dex 文件的编译器。
    icon: ✒️
    link: /docs/help/d8

    
  - title: R8 Shrinker and Obfuscator
    details: R8 是 代码优化、压缩和混淆 工具
    icon: 🛡️
    link: /docs/help/r8
    
  - title: Android Asset Packaging Tool 2
    details: AAPT2用于处理和打包应用中的资源文件（如布局、图像、字符串等）
    icon: 🎈
    link: /docs/help/aapt2
    
  - title: Zipalign
    details: 优化 APK 文件的对齐，以提升应用在设备上的性能并减少 APK 文件大小
    icon: 🔨
    link: /docs/help/zipalign

  - title: More
    details: 更多更新内容点击查看
    icon: 🧾
    
    
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<div style="padding-top: 48px;">
  <h2>应用预览</h2>
  <AppCarousel />
</div>
