# NDK and CMake

AIDE Plus builds native code with CMake and ships an NDK / CMake toolchain manager.

## Installing toolchains

Open **Settings → Build & run → Native code → Toolchain manager** (also reachable from **Settings → About → Native and Kotlin toolchains**), pick a version and tap **Download and install**:

| Tool | Versions |
| --- | --- |
| NDK | r17c, r18b, r19c, r20b, r21e, r22b, r23b, r24, r25c OLLVM, r26b, r26d, r27b, r27d, r28c, r29 |
| CMake | 3.10.2, 3.18.1, 3.22.1, 3.25.1, 3.29.3, 3.31.4 |

- Downloads are verified with SHA-256 and can resume.
- Each version has its own directory, so several can be installed at once.
- After extraction, execution permissions for `cmake` and related tools are repaired. When app storage doesn’t allow execution, tools run through the Android linker.
- For classic ndk-build projects, also tap **Use for ndk-build** after installing. CMake projects use the version in the project config.
- CMake 3.31 needs NDK r25 or later.
- Beta and side-by-side builds can turn on **Use the main app’s NDK / CMake** to share one install (same signature required).
- Installed versions can be uninstalled and the download cache cleared at the bottom of the page.

## Using it in a project

Declare the CMake script and NDK version in the module `build.gradle`:

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

`ndkVersion` can also be picked on the project properties page, which keeps the rest of your Gradle text untouched.

## Troubleshooting

- **NDK not found**: make sure the version matching `ndkVersion` is installed in the toolchain manager.
- **cmake can’t run**: reinstall that version in the toolchain manager; installation repairs the permissions again.
- See also [AIDE-Ndk-Install](https://github.com/ZeroAicy/AIDE-Ndk-Install).
