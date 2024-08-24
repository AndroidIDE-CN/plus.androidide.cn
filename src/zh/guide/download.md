---

title: 下载

order: 1
# 设置作者
# author: 罪慾
sticky: false
star: false
---
<div id="article-container">
    <div class="flink" v-html="flinkContent"></div>
</div>

<span>aaaa</span>


<script>

import {onMounted, ref} from "vue";

const list = ref([]);


onMounted(async () => {
  const response = await fetch('/links.json');
  list.value = await response.json();
});


</script>
