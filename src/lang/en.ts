import features from './features.en'

export default {
  menu: {
    home: 'Home',
    feature: 'Features',
    docs: 'Docs',
    download: 'Download',
    about: 'About Us',
    color: {
      preset: "Preset Colors",
      custom: "Custom Color",
      mono: "Black & white (default)"
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
    intro: 'AIDE Plus rewrites the build system, language support and toolchains of AIDE. Implemented features by area, with where to open each one and how to use it (based on the 2.3.5.0 UI).',
    plannedTitle: 'Planned',
    planned: [
      'More completion (LSP)',
      'Apks / AAB generation'
    ],
    filterAll: 'All',
    search: 'Search features',
    noMatch: 'No matching features',
    where: 'Where',
    how: 'How',
    count: '{n} features',
    cat: features
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
      'home-plugins': 'Home, plugins and sharing',
      'plugin-dev': 'Plugin development',
      'project-build': 'Projects and builds',
      'java-compiler': 'Java and Kotlin',
      'ndk-cmake': 'NDK and CMake',
      'editor-preview': 'Editor and previews',
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
