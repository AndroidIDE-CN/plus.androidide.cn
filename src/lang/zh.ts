import features from './features.zh'

export default {
  menu: {
    home: "首页",
    feature: "功能特性",
    docs: "使用文档",
    download: "下载",
    about: "关于我们",
    color: {
      preset: "预设颜色",
      custom: "自选颜色"
    },
    theme: {
      light: "亮色模式",
      dark: "暗色模式",
      auto: "跟随系统"
    },
    submenu: {
      language: "语言设置",
      theme: "主题设置",
      color: "颜色设置"
    }
  },
  common: {
    loading: "加载中…",
    retry: "重试",
    viewOnGithub: "在 GitHub 查看",
    loadFailed: "加载失败，请检查网络后重试",
    backToTop: "回到顶部"
  },
  footer: {
    copyright: "Copyright © 2024-{year} AndroidIDE-CN · AIDE Plus",
    madeWith: "数据来自 GitHub Releases"
  },
  home: {
    badge: "Android 上的完整开发环境",
    title: "AIDE Plus",
    subtitle: "在手机上编写、构建、调试 Android 应用。重写的构建系统、高版本 Java 与 Kotlin、NDK/CMake、内置终端和 AI 助手，一个 APK 全部带走。",
    download: "立即下载",
    docs: "阅读文档",
    latest: "最新版本 {version}",
    stats: {
      stars: "Star",
      forks: "Fork",
      downloads: "累计下载",
      releases: "发布版本"
    },
    highlightsTitle: "为什么选择 AIDE Plus",
    highlights: {
      build: {title: "重写的构建系统", desc: "aapt2 + D8，参照 AGP 重写 R 类与 DEX 合并，大项目不再内存不足。"},
      java: {title: "高版本 Java", desc: "默认支持 Java 8/9/11 语法分析，开启 ECJ 后可编译 Java 23。"},
      kotlin: {title: "Kotlin 自有引擎", desc: "基于 Kotlin 2.4.20 官方解析器的补全、实时错误和跳转。"},
      native: {title: "NDK 与 CMake", desc: "内置工具链管理器，NDK r17c 到 r29、CMake 3.10.2 到 3.31.4 一键安装。"},
      terminal: {title: "内置终端", desc: "Termux 终端与 Linux 发行版环境，可在容器中直接跑 Gradle。"},
      ai: {title: "AI 助手", desc: "与模型讨论当前项目，读取、搜索、修改文件，修改前可看差异。"}
    },
    stepsTitle: "三步开始",
    steps: {
      download: {title: "下载安装", desc: "从下载页获取最新 APK，数据直接来自 GitHub。"},
      setup: {title: "完成初始设置", desc: "首次启动按向导授予权限、安装构建工具。"},
      build: {title: "新建或导入项目", desc: "新建项目、打开本地项目或从 Git 克隆，点运行即可构建。"}
    },
    communityTitle: "加入社区",
    communityDesc: "使用问题、功能建议和 Bug 反馈，欢迎来 QQ 群、频道或 GitHub Issues。"
  },
  features: {
    title: "功能特性",
    intro: "AIDE Plus 在 AIDE 的基础上重写了构建、语言支持和工具链。下面按模块列出已经实现的功能，并注明每项功能的打开位置和使用方式（按 2.3.5.0 版本界面整理）。",
    plannedTitle: "计划实现",
    planned: [
      "更多补全（LSP）",
      "Apks / AAB 的生成"
    ],
    filterAll: "全部",
    search: "搜索功能",
    noMatch: "没有匹配的功能",
    where: "打开位置",
    how: "使用方式",
    entryOnly: "只看有入口说明的功能",
    cat: features
  },
  docs: {
    title: "使用文档",
    toc: "目录",
    prev: "上一篇",
    next: "下一篇",
    edit: "发现错误？到 GitHub 反馈",
    notFound: "没有找到这篇文档",
    items: {
      "getting-started": "快速开始",
      "home-plugins": "首页、插件与共享",
      "project-build": "项目与构建",
      "java-compiler": "Java 与 Kotlin",
      "ndk-cmake": "NDK 与 CMake",
      "editor-preview": "编辑器与预览",
      "debug-logcat": "调试与 Logcat",
      "signing-protection": "签名与加固",
      "terminal": "终端与 AI 助手",
      "faq": "常见问题"
    }
  },
  download: {
    title: "下载 AIDE Plus",
    subtitle: "所有安装包都来自 GitHub Releases，和仓库保持同步。",
    latest: "最新版本",
    prerelease: "预发布",
    publishedAt: "发布于 {date}",
    downloads: "{count} 次下载",
    recommended: "推荐",
    packageName: "包名 {name}",
    sha256: "SHA-256",
    copy: "复制",
    copied: "已复制",
    mirror: "下载线路",
    mirrors: {
      github: "GitHub 直连"
    },
    changelog: "更新内容",
    history: "历史版本",
    showMore: "展开更新说明",
    showLess: "收起",
    refresh: "刷新",
    noAssets: "这个版本没有可下载的安装包",
    empty: "暂时没有获取到发布信息",
    allReleases: "查看全部发布",
    source: {
      api: "实时数据 · GitHub API",
      cache: "缓存数据 · {time}",
      snapshot: "离线快照 · {time}（GitHub API 暂不可用）"
    },
    packagesTitle: "该下载哪个安装包？",
    packagesDesc: "新版本同时提供几个包名不同的 APK，它们可以同时安装、互不覆盖。一般用户下载标记为“推荐”的 io.github.zeroaicy.aide 即可；想同时保留一份旧版本或测试新功能时，再选择其它包名。",
    tipsTitle: "安装提示",
    tips: [
      "安装前请在系统设置中允许“安装未知应用”。",
      "下载完成后可以核对 SHA-256，确认文件完整。",
      "同一包名的新版本会覆盖安装旧版本，项目数据会保留。",
      "下载缓慢时可以切换下载线路，或到 QQ 群获取安装包。"
    ]
  },
  about: {
    title: "关于 AIDE Plus",
    intro: "AIDE Plus 是由 AndroidIDE-CN 社区维护的 AIDE 增强版本，目标是让 Android 开发者在手机上也能使用现代的工具链。",
    noticeTitle: "开源说明",
    notice: "由于有人在违反 AGPLv3 协议的情况下使用本项目代码，并用 VMP 等手段加固 DEX 规避开源义务，项目已停止公开源代码，GitHub 仓库仅用于发布 APK。任何基于历史 AGPL 版本的衍生作品，都必须公开修改后的源代码、注明来源并保持 AGPLv3 协议。",
    membersTitle: "项目成员",
    roles: {
      founder: "项目创始人",
      collaborator: "项目合作者",
      helper: "提供了帮助"
    },
    communityTitle: "社区与反馈",
    community: {
      qqGroup: "QQ 群",
      qqChannel: "QQ 频道",
      github: "GitHub 仓库",
      issues: "问题反馈"
    },
    thanksTitle: "特别感谢",
    thanksDesc: "AIDE Plus 借鉴或集成了以下开源项目：",
    thanks: {
      gradle: "Gradle 版本（Android Studio 构建）",
      androidide: "借鉴了部分代码",
      codeassist: "借鉴了部分代码",
      termux: "集成到软件内部",
      aidepro: "借鉴 UI",
      ndk: "NDK 安装器",
      repair: "反混淆"
    }
  }
}
