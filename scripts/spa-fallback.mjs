// 构建后为每个前端路由复制一份 index.html（如 dist/download/index.html），
// 并生成 404.html。这样在 FTP / GitHub Pages 等不支持重写规则的静态主机上
// 直接打开或刷新子页面也不会 404。路由列表与 src/router/index.ts 保持一致。
import {copyFileSync, existsSync, mkdirSync, readdirSync} from 'node:fs'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const ROUTES = ['feature', 'docs', 'download', 'about']
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// 文档页 id 即 src/docs/zh 下的文件名
const DOC_IDS = readdirSync(resolve(root, 'src/docs/zh'))
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))

const dist = resolve(root, 'dist')
const index = resolve(dist, 'index.html')

if (!existsSync(index)) {
    console.warn('[spa-fallback] dist/index.html not found, skipped')
    process.exit(0)
}

const targets = [...ROUTES, ...DOC_IDS.map(id => `docs/${id}`)]
for (const route of targets) {
    const file = resolve(dist, route, 'index.html')
    mkdirSync(dirname(file), {recursive: true})
    copyFileSync(index, file)
}
copyFileSync(index, resolve(dist, '404.html'))
console.log(`[spa-fallback] ${targets.length} route pages + 404.html`)
