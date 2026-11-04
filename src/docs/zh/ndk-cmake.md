# NDK 与 CMake

AIDE Plus 支持使用 CMake 构建原生代码，并内置了 NDK / CMake 工具链管理器。

## 安装工具链

打开 **设置 → 构建与运行 → Native代码支持 → 工具链管理**（也可以从 **设置 → 关于 → 原生与 Kotlin 工具链** 进入），选择版本后点 **下载并安装**：

| 工具 | 可选版本 |
| --- | --- |
| NDK | r17c、r18b、r19c、r20b、r21e、r22b、r23b、r24、r25c OLLVM、r26b、r26d、r27b、r27d、r28c、r29 |
| CMake | 3.10.2、3.18.1、3.22.1、3.25.1、3.29.3、3.31.4 |

- 下载支持 SHA-256 校验和断点续传。
- 每个版本使用独立目录，可以同时安装多个版本。
- 解包后会自动修复 `cmake` 等工具的执行权限；应用私有目录不允许直接执行时，会回退到 Android linker 运行。
- 传统 ndk-build 项目：安装后再点 **设为 ndk-build 使用版本**。CMake 项目使用项目配置中的版本。
- 注意 CMake 3.31 需要 NDK r25 或更高版本。
- Beta 版与共存版可以开启 **使用主包的 NDK / CMake**，与主包共用一份安装（需要与主包同一签名）。
- 页面下方可以卸载已安装版本或清理下载缓存。

## 在项目中使用

在模块的 `build.gradle` 中声明 CMake 脚本和 NDK 版本：

```groovy
android {
    ndkVersion "27.1.12297006"
    externalNativeBuild {
        cmake {
            path "src/main/cpp/CMakeLists.txt"
            version "3.22.1"
        }
    }
}
```

`ndkVersion` 也可以在项目属性页中直接选择，编辑时会保留未修改的 Gradle 文本。

## 常见问题

- **找不到 NDK**：确认工具链管理页中已安装与 `ndkVersion` 对应的版本。
- **cmake 无法执行**：在工具链管理页中重新安装该版本，安装流程会重新修复执行权限。
- 更多原生开发资源可以参考 [AIDE-Ndk-Install](https://github.com/ZeroAicy/AIDE-Ndk-Install)。
