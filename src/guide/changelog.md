---
title: 更新日志

order: 1
# 设置作者
# author: 罪慾
sticky: false
star: false
---

**Beta test version is only released for testing in **[QQ group](https://qm.qq.com/q/TckcjpX5MO)****

~~If there is~~

## v2.2.0.3
- [Add] Custom code highlighting feature
- [Add] Java11 syntax var
- [Add] Interface default method (available in source code)
- [Add] Java11 var
- [Optimization] Several bugs

## v2.2-releases
- [Fix] Instability caused by project service
1.Code navigation is loaded asynchronously if the navigation fails at one time
2.Navigate to the correct location after returning
- [Optimize] Several bugs
- [Add] aidl kotlin lexical highlighting
- [Add] Gradle project supports compileOnly runtimeOnly
- [Add] libgdxNatives [applicable to libgdx native library]
**libgdxNatives "com.badlogicgames.gdx:gdx-platform:1.12.0:natives-arm64-v8a"<br><br>compileOnly runtimeOnly supports files and fileTree<br><br>runtimeOnly packaging order, traverse from the main project, and add first according to the declaration order**

## v2.2.0.1-releases
- This version is the first stable version of v2.2. There is a known bug, the trigger frequency is very low. Waiting for the next version to fix it


## v2.1.1.8
- Optimize cold start time
Added method body content viewing function [very slow, not suitable for daily development]
Fixed some bugs

## v2.1.1.6-debug
- Preliminary stable version, tested only on Android 14
Provide finished product to build this source code
Please use debug build when building, release build will result in different signatures
Use app_flavor as the main project, minifyEnabled should not be true
ShrinkResources should not be true, because resources used only in Java are deleted (ー_ー)!!
Because the obfuscation rules are not optimized, it may cause errors in the operation of AIDE+ after the build

## v2.1.0-material-alpha01
- Available material version

## v2.1.0-alpha01
- Replace the reference of support in the base package, use androidx
Optimize aapt2, incremental compilation
Optimize the build process, you can use d8 (increment with jar and class as the unit)

## More versions
- Lost
