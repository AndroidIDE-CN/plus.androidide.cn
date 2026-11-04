// 功能页文案：每个分类的 items 为功能列表，t 为功能，where 为打开位置，how 为使用方式（后两项可省略）
// 打开位置按 2.3.5.0 版本的界面整理，“菜单”指编辑器右上角的主菜单
export default {
  home: {
    title: "首页、插件与共享",
    items: [
      {
        t: "Material 风格首页，底部导航切换“项目 / 插件 / 共享”",
        where: "从桌面启动 AIDE Plus；编辑器中：菜单 → 首页",
        how: "想跳过首页直接进编辑器：设置 → 通用 → 窗口 → 启动时直接进入编辑器"
      },
      {
        t: "项目列表合并打开历史与 AppProjects，按目录分组，可置顶、排序、搜索，显示图标、模块数、Git 分支和包名",
        where: "首页 → 项目",
        how: "长按项目或点更多按钮进入项目管理：详情、分享为 zip（不含构建产物）、重命名、删除"
      },
      {
        t: "新建项目、打开项目、克隆 Git 仓库",
        where: "首页 → 项目 → 右下角圆形按钮",
        how: "用系统文件选择器打开的项目会先确认导入为本地工作副本，修改不会自动同步回来源"
      },
      {
        t: "首次启动初始设置向导：条款、权限、构建工具、基础设置",
        where: "首次启动自动打开；以后可在首页菜单 → 初始设置向导 重新进入"
      },
      {
        t: "插件页：内置功能分组开关、详情页逐项开关组件",
        where: "首页 → 插件",
        how: "点按某个插件进入详情，可单独关闭 Markdown 扩展、文件预览、反编译等组件"
      },
      {
        t: "导入第三方插件（.aplug，支持 Java 与 Lua 插件），说明可一键翻译",
        where: "首页 → 插件 → 导入插件",
        how: "插件以 AIDE Plus 的全部权限运行，只安装可信来源；详情页右上角可卸载"
      },
      {
        t: "共享页：浏览精选与 GitHub 发现的项目，一键导入",
        where: "首页 → 共享",
        how: "给自己的 GitHub 仓库加上 topic aide-plus-project 即可出现在“发现”中；点“导入”会用克隆对话框预填地址"
      },
      {
        t: "新建项目模板改用 AGP 8.13 写法（plugins 块、namespace、compileSdk 36），带中文注释",
        where: "首页 → 项目 → 右下角按钮 → 新建项目",
        how: "下载过旧版“更多”模板的用户，可在新建对话框的“更多”中重新安装内置模板"
      }
    ]
  },
  build: {
    title: "构建系统",
    items: [
      {t: "构建服务优化和重写，aapt 更替为 aapt2，dx 更替为 D8 并可用于混淆"},
      {t: "参照 AGP 重写 R 类生成与 DEX 分组合并，大项目不再内存不足"},
      {t: "支持 ViewBinding、DataBinding、注解处理器、核心库脱糖、androidResources 与完整 BuildConfig"},
      {t: "清单合并工具更新，APK 资源对齐，ApkSign 支持 v1 到 v3 签名"},
      {
        t: "独立的“构建”页，显示各模块步骤、进度、输出与失败历史，可停止、可复制",
        where: "运行后自动显示；也可从错误列表打开"
      },
      {
        t: "Gradle 命令构建：运行按钮可选默认构建、Gradle 任务或自定义 sh 命令",
        where: "设置 → 构建与运行 → Gradle 命令构建",
        how: "开启后在同一分组设置“构建容器”“环境变量”（如 JAVA_HOME）和“自定义构建命令”；之后点运行会弹出构建方式菜单"
      },
      {
        t: "在终端里构建成功后弹出本次生成的 APK，可直接安装或重新签名后安装",
        where: "在内置终端中执行 ./gradlew assembleDebug 等命令后自动弹出",
        how: "“重新签名…”使用项目属性中已保存的签名配置"
      },
      {
        t: "修复静默安装，支持 Shizuku 与自定义安装器；Root 安装改为流式传入 APK",
        where: "设置 → 构建与运行 → 运行",
        how: "按需勾选“静默安装”“使用Shizuku安装”或“自定义安装器”"
      },
      {
        t: "解除 Java 项目 API 限制、重定义 APK 输出到 工程/build/bin/",
        where: "设置 → 构建与运行 → 构建"
      }
    ]
  },
  java: {
    title: "Java 语言",
    items: [
      {t: "默认语法分析支持部分 Java 8、9、11 语法，Java 项目可以使用 Android API"},
      {
        t: "通过 ECJ 编译 Java 23（含 Lambda）",
        where: "设置 → 代码与编译 → 编译器实现 → 启用Eclipse Compiler For Java[ecj]",
        how: "重启后生效；只影响代码分析与编译"
      },
      {
        t: "Eclipse Java 格式化：缩进、行宽、大括号位置、保留空行、注释与注解换行",
        where: "设置 → 代码与编译 → Eclipse Java 格式",
        how: "开启“启用EclipseJavaFormat”后，用 菜单 → 对齐代码 格式化"
      },
      {
        t: "JDT 成员补全、JDT 完整补全、JDT 跳转与参数提示（实验）",
        where: "设置 → 代码与编译 → 代码补全 / 跳转与源码",
        how: "实验功能，重启生效；遇到问题可随时关闭"
      },
      {
        t: "已打开 Java 文件的错误与语义高亮在后台线程分析，错误附简洁摘要和处理建议",
        where: "设置 → 代码与编译 → 错误检查 → 后台代码分析"
      },
      {
        t: "新的 Class 解析库，支持高版本 class 特性与 Java 8 API",
        where: "设置 → 代码与编译 → 新的Class解析库",
        how: "开启后重启并在 菜单 → 更多 → 项目 → 构建刷新 生效"
      }
    ]
  },
  kotlin: {
    title: "Kotlin",
    items: [
      {
        t: "补全、实时错误、导入修复与跳转使用自有引擎（Kotlin 2.4.20 官方解析器），改善 Compose 补全与大项目速度",
        where: "设置 → 代码与编译 → 代码补全 → 启用 Kotlin 语义补全；错误检查 → Kotlin 实时错误检查"
      },
      {
        t: "Kotlin 编译（kotlinc 与 KSP 共用编译器），可自动打包 Kotlin 标准库",
        where: "设置 → 代码与编译 → 编译器实现 → 启用 Kotlin 编译",
        how: "先在 工具链管理 中安装 Kotlin 编译器，开启后重启生效"
      },
      {
        t: "停顿约 1 秒后用编译器前端完整检查当前模块",
        where: "设置 → 代码与编译 → 错误检查 → 用 Kotlin 编译器完整检查"
      },
      {
        t: "30 余种快速修复：导入、拼写、初始化、类型、open/override、Composable、OptIn 等",
        where: "在报错代码上长按 → 修复 (Kotlin)",
        how: "错误列表中点右侧信息按钮可查看处理建议和完整诊断"
      },
      {
        t: "错误列表与编辑器的 Kotlin 警告可以分别开关",
        where: "设置 → 代码与编译 → 错误检查"
      },
      {
        t: "Kotlin 代码风格设置",
        where: "菜单 → 更多 → 格式 → 配置代码风格"
      }
    ]
  },
  deps: {
    title: "Gradle 与依赖",
    items: [
      {t: "重写 Gradle 解析器，支持 runtimeOnly、compileOnly、libgdxNatives 与 exclude"},
      {t: "新的 Maven 下载器：支持 BOM，继承父 POM 版本，不拉取 optional / provided 依赖，带时间戳 SNAPSHOT，下载后校验 sha1"},
      {t: "打开项目先下载缺失依赖再分析，共享依赖只解析一次，连不上的仓库自动跳过"},
      {t: "多平台库自动选择 Android 变体，AIDE 默认框架替换为 AndroidX"},
      {
        t: "版本目录 libs.versions.toml 可视化编辑与更新检查",
        where: "项目属性 → 依赖；更新检查开关在 设置 → 代码与编译 → SDK 与平台数据"
      },
      {
        t: "刷新 Maven 仓库、修改 Maven 仓库目录",
        where: "设置 → 构建与运行 → SDK 与依赖"
      }
    ]
  },
  native: {
    title: "NDK 与 CMake",
    items: [
      {
        t: "工具链管理：Android SDK 平台、NDK r17c 到 r29、CMake 3.10.2 到 3.31.4、Kotlin 编译器集中管理",
        where: "设置 → 构建与运行 → Native代码支持 → 工具链管理",
        how: "选择版本后点“下载并安装”，支持 SHA-256 校验与断点续传；传统 ndk-build 项目再点“设为 ndk-build 使用版本”"
      },
      {
        t: "Beta 版与共存版可与主包共用一份 NDK / CMake",
        where: "工具链管理 → 使用主包的 NDK / CMake",
        how: "需要与主包相同签名；主包不可用时自动使用自己的安装"
      },
      {t: "支持 CMake 构建，自动修复执行权限，Android 10 及以上多种执行方式自动切换"},
      {
        t: "Android SDK 平台下载，无需打开项目",
        where: "设置 → 代码与编译 → SDK 与平台数据 → Android SDK 平台"
      },
      {
        t: "并行编译 Native 代码",
        where: "设置 → 构建与运行 → Native代码支持 → 并行编译"
      }
    ]
  },
  editor: {
    title: "编辑器",
    items: [
      {
        t: "缩进引导线、括号与标签配对引导线、智能括号配对、行内错误提示",
        where: "设置 → 编辑器",
        how: "四个功能各有独立开关；行内错误提示可点按查看建议与完整错误"
      },
      {
        t: "文件结构：列出 .java、.kt、.class 中的类、方法与字段，Java 方法可查看流程图",
        where: "菜单 → 文件结构",
        how: "可搜索、按类型/方法/字段筛选，点按跳转；流程图可复制 Mermaid 源码"
      },
      {
        t: "跨语言跳转与查找用法：Java native / Kotlin external 与 JNI 函数互相跳转，AIDL 接口跳到 .aidl 声明",
        where: "菜单 → 查找… → 查找用法；或长按代码 → 跳转"
      },
      {
        t: "跳转到依赖库与 android.jar 的源代码，或显示反编译源码（内置 CFR）",
        where: "设置 → 代码与编译 → 跳转与源码",
        how: "Android 平台源码需先在 SDK 管理器下载；可在同一页更换反编译引擎"
      },
      {
        t: "注释预览、翻译选中代码、询问 AI 助手",
        where: "在编辑器中长按代码弹出的菜单"
      },
      {
        t: "TextMate 语法管理：分组列表、搜索、语法开关与文件映射",
        where: "设置 → 编辑器 → 代码高亮 → TextMate 语法管理"
      },
      {
        t: "符号栏 1 到 4 行，带撤销、重做与保存；可自定义各语言符号和快捷代码",
        where: "设置 → 快捷输入与快捷键 → 底部快捷栏 / 快捷符号 / 快捷代码"
      },
      {
        t: "按项目恢复上次打开的文件、标签与光标位置，大文件异步加载",
        where: "自动生效；异步加载开关在 设置 → 编辑器 → 编辑器启用异步读取"
      },
      {
        t: "可视化布局设计器与清单编辑",
        where: "打开布局 XML 后：菜单 → 设计器；清单：菜单 → 清单编辑"
      }
    ]
  },
  preview: {
    title: "预览",
    items: [
      {
        t: "Compose 预览：打开含 Preview 注解的 Kotlin 文件即可在源码与预览间切换",
        where: "编辑区右上角的预览按钮",
        how: "打开预览时增量编译当前模块（含未保存修改）；自动刷新开关在 设置 → 代码与编译 → 编译器实现 → Compose 预览自动刷新"
      },
      {
        t: "Markdown 预览：Mermaid 图表、KaTeX 公式、代码高亮、脚注、[TOC] 目录、GitHub 提示块，全部离线渲染",
        where: "打开 .md 文件后点编辑区右上角的预览按钮"
      },
      {
        t: "文件预览：图片、压缩包（jar/aar/zip/apk）、音视频、PDF、SQLite、证书、字体、.so/.dex、十六进制",
        where: "在文件浏览器中点按对应文件",
        how: "可在 首页 → 插件 中关闭不需要的预览"
      },
      {
        t: "可编辑预览：CSV/TSV 表格与 JSON/YAML/TOML/properties 结构树，保留原格式，可撤销",
        where: "在文件浏览器中打开对应文件"
      },
      {
        t: "SVG、plist、.proto 大纲；密钥库（输入密码查看证书）；DEX 类列表可反编译单个类；resources.arsc 与二进制清单",
        where: "在文件浏览器中打开对应文件"
      }
    ]
  },
  debug: {
    title: "调试与日志",
    items: [
      {
        t: "LogCat 重写：su / Shizuku / ADRT 自动切换采集，级别与规则过滤、搜索",
        where: "菜单 → 更多 → 查看 → 日志",
        how: "规则每行一条，例如 tag:MyApp level:W,E，以 - 开头表示排除"
      },
      {
        t: "悬浮 Logcat：可拖动、改变大小、收起为气泡",
        where: "菜单 → 更多 → 查看 → 悬浮 Logcat",
        how: "需要授予“显示在其他应用上层”权限；气泡点按展开、长按关闭"
      },
      {
        t: "ADRT 日志注入只控制普通 debug 构建，断点调试（debug-aide）不受影响",
        where: "设置 → 构建与运行 → 构建 → 启用adrt日志注入",
        how: "默认关闭，需要在 LogCat 里看应用日志时再打开"
      },
      {
        t: "断点调试：运行、逐过程、步进、跳出、停止",
        where: "长按代码 → 断点；调试命令在主菜单中"
      },
      {
        t: "管理缓存日志：查看、分享或删除，也可打包分享全部日志",
        where: "菜单 → 工具 → 管理缓存日志；或 设置 → 关于 → 管理缓存日志"
      }
    ]
  },
  protect: {
    title: "签名与加固",
    items: [
      {
        t: "创建签名密钥库，自定义签名证书签名调试 APK",
        where: "设置 → 构建与运行 → APK签名 → 新建签名证书"
      },
      {
        t: "构建类型直接选择已有 signingConfigs",
        where: "项目属性 → 模块 → 签名配置 / 构建类型",
        how: "先在签名配置中添加密钥库，再在构建类型中选择"
      },
      {
        t: "StringFog、BlackObfuscator、DexVMP、DPT Shell 保护插件",
        where: "项目属性 → 模块 → 保护插件",
        how: "DexVMP 可自定义 VM 库名、桥接库名和 loader 类；library 模块与 AAB 输出不支持"
      },
      {t: "打包结束自动清理插件工作目录，超大方法或 DEX 跳过或分批处理，避免内存不足"}
    ]
  },
  terminal: {
    title: "终端与运行环境",
    items: [
      {
        t: "内置 Termux 终端：全宽标签、选择手柄、8 套配色、额外按键、查找与 ~/.termux 配置",
        where: "菜单 → 工具 → 显示终端；或文件浏览器长按目录 → 在终端中打开",
        how: "“更多”菜单可中断任务、导出文本、查看会话诊断和链接列表"
      },
      {
        t: "运行环境：Termux 软件包、Linux 发行版（Ubuntu、Debian、Arch）与系统 Shell",
        where: "设置 → 构建与运行 → 运行 → 终端环境",
        how: "后台下载，可暂停、断点续传、离线安装和安全重置"
      },
      {
        t: "同一发行版安装多个实例，环境可改名、备份为 .aide-env.tar.gz 并恢复，编辑 APT / pacman 软件源",
        where: "终端环境页 → 某个环境右侧的“更多”",
        how: "备份未加密，可能含私钥与令牌，请只保存到可信位置"
      },
      {
        t: "一键配置 Gradle 构建环境（JDK 17、Android SDK 与兼容新版 AGP 的 aapt2）",
        where: "终端环境页"
      },
      {
        t: "Cortex 试验后端与需要 su 授权的 Root chroot 试验后端，默认仍用 PRoot",
        where: "终端环境页 → 使用 Cortex 运行 Linux（试验）",
        how: "只影响新启动的 Linux，遇到问题关闭即可"
      }
    ]
  },
  ai: {
    title: "AI 助手与 MCP",
    items: [
      {
        t: "AI 助手：与模型讨论当前项目，读取、搜索、修改文件，修改前显示差异，可撤销上一轮",
        where: "菜单 → 工具 → AI 助手；或点编辑区右边缘的“AI”手柄",
        how: "首次使用点“配置模型”，选择接口类型并填写 API Key 和模型名称"
      },
      {
        t: "支持 OpenAI 兼容、Anthropic 与 OpenAI Responses 接口，技能、远程 MCP、子代理、长期记忆与联网搜索",
        where: "AI 助手页面右上角菜单"
      },
      {
        t: "选中代码后直接提问",
        where: "选中代码 → 询问 AI 助手"
      },
      {
        t: "本机 MCP 服务：供 Termux 中的 Claude Code、Codex 等客户端读取当前项目与错误",
        where: "设置 → AI 与翻译 → 本机 MCP 服务",
        how: "默认只读；需要客户端改文件时再开启“允许修改文件”；连接信息在同一页查看"
      },
      {
        t: "代码翻译与文本翻译，可选翻译引擎，资源字符串可一键补齐翻译",
        where: "设置 → AI 与翻译 → 代码翻译 / 文本翻译"
      },
      {
        t: "AI 手柄显示与位置",
        where: "设置 → AI 与翻译 → 显示 AI 手柄",
        how: "手柄可上下拖动调整位置"
      }
    ]
  },
  ui: {
    title: "设置、工具与界面",
    items: [
      {
        t: "设置改用 AndroidX Preference，按功能分组，首页搜索框可直接查找设置项",
        where: "菜单 → 更多 → 设置",
        how: "在设置首页搜索框输入关键字，点按结果直接定位"
      },
      {
        t: "项目属性改为全屏页面，工程与各模块分开显示，SDK、Java、NDK/CMake、签名用可搜索列表",
        where: "文件浏览器中打开项目属性对话框 → 可视化编辑",
        how: "保存时保留 Gradle 脚本中未修改的原文"
      },
      {
        t: "图标库：18 个预设图标集与阿里 Iconfont 导入，导出 SVG / PNG / Vector 并附许可",
        where: "菜单 → 工具 → 图标库；或 首页 → 插件 顶部工具",
        how: "图标库菜单 → 更多图标库；预览中点“添加到项目”选择模块与格式"
      },
      {
        t: "项目备份、开源协议生成",
        where: "菜单 → 工具 → 项目备份 / 开源协议"
      },
      {
        t: "检查更新：正式版、Beta 与共存版各自下载对应安装包，更新内容可翻译",
        where: "设置 → 关于 → 检查更新",
        how: "可关闭“启动时检查更新”"
      },
      {
        t: "AIDE Plus 运行内存扩容（Android 11 以上）",
        where: "设置 → 诊断与实验室 → AIDE+运行内存扩容"
      }
    ]
  }
}
