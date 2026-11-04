# Projects and builds

AIDE Plus rewrites the AIDE build service and follows the Android Gradle Plugin (AGP) for resources, R classes and DEX.

## Toolchain

- **aapt2** replaces aapt for resource compilation and linking.
- **D8** replaces dx for DEX conversion and can also obfuscate code.
- R class generation and DEX grouping are rewritten after AGP, so large projects no longer run out of memory.
- ViewBinding, DataBinding, annotation processors, core library desugaring, `androidResources` and full `BuildConfig`.
- APK resource alignment and v1, v2 and v3 signatures.

## Gradle files

AIDE Plus has its own Gradle parser. It reads your `build.gradle` directly without running Gradle on the device:

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

- `implementation`, `api`, `compileOnly`, `runtimeOnly`, `libgdxNatives` and `exclude` are supported.
- The Maven downloader supports BOMs, inherits versions from parent POMs and skips optional / provided dependencies.
- Version ranges resolve to the highest matching version, timestamped SNAPSHOTs work, and downloads are verified with sha1.
- `gradle/libs.versions.toml` version catalogs can be edited visually, with update checks.
- Multiplatform libraries resolve to their Android variant automatically.

## Project properties

Project properties open as a full-screen page, with project settings and each module shown separately:

- Android defaults: `compileSdk`, `minSdk`, `ndkVersion`, `buildToolsVersion`, `testInstrumentationRunner`, `multiDexEnabled` and more.
- Build types, signing configs, dependencies and protection plugins.
- Saving keeps the untouched parts of your script instead of rewriting the whole file.

## Gradle command builds

When you need real Gradle, for example for custom plugins, enable Gradle command builds. The Run button can then start:

- The default build (the built-in AIDE Plus build)
- A chosen Gradle task
- A custom sh command

Commands run in the selected container (Termux, a Linux distro or the system shell), with environment variables such as `JAVA_HOME`. The terminal environment page can set up JDK 17, the Android SDK and aapt2 in one tap. See [Terminal and AI assistant](/docs/terminal).
