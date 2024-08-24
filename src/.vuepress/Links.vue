<script lang="ts" setup>

import {onMounted, ref} from "vue";

const links = ref([]);


onMounted(async () => {
  // 如果你使用的是 JSON 文件，可以使用 fetch 或 import 加载
  const response = await fetch('http://localhost:8080/links.json');
  links.value = await response.json();
  console.log(links.value.toString())
});

const onImageError = (event) => {
  event.target.src = ''; // 替换为默认图片的路径
};


</script>

<template>
  <div class="flink">
    <p>共{{ links.value.length }}个友链</p>
    <div v-for="link in links" :key="link.class_name" class="flink-list">
      <div class="flink-name">{{ link.class_name }}</div>
      <div class="flink-desc">{{ link.class_desc }}</div>
      <div v-for="item in link.link_list" :key="item.link" :style="{ background: item.theme_color || '#383838' }"
           class="flink-list-item">
        <a :href="item.link" :title="item.name" target="_blank">
          <div class="flink-item-icon">
            <img :alt="item.name" :src="item.avatar" class="no-lightbox" @error="onImageError($event)"/>
          </div>
          <div class="flink-item-name">{{ item.name }}</div>
          <div :title="item.descr" class="flink-item-desc">{{ item.descr }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.flink-item-name, .flink-item-desc {
  color: white !important;
}

.flink {
  margin-bottom: 20px;
}

.flink .flink-list {
  overflow: auto;
  padding: 10px 10px 0;
  text-align: left !important;
}

.flink .flink-list > .flink-list-item {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 15px 7px;
  width: calc(100% / 3 - 15px);
  height: 90px;
  border-radius: 12px;
  line-height: 17px;
  transition: background-color 0.25s linear;
  -webkit-transform: translateZ(0);
}

@media (max-width: 1024px) {
  .flink .flink-list > .flink-list-item {
    width: calc(50% - 15px) !important;
  }
}

@media (max-width: 600px) {
  .flink .flink-list > .flink-list-item {
    width: calc(100% - 15px) !important;
  }
}

.flink .flink-list > .flink-list-item:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: '';
  transition: background-color 0.25s linear;
  transform: scale(0);
}

.flink .flink-list > .flink-list-item:hover:before,
.flink .flink-list > .flink-list-item:focus:before,
.flink .flink-list > .flink-list-item:active:before {
  transform: scale(1);
  transition: background-color 0.25s linear;
}

.flink .flink-list > .flink-list-item a {
  //color: var(--font-color);
  text-decoration: none;
}

.flink .flink-list > .flink-list-item .flink-item-icon {
  float: left;
  overflow: hidden;
  margin: 15px 10px;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  transition: width 0.3s ease-out;
}

.flink .flink-list > .flink-list-item .flink-item-icon img {
  width: 100%;
  height: 100%;
  transition: filter 375ms ease-in 0.2s, transform 0.3s;
  object-fit: cover;
}

.flink .flink-list > .flink-list-item .img-alt {
  display: none;
}

.flink .flink-item-name {
  padding: 16px 10px 0 0;
  height: 40px;
  font-weight: bold;
  font-size: 1.43em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.flink .flink-item-desc {
  padding: 16px 10px 16px 0;
  height: 50px;
  font-size: 0.93em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.flink .flink-name {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.5em;
}


</style>