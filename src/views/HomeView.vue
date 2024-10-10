<script setup lang="ts">
import {marked} from "marked"

let md = "# Hello World!\n## Welcome AIDE Plus Official Website!"
for (let i = 0; i < 100; i++) {
  md += `\n### ${i + 1}`
}

let html = marked.parse(md)
</script>

<template>
  <div class="markdown-content" v-html="html"></div>
</template>
