# Getting started

AIDE Plus is an IDE that runs on Android. You can write, build and install Android apps directly on a phone or tablet.

## 1. Install

1. Open the [download page](/download) and get the APK marked “Recommended” from the latest release.
2. Allow your browser or file manager to “Install unknown apps” in system settings.
3. Open the APK to install it.

> Newer releases ship several APKs with different package names, such as `io.github.zeroaicy.aide`, `io.github.zeroaicy.aide.beta` and `io.github.zeroaicy.aide1`. They can be installed side by side. Most people only need the recommended one.

## 2. Initial setup

On first launch, the setup wizard walks you through:

| Step | What it does |
| --- | --- |
| Terms | Read and accept the terms of use |
| Permissions | Grant storage and other required permissions |
| Build tools | Install the tools needed to build |
| Basic settings | Pick a theme, editor options and more |

You can run the wizard again later from the home menu.

## 3. Home screen

The home screen has three tabs: **Projects**, **Plugins** and **Share**.

- **Projects**: recent projects. The floating button creates a project, opens a local one or clones from Git.
- **Plugins**: toggles and details for built-in features and third-party plugins.
- **Share**: browse projects shared by the community and import them.

To open the editor directly on launch, enable “Open editor on launch” in settings. The “Home” item in the editor menu brings you back.

## 4. Your first build

1. Create an Android app project from the Projects tab.
2. Wait for dependencies to download and code analysis to finish.
3. Press Run in the toolbar. The APK is installed when the build finishes.

You can follow the build in the build panel. See [Debugging and Logcat](/docs/debug-logcat).
