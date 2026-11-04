# Signing and protection

## Signing configs

Create a keystore in **Settings → Build & run → APK signing → New certificate**. The same group can enable a custom certificate for signing debug APKs.

To sign a module:

1. Open project properties (the project properties dialog in the file browser → **Visual editor**) and enter the module.
2. Add the keystore under **Signing configs**.
3. Under **Build types**, pick that entry from the existing `signingConfigs`.

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

Configure these on the module page of project properties:

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
