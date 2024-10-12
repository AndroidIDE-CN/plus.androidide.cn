<script lang="ts">
import {marked} from "marked"
import axios from "axios";

export default {
  data() {
    return {
      html: marked.parse('** Load Failed! **')
    }
  },
  mounted() {
    axios.get('/hujiayucc.md').then(
        res => {
          this.html = marked.parse(res.data)
        }
    ).catch(e => {
      console.log(e)
    })
  }
}

</script>

<template>
  <div class="markdown-content" v-html="html"></div>
</template>