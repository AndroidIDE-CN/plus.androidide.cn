import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import htmlMinifier from 'vite-plugin-html-minifier-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('mdui-')
        }
      }
    }),
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
