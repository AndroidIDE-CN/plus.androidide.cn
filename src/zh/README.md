---
home: true
icon: home
title: AIDE Plus

heroImage: ./assets/icon/logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: AIDE Plus
tagline: 一个魔改AIDE版本<br>由于原AIDE团队已经不更新，我们仅仅只是进行魔改。如有侵权，请联系我们进行停止运营
actions:
  - text: 获取下载
    icon: download
    link: ./guide/download
    type: primary

  - text: 帮助
    link: ./guide/

  - text: 源码
    icon: github
    link: https://github.com/AndroidIDE-CN/AIDEPlus

highlights:
  - header: 使用AIDE+的优势
    description: 我们扩展了AIDE自带的很多功能，为你添加了许多功能。
    image: /logo.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Aapt2
        icon: arrows-rotate
        details: 替换掉了原本的Aapt
        #link:
      - title: Androidx
        icon: arrows-rotate
        details: 替换AIDE老旧的Support框架
        #link:
      - title: Build Service
        icon: arrows-rotate
        details: 替换掉了原本的部分构建流程
        #link:
      - title: Gradle Parse
        icon: arrows-rotate
        details: 替换掉了过时的Gradle解析器
        #link:
      - title: Project Async
        icon: arrows-rotate
        details: 优化AIDE冷启动耗时
        #link:
      - title: Class Read
        icon: arrows-rotate
        details: 修改原版的过时的Class解析器
        #link:
      - title: ApkSign
        icon: arrows-rotate
        details: 重写了老旧的签名服务
        #link:
      - title: Root install
        icon: arrows-rotate
        details: 修复了su安装应用的一些错误
        #link:
      - title: Maven
        icon: arrows-rotate
        details: 修复老旧的的仓库解析
        #link:
      - title: Obfuscation
        icon: arrows-rotate
        details: 增加了res&dex混淆
        #link:
      - title: NDK & Cmake
        icon: arrows-rotate
        details: 替换NDK构建，添加Cmake
        #link:
      - title: Restore Obfuscation
        icon: arrows-rotate
        details: 还原了AIDE部分混淆，欢迎提交
        #link:
      - title: Manifest Merger
        icon: arrows-rotate
        details: 更新了清单合并工具
        #link:
      - title: D8 & R8
        icon: square-plus
        details: 支持了D8&R8功能
        #link:
      - title: Add Drawerlayout
        icon: square-plus
        details: 可启用Drawerlayout
        #link:
      - title: TabSpinner
        icon: square-plus
        details: 可启用ActionBar TabSpinner
        #link:
      - title: Library too much
        icon: square-plus
        details: 修复依赖过多会oom
        #link:
      - title: Custom code colors
        icon: square-plus
        details: 支持自定义代码颜色
        #link:
      - title: Shizuku Install
        icon: square-plus
        details: Shizuku安装APK
        #link:
      - title: Java Project
        icon: square-plus
        details: Java项目使用安卓Api
        #link:
      - title: ViewBinding
        icon: square-plus
        details: 安卓项目使用Viewbinding
        #link:
      - title: DataBinding
        icon: square-plus
        details: 安卓项目使用Databinding
        #link:
      - title: Apks/Aab
        icon: square-plus
        details: 安卓项目生成Apks/Aab(x)
        #link:
      - title: AIDE-Termux
        icon: square-plus
        details: 完整的Gradle环境
        #link:
      - title: Language Highlighting
        icon: square-plus
        details: 添加更多语言的高亮
        #link:
  - header: 待实现功能
    description: 暂未实现的功能，如果您有好的想法可以给我们提供Issue或者Code
    image: /assets/icon/new.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Manifest Editor
        icon: calendar-plus
        details: 可视化编辑Manifest
        #link:
      - title: Icon Manager
        icon: calendar-plus
        details: icon管理器
        #link:
      - title: Add Lambda
        icon: calendar-plus
        details: 添加Lambda语法
        #link:
      - title: AIDE UI
        icon: calendar-plus
        details: 美化AIDE的UI
        #link:
      
---
