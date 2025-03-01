---
title: Java编译
---

# Eclipse Compiler for Java

:::tip 提示

由于 **AIDE原版** 是自己生成Class文件，所以出现非常多的Bug

目前添加了**ECJ**，但该功能目前为实验选项 **默认不开启**

请前往 **设置 → 扩展设置 → 实验室** 开启

:::


## **ECJ（Eclipse Compiler for Java）**

**ECJ** 是 **[Eclipse](https://www.eclipse.org/)** 项目中用于编译 **Java** 代码的编译器，主要特点如下：

- **支持增量编译**
- **支持最新的 Java 版本**：ECJ 通常比官方 **Javac** 更早支持最新的 **Java 语法特性**。
- **比 `Javac` 更宽松**：ECJ 在某些情况下比 `Javac` 更宽容，允许编译不完全符合规范的代码。
