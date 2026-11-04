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
    intro: "AIDE Plus 在 AIDE 的基础上重写了构建、语言支持和工具链。下面按模块列出已经实现的功能。",
    plannedTitle: "计划实现",
    planned: [
      "更多补全（LSP）",
      "Apks / AAB 的生成",
      "清单文件可视化编辑",
      "矢量图获取",
      "重写布局可视化"
    ],
    filterAll: "全部",
    search: "搜索功能",
    noMatch: "没有匹配的功能",
    cat: {
      build: {
        title: "构建系统",
        items: [
          "构建服务优化和重写",
          "aapt 更替为 aapt2，dx 更替为 D8，并使用 D8 进行混淆",
          "参照 AGP 重写 R 类生成与 DEX 分组合并，大项目不再内存不足",
          "支持 ViewBinding、DataBinding、注解处理器、核心库脱糖与完整的 BuildConfig",
          "清单合并工具更新，APK 资源对齐",
          "ApkSign 支持 v1 到 v3 签名",
          "修复静默安装，支持 Shizuku 等更多安装器",
          "Gradle 命令构建：在 Termux、Linux 或系统 Shell 中执行 Gradle 任务或自定义命令"
        ]
      },
      java: {
        title: "Java 语言",
        items: [
          "默认语法分析支持部分 Java 8、9、11 语法",
          "通过 ECJ 编译 Java 23（需在设置中开启）",
          "通过 ECJ 格式化高版本 Java 代码",
          "Lambda 编译（ECJ）",
          "自定义 class 解析器，支持高版本 class 特性",
          "Java 项目可以使用 Android API",
          "Java 语义高亮"
        ]
      },
      kotlin: {
        title: "Kotlin",
        items: [
          "补全、实时错误、导入修复与跳转使用 AIDE Plus 自有引擎（Kotlin 2.4.20 官方解析器）",
          "kotlinc 与 KSP 共用一份编译器，工具链更小",
          "Kotlin 代码风格设置"
        ]
      },
      deps: {
        title: "Gradle 与依赖",
        items: [
          "重写 Gradle 解析器",
          "新的 Maven 下载器，支持 BOM",
          "支持 runtimeOnly、compileOnly、libgdxNatives 与 exclude",
          "版本目录 libs.versions.toml 可视化编辑与更新检查",
          "多平台库自动选择 Android 变体",
          "按 Maven 规则继承父 POM 版本，支持带时间戳的 SNAPSHOT，下载后校验 sha1",
          "AIDE 默认框架替换为 AndroidX"
        ]
      },
      native: {
        title: "NDK 与 CMake",
        items: [
          "支持 CMake 构建",
          "内置 NDK / CMake 工具链管理器：NDK r17c 到 r29，CMake 3.10.2 到 3.31.4",
          "下载支持 SHA-256 校验与断点续传，各版本独立目录",
          "自动修复 CMake 执行权限，私有目录 no-exec 时回退到 Android linker",
          "模块属性页可设置 ndkVersion、buildToolsVersion、测试运行器与 multidex"
        ]
      },
      editor: {
        title: "编辑器",
        items: [
          "更多语法高亮，代码颜色可自定义",
          "修复补全和高亮丢失问题，新增基础语法补全",
          "XML 补全跟随项目 compileSdk",
          "AIDL、CMake、TOML 的补全、错误与跳转",
          "跳转到依赖库与 android.jar 的源代码",
          "符号栏默认三行，带撤销、重做和保存",
          "TextMate 语法管理与注释预览"
        ]
      },
      debug: {
        title: "调试与日志",
        items: [
          "独立的构建流程页，显示构建阶段、进度、输出和失败历史",
          "BrowserPager Logcat 与悬浮 Logcat 共享来源、暂停、过滤条件和历史",
          "Logcat 来源支持 su、Shizuku 与 ADRT",
          "进程 / 标签过滤编辑框与可搜索候选列表，兼容 Android 12 及以上",
          "debug 与 debug-aide 变体的 ADRT 注入和运行时加载"
        ]
      },
      protect: {
        title: "签名与加固",
        items: [
          "修复创建签名的问题",
          "构建类型可直接选择已有的 signingConfigs",
          "集成 StringFog、BlackObfuscator、DexVMP 与 DPT Shell",
          "DexVMP 支持自定义 VM 库名、桥接库名和 loader 类",
          "构建结束自动清理工作目录，限制超大输入避免内存不足"
        ]
      },
      terminal: {
        title: "终端与运行环境",
        items: [
          "内置 Termux 终端：全宽标签栏、8 套配色、额外按键与查找",
          "可下载 Termux bootstrap 或 Linux 发行版作为运行环境，后台下载并断点续传",
          "一键配置 Gradle 构建环境（JDK 17、Android SDK 与 aapt2）",
          "环境实例可重命名、备份与恢复"
        ]
      },
      ai: {
        title: "AI 助手",
        items: [
          "在右侧抽屉中与模型讨论当前项目",
          "读取、搜索、修改项目文件，修改前显示差异，可撤销上一轮",
          "支持 OpenAI 兼容、Anthropic 与 OpenAI Responses 接口",
          "支持技能、远程 MCP、子代理、长期记忆与联网搜索",
          "调用翻译补齐字符串资源"
        ]
      },
      ui: {
        title: "界面与工具",
        items: [
          "全新 UI，应用冷启动优化",
          "项目属性全屏页面，SDK、Java、签名等改用可搜索列表",
          "SDK 管理器与统一的工具链管理页",
          "资源管理器、翻译编辑器与 XML 图形资源预览",
          "图片、压缩包、音视频、PDF、SQLite、证书、字体等文件预览",
          "修复软件内的 Git 问题"
        ]
      }
    }
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
      "project-build": "项目与构建",
      "java-compiler": "Java 与 Kotlin",
      "ndk-cmake": "NDK 与 CMake",
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
