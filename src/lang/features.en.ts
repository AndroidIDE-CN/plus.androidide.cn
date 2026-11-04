// Feature page copy: t is the feature, where is where to open it, how is how to use it (both optional).
// Paths follow the 2.3.5.0 UI; "Menu" means the main menu at the top right of the editor.
// Menu names are given in English; the app may show them in your interface language.
export default {
  home: {
    title: 'Home, plugins and sharing',
    items: [
      {
        t: 'Material home screen with Projects / Plugins / Share tabs at the bottom',
        where: 'Launch AIDE Plus; from the editor: Menu → Home',
        how: 'To skip the home screen: Settings → General → Window → Open editor on launch'
      },
      {
        t: 'One project list merging history and AppProjects, grouped by folder, with pinning, sorting, search, icons, module count, Git branch and package name',
        where: 'Home → Projects',
        how: 'Long-press a project or tap its more button for details, share as zip (without build output), rename and delete'
      },
      {
        t: 'Create, open or clone a project',
        where: 'Home → Projects → round button at the bottom right',
        how: 'Projects opened through the system file picker are imported as a local working copy and do not sync back'
      },
      {
        t: 'First-run setup wizard: terms, permissions, build tools, basic settings',
        where: 'Opens on first launch; rerun it from Home menu → Setup wizard'
      },
      {
        t: 'Plugins page: grouped toggles for built-in features, per-component switches on the detail page',
        where: 'Home → Plugins',
        how: 'Tap a plugin to turn off individual Markdown extensions, file previews or decompilers'
      },
      {
        t: 'Third-party plugins (.aplug, Java or Lua) with one-tap translation of their descriptions',
        where: 'Home → Plugins → Import plugin',
        how: 'Plugins run with all AIDE Plus permissions, so only install trusted ones; uninstall from the detail page'
      },
      {
        t: 'Share page: featured and GitHub-discovered projects, imported in one tap',
        where: 'Home → Share',
        how: 'Add the topic aide-plus-project to your GitHub repository to appear under Discover'
      },
      {
        t: 'New project templates use AGP 8.13 style (plugins block, namespace, compileSdk 36)',
        where: 'Home → Projects → round button → New project',
        how: 'If you downloaded the old “More” templates, reinstall the built-in ones under “More” in the new project dialog'
      }
    ]
  },
  build: {
    title: 'Build system',
    items: [
      {t: 'Rewritten build service: aapt2 instead of aapt, D8 instead of dx, with D8 obfuscation'},
      {t: 'R class generation and DEX grouping rewritten after AGP, so large projects no longer run out of memory'},
      {t: 'ViewBinding, DataBinding, annotation processors, core library desugaring, androidResources and full BuildConfig'},
      {t: 'Updated manifest merger, APK resource alignment, v1 to v3 signatures'},
      {
        t: 'Separate Build page with per-module steps, progress, output and failure history; stop and copy supported',
        where: 'Shown when you run; also opens from the error list'
      },
      {
        t: 'Gradle command builds: the Run button offers the default build, Gradle tasks or custom sh commands',
        where: 'Settings → Build & run → Gradle command build',
        how: 'Set the build container, environment variables (such as JAVA_HOME) and custom commands in the same group; Run then shows a build menu'
      },
      {
        t: 'After a successful build in the terminal, the new APK pops up for install or re-signing',
        where: 'Appears after running ./gradlew assembleDebug or similar in the built-in terminal',
        how: '“Re-sign…” uses signing configs saved in project properties'
      },
      {
        t: 'Fixed silent install, plus Shizuku and custom installers; root install streams the APK',
        where: 'Settings → Build & run → Run'
      },
      {
        t: 'Lift Java project API limits and redirect APK output to project/build/bin/',
        where: 'Settings → Build & run → Build'
      }
    ]
  },
  java: {
    title: 'Java',
    items: [
      {t: 'Part of the Java 8, 9 and 11 syntax in the default analyzer; Java projects can use the Android API'},
      {
        t: 'Java 23 compilation through ECJ, including lambdas',
        where: 'Settings → Code & compiler → Compiler → Enable Eclipse Compiler for Java [ecj]',
        how: 'Takes effect after a restart; affects analysis and compilation only'
      },
      {
        t: 'Eclipse Java formatter: indentation, line width, brace position, blank lines, comment and annotation wrapping',
        where: 'Settings → Code & compiler → Eclipse Java format',
        how: 'Enable it, then format with Menu → Format code'
      },
      {
        t: 'JDT member completion, full JDT completion, JDT navigation and parameter hints (experimental)',
        where: 'Settings → Code & compiler → Completion / Navigation & sources',
        how: 'Experimental and restart-only; turn them off if anything misbehaves'
      },
      {
        t: 'Errors and semantic highlighting for open Java files are analyzed in the background, with short summaries and suggestions',
        where: 'Settings → Code & compiler → Error checking → Background code analysis'
      },
      {
        t: 'New class parsing library for newer class file features and the Java 8 API',
        where: 'Settings → Code & compiler → New class parsing library',
        how: 'Restart, then Menu → More → Project → Refresh build'
      }
    ]
  },
  kotlin: {
    title: 'Kotlin',
    items: [
      {
        t: 'Completion, live errors, import fixes and navigation from the AIDE Plus engine (official Kotlin 2.4.20 parser)',
        where: 'Settings → Code & compiler → Completion → Kotlin semantic completion; Error checking → Kotlin live errors'
      },
      {
        t: 'Kotlin compilation (kotlinc and KSP share one compiler), with automatic Kotlin stdlib packaging',
        where: 'Settings → Code & compiler → Compiler → Enable Kotlin compilation',
        how: 'Install the Kotlin compiler in the toolchain manager first, then restart'
      },
      {
        t: 'Full compiler-frontend check of the module about one second after you stop typing',
        where: 'Settings → Code & compiler → Error checking → Full check with the Kotlin compiler'
      },
      {
        t: '30+ quick fixes: imports, typos, initialization, types, open/override, Composable, OptIn and more',
        where: 'Long-press the error → Fix (Kotlin)',
        how: 'In the error list, tap the info button for suggestions and the full diagnostic'
      },
      {
        t: 'Separate switches for Kotlin warnings in the error list and in the editor',
        where: 'Settings → Code & compiler → Error checking'
      },
      {
        t: 'Kotlin code style settings',
        where: 'Menu → More → Format → Configure code style'
      }
    ]
  },
  deps: {
    title: 'Gradle and dependencies',
    items: [
      {t: 'Rewritten Gradle parser with runtimeOnly, compileOnly, libgdxNatives and exclude'},
      {t: 'New Maven downloader: BOMs, parent POM versions, no optional / provided dependencies, timestamped SNAPSHOTs, sha1 checks'},
      {t: 'Missing dependencies download before analysis, shared ones resolve once, unreachable repositories are skipped'},
      {t: 'Android variants picked automatically for multiplatform libraries; AndroidX as the default framework'},
      {
        t: 'Visual editing and update checks for libs.versions.toml',
        where: 'Project properties → Dependencies; update checks in Settings → Code & compiler → SDK & platform data'
      },
      {
        t: 'Refresh Maven repositories or change the Maven directory',
        where: 'Settings → Build & run → SDK & dependencies'
      }
    ]
  },
  native: {
    title: 'NDK and CMake',
    items: [
      {
        t: 'Toolchain manager for Android SDK platforms, NDK r17c to r29, CMake 3.10.2 to 3.31.4 and the Kotlin compiler',
        where: 'Settings → Build & run → Native code → Toolchain manager',
        how: 'Pick a version and tap “Download and install” (SHA-256 checked, resumable); for ndk-build projects also tap “Use for ndk-build”'
      },
      {
        t: 'Beta and side-by-side builds can share the main app’s NDK / CMake',
        where: 'Toolchain manager → Use the main app’s NDK / CMake',
        how: 'Requires the same signature as the main app; falls back to its own install otherwise'
      },
      {t: 'CMake builds with execution permission repair and automatic execution fallbacks on Android 10+'},
      {
        t: 'Download Android SDK platforms without opening a project',
        where: 'Settings → Code & compiler → SDK & platform data → Android SDK platforms'
      },
      {
        t: 'Parallel native compilation',
        where: 'Settings → Build & run → Native code → Parallel compilation'
      }
    ]
  },
  editor: {
    title: 'Editor',
    items: [
      {
        t: 'Indent guides, bracket and tag pair guides, smart bracket pairing and inline diagnostics',
        where: 'Settings → Editor',
        how: 'Each has its own switch; tap an inline diagnostic for suggestions and the full error'
      },
      {
        t: 'File structure for .java, .kt and .class, with flowcharts for Java methods',
        where: 'Menu → File structure',
        how: 'Search, filter by types, methods or fields, tap to jump; copy a flowchart as Mermaid'
      },
      {
        t: 'Cross-language navigation and usages: Java native / Kotlin external ↔ JNI functions, AIDL interfaces → .aidl declarations',
        where: 'Menu → Find… → Find usages; or long-press code → Go to'
      },
      {
        t: 'Jump to sources of libraries and android.jar, or show decompiled source (built-in CFR)',
        where: 'Settings → Code & compiler → Navigation & sources',
        how: 'Download Android platform sources in the SDK manager first; the decompiler engine is selectable on the same page'
      },
      {
        t: 'Comment preview, translate selection, ask the AI assistant',
        where: 'Long-press code in the editor'
      },
      {
        t: 'TextMate grammar manager with groups, search, toggles and file mappings',
        where: 'Settings → Editor → Highlighting → TextMate grammars'
      },
      {
        t: 'Symbol bar with 1 to 4 rows, undo, redo and save; custom symbols and snippets per language',
        where: 'Settings → Input & shortcuts → Bottom bar / Symbols / Snippets'
      },
      {
        t: 'Restores the last files, tabs and cursor per project; large files load asynchronously',
        where: 'Automatic; async loading switch in Settings → Editor'
      },
      {
        t: 'Visual layout designer and manifest editor',
        where: 'With a layout XML open: Menu → Designer; manifest: Menu → Manifest editor'
      }
    ]
  },
  preview: {
    title: 'Previews',
    items: [
      {
        t: 'Compose preview: Kotlin files with a Preview annotation switch between source and preview',
        where: 'Preview button at the top right of the editor',
        how: 'Opening the preview compiles the module incrementally, including unsaved changes; auto refresh is in Settings → Code & compiler → Compiler'
      },
      {
        t: 'Markdown preview with Mermaid, KaTeX, code highlighting, footnotes, [TOC], GitHub alerts, all rendered offline',
        where: 'Open a .md file and tap the preview button at the top right'
      },
      {
        t: 'File previews: images, archives (jar/aar/zip/apk), audio and video, PDF, SQLite, certificates, fonts, .so/.dex, hex',
        where: 'Tap the file in the file browser',
        how: 'Turn off previews you don’t need under Home → Plugins'
      },
      {
        t: 'Editable previews for CSV/TSV tables and JSON/YAML/TOML/properties trees, keeping the original format with undo',
        where: 'Open the file in the file browser'
      },
      {
        t: 'Outlines for SVG, plist and .proto; keystores (with password); DEX class lists with per-class decompilation; resources.arsc and binary manifests',
        where: 'Open the file in the file browser'
      }
    ]
  },
  debug: {
    title: 'Debugging and logs',
    items: [
      {
        t: 'Rewritten LogCat with automatic su / Shizuku / ADRT capture, level and rule filters, and search',
        where: 'Menu → More → View → Logs',
        how: 'One rule per line, e.g. tag:MyApp level:W,E; prefix with - to exclude'
      },
      {
        t: 'Floating LogCat that can be moved, resized and collapsed into a bubble',
        where: 'Menu → More → View → Floating Logcat',
        how: 'Needs the “Display over other apps” permission; tap the bubble to expand, long-press to close'
      },
      {
        t: 'ADRT log injection now only controls regular debug builds; breakpoints (debug-aide) are unaffected',
        where: 'Settings → Build & run → Build → Enable ADRT log injection',
        how: 'Off by default; turn it on when you need app logs in LogCat'
      },
      {
        t: 'Breakpoint debugging: run, step over, step into, step out, stop',
        where: 'Long-press code → Breakpoint; debug commands are in the main menu'
      },
      {
        t: 'Manage cached logs: view, share or delete, or share them all as an archive',
        where: 'Menu → Tools → Manage cached logs; or Settings → About'
      }
    ]
  },
  protect: {
    title: 'Signing and protection',
    items: [
      {
        t: 'Create keystores and sign debug APKs with a custom certificate',
        where: 'Settings → Build & run → APK signing → New certificate'
      },
      {
        t: 'Build types pick an existing signingConfigs entry',
        where: 'Project properties → module → Signing configs / Build types',
        how: 'Add the keystore under signing configs first, then select it in the build type'
      },
      {
        t: 'StringFog, BlackObfuscator, DexVMP and DPT Shell protection plugins',
        where: 'Project properties → module → Protection plugins',
        how: 'DexVMP supports custom VM library, bridge library and loader class; not for library modules or AAB output'
      },
      {t: 'Plugin work directories are cleaned after packaging; oversized methods or DEX files are skipped or batched'}
    ]
  },
  terminal: {
    title: 'Terminal and environments',
    items: [
      {
        t: 'Built-in Termux terminal: full-width tabs, selection handles, 8 color schemes, extra keys, search and ~/.termux',
        where: 'Menu → Tools → Show terminal; or long-press a folder → Open in terminal',
        how: '“More” can interrupt tasks, export text, show session diagnostics and a link list'
      },
      {
        t: 'Environments: Termux packages, Linux distros (Ubuntu, Debian, Arch) and the system shell',
        where: 'Settings → Build & run → Run → Terminal environments',
        how: 'Background downloads with pause, resume, offline install and safe reset'
      },
      {
        t: 'Several instances per distro; rename, back up as .aide-env.tar.gz, restore, edit APT / pacman sources',
        where: 'Environment page → “More” next to an environment',
        how: 'Backups are not encrypted and may contain keys or tokens'
      },
      {
        t: 'One-tap Gradle environment (JDK 17, Android SDK and an aapt2 that works with newer AGP)',
        where: 'Environment page'
      },
      {
        t: 'Experimental Cortex backend and a root chroot backend (needs su); PRoot stays the default',
        where: 'Environment page → Use Cortex to run Linux (experimental)',
        how: 'Only affects newly started Linux sessions; turn it off if something breaks'
      }
    ]
  },
  ai: {
    title: 'AI assistant and MCP',
    items: [
      {
        t: 'AI assistant that reads, searches and edits project files, with a diff first and undo for the last round',
        where: 'Menu → Tools → AI assistant; or tap the “AI” handle on the right edge of the editor',
        how: 'On first use tap “Configure model”, choose an API type and enter your API key and model name'
      },
      {
        t: 'OpenAI-compatible, Anthropic and OpenAI Responses APIs; skills, remote MCP, sub-agents, memory and web search',
        where: 'Menu at the top right of the AI assistant'
      },
      {
        t: 'Ask about selected code',
        where: 'Select code → Ask AI assistant'
      },
      {
        t: 'Local MCP server so Claude Code, Codex and other clients in Termux can read the project and its errors',
        where: 'Settings → AI & translation → Local MCP server',
        how: 'Read-only by default; enable “Allow file changes” if a client needs to edit; connection details are on the same page'
      },
      {
        t: 'Code and text translation with selectable engines; fill in missing string translations',
        where: 'Settings → AI & translation → Code translation / Text translation'
      },
      {
        t: 'Show or hide the AI handle',
        where: 'Settings → AI & translation → Show AI handle',
        how: 'Drag the handle up or down to move it'
      }
    ]
  },
  ui: {
    title: 'Settings, tools and interface',
    items: [
      {
        t: 'Settings rebuilt on AndroidX Preference, grouped by task, with search on the settings home',
        where: 'Menu → More → Settings',
        how: 'Type in the search box and tap a result to jump to it'
      },
      {
        t: 'Full-screen project properties with separate project and module pages and searchable pickers',
        where: 'Project properties dialog in the file browser → Visual editor',
        how: 'Saving keeps untouched parts of your Gradle script'
      },
      {
        t: 'Icon library: 18 icon sets plus Alibaba Iconfont import, export as SVG / PNG / Vector with licenses',
        where: 'Menu → Tools → Icon library; or the tools at the top of Home → Plugins',
        how: 'Icon library menu → More icon libraries; “Add to project” in the preview picks the module and format'
      },
      {
        t: 'Project backup and license generator',
        where: 'Menu → Tools → Project backup / Licenses'
      },
      {
        t: 'Update check: stable, beta and side-by-side builds each download their own package; release notes can be translated',
        where: 'Settings → About → Check for updates',
        how: 'Turn off “Check for updates on launch” if you prefer'
      },
      {
        t: 'Larger memory for AIDE Plus (Android 11+)',
        where: 'Settings → Diagnostics & lab'
      }
    ]
  }
}
