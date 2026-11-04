export default {
  menu: {
    home: 'Home',
    feature: 'Features',
    docs: 'Docs',
    download: 'Download',
    about: 'About Us',
    color: {
      preset: "Preset Colors",
      custom: "Custom Color"
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      auto: 'System'
    },
    submenu: {
      language: "Language Setting",
      theme: "Mode Setting",
      color: "Color Setting"
    }
  },
  common: {
    loading: 'Loading…',
    retry: 'Retry',
    viewOnGithub: 'View on GitHub',
    loadFailed: 'Failed to load. Check your network and try again.',
    backToTop: 'Back to top'
  },
  footer: {
    copyright: 'Copyright © 2024-{year} AndroidIDE-CN · AIDE Plus',
    madeWith: 'Release data from GitHub'
  },
  home: {
    badge: 'A complete Android IDE on Android',
    title: 'AIDE Plus',
    subtitle: 'Write, build and debug Android apps on your phone. A rewritten build system, modern Java and Kotlin, NDK/CMake, a built-in terminal and an AI assistant, all in one APK.',
    download: 'Download',
    docs: 'Read the docs',
    latest: 'Latest {version}',
    stats: {
      stars: 'Stars',
      forks: 'Forks',
      downloads: 'Downloads',
      releases: 'Releases'
    },
    highlightsTitle: 'Why AIDE Plus',
    highlights: {
      build: {title: 'Rewritten build system', desc: 'aapt2 and D8, with R class generation and DEX merging rewritten after AGP, so large projects no longer run out of memory.'},
      java: {title: 'Modern Java', desc: 'Java 8/9/11 syntax analysis by default, and Java 23 compilation with ECJ enabled.'},
      kotlin: {title: 'Kotlin engine', desc: 'Completion, live errors and navigation built on the official Kotlin 2.4.20 parser.'},
      native: {title: 'NDK and CMake', desc: 'A built-in toolchain manager installs NDK r17c to r29 and CMake 3.10.2 to 3.31.4.'},
      terminal: {title: 'Built-in terminal', desc: 'A Termux terminal and Linux distro environments that can run Gradle directly.'},
      ai: {title: 'AI assistant', desc: 'Discuss the open project with a model that can read, search and edit files, with a diff before every change.'}
    },
    stepsTitle: 'Get started in three steps',
    steps: {
      download: {title: 'Download', desc: 'Get the latest APK from the download page, served straight from GitHub.'},
      setup: {title: 'Initial setup', desc: 'On first launch, the wizard grants permissions and installs build tools.'},
      build: {title: 'Create or import', desc: 'Create a project, open a local one or clone from Git, then press Run.'}
    },
    communityTitle: 'Join the community',
    communityDesc: 'Questions, feature requests and bug reports are welcome in the QQ group, channel or GitHub Issues.'
  },
  features: {
    title: 'Features',
    intro: 'AIDE Plus rewrites the build system, language support and toolchains of AIDE. Implemented features by area:',
    plannedTitle: 'Planned',
    planned: [
      'More completion (LSP)',
      'Apks / AAB generation',
      'Visual manifest editing',
      'Vector asset import',
      'Rewritten layout preview'
    ],
    filterAll: 'All',
    search: 'Search features',
    noMatch: 'No matching features',
    cat: {
      build: {
        title: 'Build system',
        items: [
          'Optimized and rewritten build service',
          'aapt replaced by aapt2, dx replaced by D8, with D8 obfuscation',
          'R class generation and DEX grouping rewritten after AGP, so large projects no longer run out of memory',
          'ViewBinding, DataBinding, annotation processors, core library desugaring and full BuildConfig',
          'Updated manifest merger and APK resource alignment',
          'ApkSign supports v1 to v3 signatures',
          'Fixed silent install, with support for Shizuku and more installers',
          'Gradle command builds: run Gradle tasks or custom commands in Termux, Linux or the system shell'
        ]
      },
      java: {
        title: 'Java',
        items: [
          'Part of Java 8, 9 and 11 syntax in the default analyzer',
          'Java 23 compilation through ECJ (enable it in settings)',
          'Formatting of modern Java through ECJ',
          'Lambda compilation (ECJ)',
          'Custom class parser for newer class file features',
          'Java projects can use the Android API',
          'Semantic highlighting for Java'
        ]
      },
      kotlin: {
        title: 'Kotlin',
        items: [
          'Completion, live errors, import fixes and navigation by the AIDE Plus engine (official Kotlin 2.4.20 parser)',
          'kotlinc and KSP share one compiler, keeping the toolchain small',
          'Kotlin code style settings'
        ]
      },
      deps: {
        title: 'Gradle and dependencies',
        items: [
          'Rewritten Gradle parser',
          'New Maven downloader with BOM support',
          'runtimeOnly, compileOnly, libgdxNatives and exclude',
          'Visual editing and update checks for libs.versions.toml',
          'Automatic Android variant selection for multiplatform libraries',
          'Parent POM version inheritance, timestamped SNAPSHOTs and sha1 verification',
          'AndroidX as the default framework'
        ]
      },
      native: {
        title: 'NDK and CMake',
        items: [
          'CMake builds',
          'Built-in NDK / CMake manager: NDK r17c to r29, CMake 3.10.2 to 3.31.4',
          'SHA-256 verification, resumable downloads and per-version directories',
          'CMake execution permission repair, with an Android linker fallback on no-exec storage',
          'ndkVersion, buildToolsVersion, test runner and multidex in module properties'
        ]
      },
      editor: {
        title: 'Editor',
        items: [
          'More syntax highlighting and custom code colors',
          'Fixed lost completion and highlighting, plus basic syntax completion',
          'XML completion follows the project compileSdk',
          'Completion, errors and navigation for AIDL, CMake and TOML',
          'Jump to sources of libraries and android.jar',
          'Three-row symbol bar with undo, redo and save',
          'TextMate grammar management and comment preview'
        ]
      },
      debug: {
        title: 'Debugging and logs',
        items: [
          'A separate build panel with phases, progress, output and failure history',
          'BrowserPager Logcat and floating Logcat share source, pause state, filters and history',
          'Logcat sources: su, Shizuku and ADRT',
          'Process and tag filter editors with searchable lists, compatible with Android 12+',
          'ADRT injection and runtime loading for debug and debug-aide variants'
        ]
      },
      protect: {
        title: 'Signing and protection',
        items: [
          'Fixed keystore creation',
          'Build types can pick an existing signingConfigs entry',
          'StringFog, BlackObfuscator, DexVMP and DPT Shell integration',
          'Custom VM library, bridge library and loader class for DexVMP',
          'Workspace cleanup after packaging and safeguards against oversized input'
        ]
      },
      terminal: {
        title: 'Terminal and environments',
        items: [
          'Built-in Termux terminal with a full-width tab bar, 8 color schemes, extra keys and search',
          'Download the Termux bootstrap or a Linux distro as a runtime, in the background and resumable',
          'One-tap Gradle environment setup (JDK 17, Android SDK and aapt2)',
          'Rename, back up and restore environment instances'
        ]
      },
      ai: {
        title: 'AI assistant',
        items: [
          'Discuss the current project with a model in the side drawer',
          'Read, search and edit project files, with a diff first and undo for the last round',
          'OpenAI-compatible, Anthropic and OpenAI Responses APIs',
          'Skills, remote MCP, sub-agents, long-term memory and web search',
          'Fill in missing string translations'
        ]
      },
      ui: {
        title: 'Interface and tools',
        items: [
          'New UI and faster cold start',
          'Full-screen project properties with searchable pickers for SDK, Java and signing',
          'SDK manager and a unified toolchain manager',
          'Resource manager, translation editor and XML drawable preview',
          'Previews for images, archives, audio and video, PDF, SQLite, certificates and fonts',
          'Fixed in-app Git issues'
        ]
      }
    }
  },
  docs: {
    title: 'Docs',
    toc: 'Contents',
    prev: 'Previous',
    next: 'Next',
    edit: 'Found a mistake? Report it on GitHub',
    notFound: 'Document not found',
    items: {
      'getting-started': 'Getting started',
      'project-build': 'Projects and builds',
      'java-compiler': 'Java and Kotlin',
      'ndk-cmake': 'NDK and CMake',
      'debug-logcat': 'Debugging and Logcat',
      'signing-protection': 'Signing and protection',
      'terminal': 'Terminal and AI assistant',
      'faq': 'FAQ'
    }
  },
  download: {
    title: 'Download AIDE Plus',
    subtitle: 'Every package comes from GitHub Releases and stays in sync with the repository.',
    latest: 'Latest release',
    prerelease: 'Pre-release',
    publishedAt: 'Published {date}',
    downloads: '{count} downloads',
    recommended: 'Recommended',
    packageName: 'Package {name}',
    sha256: 'SHA-256',
    copy: 'Copy',
    copied: 'Copied',
    mirror: 'Download source',
    mirrors: {
      github: 'GitHub'
    },
    changelog: 'What’s new',
    history: 'Previous releases',
    showMore: 'Show release notes',
    showLess: 'Hide',
    refresh: 'Refresh',
    noAssets: 'This release has no downloadable package',
    empty: 'No release information yet',
    allReleases: 'All releases',
    source: {
      api: 'Live · GitHub API',
      cache: 'Cached · {time}',
      snapshot: 'Offline snapshot · {time} (GitHub API unavailable)'
    },
    packagesTitle: 'Which package should I download?',
    packagesDesc: 'Newer releases ship several APKs with different package names. They can be installed side by side without replacing each other. Most people should pick the recommended io.github.zeroaicy.aide; use another package name to keep an older build or try new features.',
    tipsTitle: 'Install tips',
    tips: [
      'Allow “Install unknown apps” in system settings before installing.',
      'Compare the SHA-256 after downloading to make sure the file is complete.',
      'A new version with the same package name upgrades the old one and keeps your projects.',
      'If downloads are slow, switch the download source or get the APK from the QQ group.'
    ]
  },
  about: {
    title: 'About AIDE Plus',
    intro: 'AIDE Plus is an enhanced AIDE maintained by the AndroidIDE-CN community, bringing a modern toolchain to Android developers on their phones.',
    noticeTitle: 'Source code notice',
    notice: 'Because some parties used this code in violation of AGPLv3 and hardened their DEX files with VMP to avoid publishing source, the project no longer publishes its source code; the GitHub repository only hosts APK releases. Any derivative of the historical AGPL versions must publish its modified source, credit the original and keep the AGPLv3 license.',
    membersTitle: 'Team',
    roles: {
      founder: 'Founder',
      collaborator: 'Collaborator',
      helper: 'Contributor'
    },
    communityTitle: 'Community and feedback',
    community: {
      qqGroup: 'QQ group',
      qqChannel: 'QQ channel',
      github: 'GitHub repository',
      issues: 'Issues'
    },
    thanksTitle: 'Thanks',
    thanksDesc: 'AIDE Plus borrows from or integrates these open source projects:',
    thanks: {
      gradle: 'Gradle edition (Android Studio build)',
      androidide: 'Parts of the code',
      codeassist: 'Parts of the code',
      termux: 'Integrated terminal',
      aidepro: 'UI inspiration',
      ndk: 'NDK installer',
      repair: 'Deobfuscation'
    }
  }
}
