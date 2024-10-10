<script setup lang="ts">
import {marked} from "marked"

let md = "# About Us\n- Github: [hujiayucc](https://github.com/hujiayucc)\n"
md += "- Email: [hujiayucc@gmail.com](mailto:hujiayucc@gmail.com)"

let html = marked.parse(md)
</script>

<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<style>

</style>
