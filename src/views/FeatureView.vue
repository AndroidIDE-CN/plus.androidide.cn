<script setup lang="ts">
import {marked} from "marked"

let md = '# Version Features\n## This is a feature of AIDE Plus!\n';
for (let i = 0; i < 100; i++) {
  md += `- ${i + 1}\n`
}

let html = marked.parse(md)
</script>

<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<style scoped>

</style>