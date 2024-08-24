---
title: 更新日志

order: 1
# 设置作者
# author: 罪慾
sticky: false
star: false
---

**beta 测试版本仅在**[QQ群](https://qm.qq.com/q/TckcjpX5MO)**中发布测试**
~~如果有的话~~

## v2.2.0.3
- [添加] 自定义代码高亮功能
- [添加] Java11语法之var
- [添加] 接口默认方法(源码中可用)
- [添加] Java11的var
- [优化] 若干bug

## v2.2-releases
- [修复] 项目服务带来的不稳定
1.代码导航新异步加载如果一次导航不到位置
2.返回后再次导航便导航正确位置
- [优化] 若干bug
- [添加] aidl kotlin词法高亮
- [添加] gradle项目支持 compileOnly runtimeOnly
- [添加] libgdxNatives[适用于libgdx native库]
**libgdxNatives "com.badlogicgames.gdx:gdx-platform:1.12.0:natives-arm64-v8a"<br><br>compileOnly runtimeOnly支持 files 以及 fileTree<br><br>runtimeOnly 打包顺序，从主项目遍历，按照声明顺序优先添加**

## v2.2.0.1-releases
- 此版本为v2.2第一个稳定版
有已知一个bug，触发频率非常低
等待下个版本修复


## v2.1.1.8
- 优化冷启动耗时
新增查看方法体内容[非常卡 不适合日常开发]
修复某些bug

## v2.1.1.6-debug
- 初步稳定的版本，仅在Android14测试
提供成品以便构建此源码
构建时请用 debug构建，以release构建时会导致签名不同
以app_flavor作为主项目，minifyEnabled不要为true
shrinkResources也不要为ture，因为仅在Java使用的资源被删掉了(ー_ー)!!
因为混淆规则未优化，可能会导致构建后的AIDE+运行出错

## v2.1.0-material-alpha01
- 可用的material版

## v2.1.0-alpha01
- 替换底包对support的引用，采用androidx
优化aapt2，可增量编译
优化构建流程，可以使用d8(以jar以及class作为单位增量)

# 更多版本
- 丢失记录
