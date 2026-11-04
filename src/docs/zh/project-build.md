# 项目与构建

AIDE Plus 重写了 AIDE 的构建服务，参考 Android Gradle Plugin（AGP）的行为处理资源、R 类和 DEX。

## 构建工具链

- **aapt2** 替代 aapt，处理资源编译与链接。
- **D8** 替代 dx，负责 DEX 转换，并可用于代码混淆。
- 参照 AGP 重写了 R 类生成与 DEX 分组合并，大项目不再内存不足。
- 支持 ViewBinding、DataBinding、注解处理器、核心库脱糖、`androidResources` 与完整的 `BuildConfig`。
- APK 资源对齐，签名支持 v1、v2、v3。

## Gradle 文件支持

AIDE Plus 自带 Gradle 解析器，直接读取项目中的 `build.gradle`，不需要在设备上运行 Gradle：

```groovy
dependencies {
    implementation 'androidx.appcompat:appcompat:1.7.0'
    implementation platform('com.squareup.okhttp3:okhttp-bom:4.12.0')
    compileOnly 'org.projectlombok:lombok:1.18.34'
    runtimeOnly 'org.slf4j:slf4j-simple:2.0.13'
    implementation('com.example:library:1.0') {
        exclude group: 'com.example', module: 'unused'
    }
}
```

- 支持 `implementation`、`api`、`compileOnly`、`runtimeOnly`、`libgdxNatives` 以及 `exclude`。
- Maven 下载器支持 BOM，按 Maven 规则继承父 POM 的版本，不再拉取 optional / provided 依赖。
- 版本范围取满足条件的最高版本，支持带时间戳的 SNAPSHOT，下载后校验 sha1。
- 支持版本目录 `gradle/libs.versions.toml`，可以在应用内可视化编辑并检查更新。
- 多平台库会自动选择 Android 变体。

## 项目属性

在文件浏览器中打开项目属性对话框，点 **可视化编辑** 进入全屏的项目属性页。工程设置与各模块分开显示，模块内按分类逐层进入：

- Android 基础配置：`compileSdk`、`minSdk`、`ndkVersion`、`buildToolsVersion`、`testInstrumentationRunner`、`multiDexEnabled` 等。
- 构建类型、签名配置、依赖和保护插件。
- 保存时会保留脚本中未修改的原文，不会重写整个 Gradle 文件。

## 构建流程页

点运行后会显示独立的“构建”页，列出各模块的构建步骤、进度和输出，可以停止或复制。构建失败时也可以从错误列表打开它。

## 其它构建选项

都在 **设置 → 构建与运行**：

| 分组 | 选项 |
| --- | --- |
| SDK 与依赖 | android.jar 文件、刷新 Maven 仓库、Maven 仓库目录 |
| 构建 | 启用 adrt 日志注入、解除 Java 项目 API 限制、重定义 APK 构建路径（工程/build/bin/）、Java 项目 Dex 的 minSdk、启用 aapt2 |
| 运行 | 静默安装（Root）、使用 Shizuku 安装、自定义安装器、终端环境 |

## Gradle 命令构建

如果需要运行真正的 Gradle（例如使用自定义插件），在 **设置 → 构建与运行 → Gradle 命令构建** 中开启。开启后运行按钮可以选择：

- 默认构建（AIDE Plus 内置构建）
- 指定的 Gradle 任务
- 自定义 sh 命令

同一分组里还有三项：

- **构建容器**：命令在哪个环境中执行（Termux、Linux 发行版或系统 Shell），默认跟随终端。
- **环境变量**：每行一个 `KEY=VALUE`，例如 `JAVA_HOME=/usr/lib/jvm/java-17`。
- **自定义构建命令**：在运行按钮菜单中列出的 sh 命令，例如 `./gradlew assembleDebug`。

在终端里构建成功后，会弹出本次生成的 APK，可以直接安装，或用项目属性中已保存的签名配置重新签名后安装。终端环境页可以一键配置 JDK 17、Android SDK 与 aapt2，详见 [终端与 AI 助手](/docs/terminal)。
