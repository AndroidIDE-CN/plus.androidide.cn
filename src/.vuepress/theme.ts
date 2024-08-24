import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://plus.androidide.cn/",

  author: {
    name: "ZeroAicy",
    url: "https://github.com/ZeroAicy",
  },

  //fontawesome-with-brands：https://www.w3schools.com/icons/fontawesome_icons_brand.asp

  /* 
  Iconify: https://icon-sets.iconify.design/
  Iconfont: https://www.iconfont.cn/
  Fontawesome: https://fontawesome.com/search?o=r&m=free
 */

  iconAssets: "fontawesome-with-brands", //icon仓库

  logo: "/logo.svg", //logo

  repo: "https://github.com/AndroidIDE-CN/AIDE-Plus", //仓库链接


  docsDir: "src", //源码目录

  fullscreen: true, // 全屏
  lastUpdated: true, // 是否显示页面最后更新时间
  contributors: true, // 是否显示页面贡献者
  editLink: true, // 是否展示编辑此页链接
  print: false, // 禁止打印
  themeColor: true, //主题色选择器
  


  /* 
    // 主题色
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      orange: "#fb9b5f",
    },
   */

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer:
        `Copyright © 2023 <a href="https://github.com/ZeroAicy" target="_blank">墨凡尘轩(ZeroAicy)</a>`,

      copyright: false,

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer:
        `Copyright © 2023 <a href="https://github.com/ZeroAicy" target="_blank">墨凡尘轩(ZeroAicy)</a>`,

      copyright: false,

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },


  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"], //隐藏页
    },
  },

  plugins: {

    copyright: true, // 启用复制添加版权
    prismjs: false, // 禁用主题捆绑代码高亮

    comment: false, // 关闭评论

    backToTop: true, //返回顶部插件配置
    copyCode: true,  //代码复制插件配置

    // docsearch 选项
    docsearch: {
      appId: '<APP_ID>',
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索',
          translations: {
            button: {
              buttonText: '搜索',
            },
          },
        },
      },
    },

    // feed 
    feed: true,

    //重定向
    redirect: {
    
    },

    // https://ecosystem.vuejs.press/zh/plugins/features/notice.html#%E4%BD%BF%E7%94%A8
    notice:{
      config:[
        {
          path: '/zh/',
          title: '快加入QQ群吧',
          content: `点击加入群聊 <a href="https://qm.qq.com/q/TckcjpX5MO" target="_blank">安卓开发交流</a>`,
          actions: [
            {
              text: '加入',
              link: 'https://qm.qq.com/q/TckcjpX5MO',
              type: 'primary',
            },
            { text: '暂时不加入' },
          ],
        },
      ]
    },

    shiki:{
      //theme: "one-dark-pro",
      themes: {light: "github-light-default",dark:"github-dark-default"}
    },

    // 搜索
    //search: true,
  







    // All features are enabled for demo, only preserve features you need here
    // https://plugin-md-enhance.vuejs.press/zh/config.html
    mdEnhance: {
      hint: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      katex: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install katex before enabling it
      // katex: true,

      // Install mathjax-full before enabling it
      // mathjax: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
