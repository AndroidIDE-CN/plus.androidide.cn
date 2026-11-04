import {fileURLToPath, URL} from 'node:url'
import {defineConfig, IndexHtmlTransformResult, PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'
import htmlMinifier from 'vite-plugin-html-minifier-terser'

const removeScriptPlugin: PluginOption = {
  name: 'removeScriptPlugin',
  transformIndexHtml(html: string): IndexHtmlTransformResult {
    return html.replace(
        /<script defer src="https:\/\/static.cloudflareinsights.com\/beacon.min.js\/vcd15cbe7772f49c399c6a5babf22c1241717689176015"[^>]*><\/script>/g,
        ''
    );
  }
}

/**
 * 部署子路径。GitHub Pages 项目页为 /<仓库名>/，绑定自定义域名时为 /。
 * 由 Actions 通过 BASE_PATH 传入（actions/configure-pages 的 base_path）。
 */
const base = `${(process.env.BASE_PATH || '').replace(/\/+$/, '')}/`

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    // 按需引入 Vuetify 组件与样式
    vuetify({autoImport: true}),
    vueJsx(),
    htmlMinifier({
      // HTML 压缩选项
      minify: {
        collapseWhitespace: true,          // 折叠空白字符
        removeComments: true,              // 移除注释
        removeRedundantAttributes: true,   // 移除多余的属性，如 <input type="text"> 中的 type="text"
        useShortDoctype: true,             // 使用简短的 DOCTYPE
        removeEmptyAttributes: true,       // 移除空的属性
        minifyCSS: true,                   // 压缩内联 CSS
        minifyJS: true,                    // 压缩内联 JS
      },
    }),
    removeScriptPlugin
  ],
  build: {
    minify: 'terser', // 使用 terser 进行压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console 语句
        drop_debugger: true, // 移除 debugger 语句
        passes: 3, // 进行多轮优化压缩
        toplevel: true, // 压缩顶层作用域
        dead_code: true, // 移除未使用的代码
        reduce_vars: true, // 压缩和折叠变量
        conditionals: true, // 压缩条件语句
        loops: true, // 压缩循环
        sequences: true, // 合并连续语句
        pure_funcs: ['console.log'], // 移除特定的纯函数调用
      },
      format: {
        comments: false, // 移除所有注释
      },
      mangle: {
        toplevel: true, // 混淆顶层作用域中的变量名
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
