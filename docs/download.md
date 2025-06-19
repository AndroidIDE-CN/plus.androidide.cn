---
# Download
---

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import markdownit from 'markdown-it'
const md = markdownit()

const releases = ref([])
const loading = ref(true)
const changelogExpand = ref({})
const showCount = ref(10)

fetch('https://api.github.com/repos/AndroidIDE-CN/AIDE-Plus/releases')
  .then(res => res.json())
  .then(data => {
    releases.value = data
    loading.value = false
    data.forEach(r => changelogExpand.value[r.id] = false)
  })

function toggleChangelog(id) {
  changelogExpand.value[id] = !changelogExpand.value[id]
  nextTick(() => {
    if (changelogExpand.value[id]) {
      const el = document.getElementById('changelog-' + id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

function loadMore() {
  showCount.value += 10
}
</script>

<div v-if="loading" class="loading">
  <span class="loader"></span>
  正在获取最新版本...
</div>

<div v-else>
  <div class="latest-release">
    <h2>最新版本：<span class="version">{{ releases[0]?.name || releases[0]?.tag_name }}</span></h2>
    <div
      :id="'changelog-' + releases[0]?.id"
      class="changelog"
      :class="{ collapsed: !changelogExpand[releases[0]?.id] && (releases[0]?.body || '').length > 120 }"
    >
      <template v-if="releases[0]?.body">
        <div v-html="md.render(releases[0]?.body)" />
      </template>
      <template v-else>
        <span class="empty-changelog">什么也没有</span>
      </template>
    </div>
    <div v-if="releases[0]?.body && releases[0]?.body.length > 120" class="changelog-toggle">
      <button @click="toggleChangelog(releases[0]?.id)">
        {{ changelogExpand[releases[0]?.id] ? '收起' : '展开全部' }}
      </button>
    </div>
    <ul class="asset-list">
      <li v-for="asset in releases[0]?.assets" :key="asset.id">
        <a :href="asset.browser_download_url" :download="asset.name" class="download-link">
          {{ asset.name }}
        </a>
        <span v-if="asset.size" class="asset-size">
          ({{ (asset.size / 1024 / 1024).toFixed(2) }} MB)
        </span>
      </li>
    </ul>
  </div>

  <h3 class="history-title">历史版本</h3>
  <div class="timeline">
    <div v-for="(release, idx) in releases.slice(1, showCount + 1)" :key="release.id" class="timeline-row">
      <!-- 上半段线 -->
      <div
        v-if="idx !== 0"
        class="timeline-line timeline-line-top"
      ></div>
      <!-- 圆点 -->
      <span class="timeline-dot"></span>
      <!-- 下半段线 -->
      <div
        v-if="idx !== releases.slice(1, showCount + 1).length - 1"
        class="timeline-line timeline-line-bottom"
      ></div>
      <details class="timeline-item">
        <summary>
          <span class="history-version">{{ release.name || release.tag_name }}</span>
          <span class="timeline-date">{{ new Date(release.published_at).toLocaleDateString() }}</span>
        </summary>
        <div
          :id="'changelog-' + release.id"
          class="changelog"
          :class="{ collapsed: !changelogExpand[release.id] && (release.body || '').length > 120 }"
        >
          <template v-if="release.body">
            <div v-html="md.render(release.body)" />
          </template>
          <template v-else>
            <span class="empty-changelog">什么也没有</span>
          </template>
        </div>
        <div v-if="release.body && release.body.length > 120" class="changelog-toggle">
          <button @click="toggleChangelog(release.id)">
            {{ changelogExpand[release.id] ? '收起' : '展开全部' }}
          </button>
        </div>
        <ul class="asset-list">
          <li v-for="asset in release.assets" :key="asset.id">
            <a :href="asset.browser_download_url" :download="asset.name" class="download-link">
              {{ asset.name }}
            </a>
            <span v-if="asset.size" class="asset-size">
              ({{ (asset.size / 1024 / 1024).toFixed(2) }} MB)
            </span>
          </li>
        </ul>
      </details>
    </div>
    <div v-if="showCount + 1 < releases.length" class="load-more-wrap">
      <button class="load-more-btn" @click="loadMore">加载更多历史版本</button>
    </div>
  </div>
</div>

<style scoped>
.loading {
  display: flex;
  align-items: center;
  font-size: 1.2em;
  color: #888;
  margin: 40px 0;
}
.loader {
  width: 18px;
  height: 18px;
  border: 3px solid #eee;
  border-top: 3px solid #42b983;
  border-radius: 50%;
  margin-right: 10px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.latest-release {
  background: linear-gradient(90deg, #e0f7fa 0%, #f1f8e9 100%);
  border-radius: 10px;
  padding: 0px 24px 18px 24px;
  margin-bottom: 36px;
  box-shadow: 0 4px 16px rgba(66,185,131,0.10);
  border: 1.5px solid #b2dfdb;
}
.latest-release h2 {
  margin-top: 0;
}
.version {
  color: #42b983;
  font-weight: bold;
  font-size: 1.15em;
}
.changelog {
  background: var(--vp-custom-block-info-bg, #f9f9f9);
  padding: 10px 16px;
  border-radius: 6px;
  margin: 12px 0;
  font-size: 0.98em;
  max-height: 120px;
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s;
}
.changelog.collapsed {
  max-height: 120px;
  overflow: hidden;
}
.changelog:not(.collapsed) {
  max-height: 1000px;
  overflow: auto;
}
.changelog-toggle {
  text-align: right;
  margin-bottom: 8px;
}
.changelog-toggle button {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 3px 14px;
  font-size: 0.95em;
  cursor: pointer;
  transition: background 0.2s;
}
.changelog-toggle button:hover {
  background: #1976d2;
}
.empty-changelog {
  color: #bbb;
  font-style: italic;
}
.asset-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.download-link {
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}
.download-link:hover {
  color: #42b983;
  text-decoration: underline;
}
.asset-size {
  color: #888;
  margin-left: 8px;
  font-size: 0.95em;
}
.history-title {
  margin: 32px 0 16px 0;
  font-size: 1.15em;
  color: #333;
  border-left: 4px solid #42b983;
  padding-left: 10px;
}
.timeline {
  position: relative;
  margin-left: 40px;
  padding-left: 0;
}
.timeline-row {
  position: relative;
  min-height: 56px;
  display: flex;
  align-items: flex-start;
}
.timeline-dot {
  position: absolute;
  left: -28px;
  top: 32px;
  width: 16px;
  height: 16px;
  background: #42b983;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px #42b983;
  z-index: 2;
}
.timeline-line {
  position: absolute;
  left: -20px;
  width: 2.5px;
  background: #42b983;
  z-index: 1;
}
.timeline-line-top {
  top: 0;
  height: 32px;
}
.timeline-line-bottom {
  top: 40px;
  height: calc(100% - 40px);
}
.timeline-item {
  position: relative;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(66,185,131,0.06);
  padding: 12px 18px 10px 18px;
  border-left: 4px solid #b2dfdb;
  margin-bottom: 22px;
  width: 100%;
  z-index: 1;
  margin-left: 8px;
}
.history-version {
  color: #1976d2;
  font-weight: 600;
  font-size: 1em;
}
.timeline-date {
  color: #888;
  font-size: 0.97em;
  margin-left: 16px;
}
details[open] > summary {
  font-weight: bold;
  color: #1976d2;
}
summary {
  cursor: pointer;
  outline: none;
  user-select: none;
  padding: 8px 0;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.load-more-wrap {
  text-align: center;
  margin: 24px 0 12px 0;
}
.load-more-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 28px;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(66,185,131,0.08);
  transition: background 0.2s;
}
.load-more-btn:hover {
  background: #42b983;
}
</style>