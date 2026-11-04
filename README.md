# plus.androidide.cn

AIDE Plus 官网源码：功能介绍、使用文档和下载页，支持手机与电脑。

技术栈：Node.js 20+、Vue 3、Vite、Vuetify 4（Material Design 2 蓝图）、vue-i18n（中文 / English）。

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 首页：简介、亮点、仓库统计 |
| `/feature` | 功能特性，每项标注打开位置与使用方式，可按分类筛选和搜索 |
| `/docs/:id` | 使用文档，Markdown 位于 `src/docs/<语言>/` |
| `/download` | 下载页，数据来自 GitHub Releases |
| `/about` | 项目成员、社区入口与开源说明 |

## 下载数据

- 浏览器端实时请求 `api.github.com` 的 `AndroidIDE-CN/AIDE-Plus` 发布列表，并在会话内缓存 10 分钟。
- 构建前 `scripts/fetch-releases.mjs` 会生成 `public/releases.json` 快照；GitHub API 被限流或不可访问时，页面自动改用快照。
- 需要国内加速线路时，在 `src/config.ts` 的 `DOWNLOAD_MIRRORS` 中追加镜像前缀。

## 开发

```sh
npm install
npm run dev        # 本地开发
npm run build      # 拉取发布快照 + 类型检查 + 构建 + 生成子页面入口
npm run preview    # 预览构建结果
```

构建后 `scripts/spa-fallback.mjs` 会为每个路由复制一份 `index.html` 并生成 `404.html`，GitHub Pages 这类纯静态主机也能直接打开子页面。

## 修改内容

- 文案：`src/lang/zh.ts`、`src/lang/en.ts`；功能列表（含打开位置、使用方式）在 `src/lang/features.zh.ts`、`src/lang/features.en.ts`
- 功能分类与首页亮点：`src/data/features.ts`
- 文档：在 `src/docs/zh/` 与 `src/docs/en/` 新建同名 `.md`，再在 `src/docs/index.ts` 中登记顺序和图标，并在 i18n 的 `docs.items` 中加标题
- 社区链接、成员、下载线路：`src/config.ts`

## 自动部署

`.github/workflows/deploy-docs.yml`：

- 推送到 `main`、每 6 小时定时、手动运行或收到 `repository_dispatch`（type `release`）时构建，并部署到 GitHub Pages。需要在仓库 Settings → Pages 把 Source 设为 “GitHub Actions”。子路径由 `actions/configure-pages` 自动给出：项目页是 `/plus.androidide.cn/`，绑定自定义域名后是 `/`。
- Pull Request 只做构建检查并上传 `dist` 产物，不部署。

想在 AIDE-Plus 发版后立即刷新下载页，可在发版流程中调用：

```sh
curl -X POST -H "Authorization: Bearer <有本仓库权限的 token>" \
  https://api.github.com/repos/AndroidIDE-CN/plus.androidide.cn/dispatches \
  -d '{"event_type":"release"}'
```
