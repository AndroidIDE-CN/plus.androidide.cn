import { defineConfig } from 'vitepress'

import { search } from './search'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getMdFiles(dir: string): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  list.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getMdFiles(filePath))
    } else if (file.endsWith('.md')) {
      results.push(filePath)
    }
  })
  return results
}



function generateSidebar(dir: string, base = '/docs/help/') {
  const files = getMdFiles(dir)
  return files.map(file => {
    const content = fs.readFileSync(file, 'utf-8')
    const { data } = matter(content)
    return {
      text: data.title || path.basename(file, '.md'),
      link: base + path.relative(dir, file).replace(/\\/g, '/')
    }
  })
}





export default defineConfig({

  title: "AIDE-Plus",
  description: "一个辅助代码编写的程序",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/docs/help/get-started", activeMatch: "/docs/" },
      { text: "关于", link: "/about" },
      { text: "下载", link: "/download" },
    ],

    sidebar: {
      "/docs/help/": [{
        text: '帮助',
        collapsed: false,
        items: generateSidebar(path.resolve(__dirname, '../docs/help'))
      }
      ]
    },


    socialLinks: [
      { icon: "github", link: "https://github.com/AndroidIDE-CN/AIDE-Plus" },
      { icon: "qq", link: "https://qm.qq.com/q/fEAc6OkUM0" },
    ],

    footer: {
      copyright: 'AGPL-3.0 license @AIDE-Plus',
      message: '来自 @AndroidIDE-CN 的开源项目',
    },

    siteTitle: `AIDE-Plus <code class="VPBadge tip"></code>`,
    editLink: {
      pattern: 'https://github.com/AndroidIDE-CN/plus.androidide.cn/tree/main2/docs/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'full', timeStyle: 'full', hourCycle: 'h24' }
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',
    search: { provider: 'local', options: search },
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }



  },


})
