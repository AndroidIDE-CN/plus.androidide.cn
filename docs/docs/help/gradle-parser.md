---
title: Gradle解析器
---

# 说明

:::warning **注意**

由于Gradle体量过大，目前只能进行解析，并不能编译运行

:::


### android-ndkVersion
- `path` CMakeLists.txt路径
- `version` Cmake版
- `ndkVersion` NDK版本
- `cppFlags` 编译器参数
- `abiFilters` abi过滤
- `arguments` 

### android-externalNativeBuild-cmake
::: tip
 和**android-ndkVersion**一样
:::


### android-compileOptions

:::tip **注意**

需要打开**ecj模式**(设置 -> 实验室 -> ecj)，才能设置Java语法版本

最高支持Java23，但是想在安卓上运行是不太可能的

:::

::: details
```java{2,3}
compileOptions {
	sourceCompatibility JavaVersion.VERSION_17
	targetCompatibility JavaVersion.VERSION_17
}
```
:::

### android-signingConfigs

:::tip **注意**

**storeFile**可以输入绝对和相对路径

可以到设置里面创建自定义的密匙文件

:::

::: details
```java{3-6}
signingConfigs{
	debug{
		keyAlias "androiddebug"
		keyPassword "123789456"
		storePassword "123789456"
		storeFile file("app-debug.jks")
	}
}
```
:::


### android-buildTypes-release

:::tip **注意**

仅支持配置release(但不分是否是 release)

:::

- 资源混淆

  `shrinkResources` 输入值为 **布尔值**


- 代码混淆 **增量构建会失效**

  `minifyEnabled` 输入值为 **布尔值**

- 代码混淆配置文件

  `proguardFiles `默认为 `getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'`


		
### android-buildFeatures

- 启用viewBinding

  `viewBinding` true则启用

- ~~启用dataBinding~~

  ~~`dataBinding` true则启用~~

  由于并不完整，目前已经废弃了

- 启用androidx

  `useAndroidx`，默认为`true`
  
  但Gradle 8.5不支持此写法

  如若使用Gradle请更改`gradle.properties`文件 `android.useAndroidX`

### dependencies

::: tip 

支持打包jar根目录classes{N}.dex文件

但是Gradle不支持打包classes{N}.dex

:::

支持以下语法
- `implementation` 不传递依赖
- `api` 传递依赖
- `compile` 传递依赖
- `runtimeOnly` 仅运行时
- `compileOnly` 仅编译
- `exclude` 排除某个包
- `wearApp` 手表应用
- `natives`,`libgdxNatives` libgdx适配
- ~~`coreLibraryDesugaring`~~ l8脱糖



