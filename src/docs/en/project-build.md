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

Open the project properties dialog in the file browser and tap **Visual editor** for the full-screen project properties page. Project settings and each module are shown separately, with categories inside each module:

- Android defaults: `compileSdk`, `minSdk`, `ndkVersion`, `buildToolsVersion`, `testInstrumentationRunner`, `multiDexEnabled` and more.
- Build types, signing configs, dependencies and protection plugins.
- Saving keeps the untouched parts of your script instead of rewriting the whole file.

## Build panel

Pressing Run shows a separate Build page with per-module steps, progress and output, which you can stop or copy. After a failure, it also opens from the error list.

## Other build options

All under **Settings → Build & run**:

| Group | Options |
| --- | --- |
| SDK & dependencies | android.jar file, refresh Maven repositories, Maven directory |
| Build | Enable ADRT log injection, lift Java project API limits, redirect APK output (project/build/bin/), dex minSdk for Java projects, enable aapt2 |
| Run | Silent install (root), install with Shizuku, custom installer, terminal environments |

## Gradle command builds

When you need real Gradle, for example for custom plugins, enable **Settings → Build & run → Gradle command build**. The Run button can then start:

- The default build (the built-in AIDE Plus build)
- A chosen Gradle task
- A custom sh command

The same group has three more items:

- **Build container**: where commands run (Termux, a Linux distro or the system shell); follows the terminal by default.
- **Environment variables**: one `KEY=VALUE` per line, such as `JAVA_HOME=/usr/lib/jvm/java-17`.
- **Custom build commands**: sh commands listed in the Run menu, such as `./gradlew assembleDebug`.

After a successful build in the terminal, the new APK pops up so you can install it, or re-sign it with a signing config saved in project properties. The terminal environment page can set up JDK 17, the Android SDK and aapt2 in one tap. See [Terminal and AI assistant](/docs/terminal).
