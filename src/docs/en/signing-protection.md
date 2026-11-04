# Signing and protection

## Signing configs

1. Create or import a keystore in the **Signing configs** editor.
2. In the **Build types** editor, pick that entry from the existing `signingConfigs`.

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

ApkSign supports the v1, v2 and v3 signature schemes. Keep your keystore safe: without it you can’t update a published app.

## Protection plugins

The module properties page configures these plugins:

| Plugin | Purpose |
| --- | --- |
| StringFog | String encryption |
| BlackObfuscator | Control-flow obfuscation |
| DexVMP | Runs methods in a VM, with custom VM library, bridge library and loader class |
| DPT Shell | Packs the output APK, also for debug builds |

- Plugin work directories are cleaned up after packaging.
- Oversized methods or DEX files are skipped or processed in batches to avoid running out of memory.
- Library modules and AAB output can’t use the protection chain.

> Respect open source licenses: derivatives of AGPL code must publish their source, and protection must not be used to avoid that obligation.
