<script setup lang="ts">
import {marked} from "marked";
const content = marked.parse("# Hello")
</script>

<template>
  <div class="markdown-content" v-html="content"></div>
</template>

<style>

</style>
