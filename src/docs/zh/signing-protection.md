# 签名与加固

## 签名配置

新建密钥库：**设置 → 构建与运行 → APK签名 → 新建签名证书**。同一分组可以开启“自定义签名证书”，用它签名调试 APK。

为模块配置签名：

1. 打开项目属性（文件浏览器中的项目属性对话框 → **可视化编辑**），进入要签名的模块。
2. 在 **签名配置** 中添加密钥库。
3. 在 **构建类型** 中，从已有的 `signingConfigs` 选择对应的签名配置。

```groovy
android {
    signingConfigs {
        release {
            storeFile file("release.jks")
            storePassword "******"
            keyAlias "key0"
            keyPassword "******"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

ApkSign 支持 v1、v2、v3 签名方案。请妥善保管密钥库，丢失后将无法更新已发布的应用。

## 保护插件

在项目属性的模块页中配置以下保护插件：

| 插件 | 作用 |
| --- | --- |
| StringFog | 字符串加密 |
| BlackObfuscator | 控制流混淆 |
| DexVMP | 将方法转换到虚拟机执行，可自定义 VM 库名、桥接库名和 loader 类 |
| DPT Shell | 对输出 APK 加壳，也可用于 debug 构建 |

- 打包结束会自动清理插件的工作目录。
- 遇到超大方法或 DEX 时会跳过或分批处理，降低内存不足的风险。
- library 模块和 AAB 输出不支持保护链。

> 请遵守开源协议：基于 AGPL 代码的衍生作品需要公开源代码，不能用加固手段规避开源义务。
