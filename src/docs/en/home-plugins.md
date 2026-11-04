# Home, plugins and sharing

Launching AIDE Plus opens the home screen, with **Projects**, **Plugins** and **Share** at the bottom. **Menu → Home** in the editor brings you back at any time.

## Projects

The Projects tab merges your history and the projects in `AppProjects` into one list:

- Grouped by folder with pinned projects first; sort by last opened, last modified, name or path, or search.
- Each project shows its icon (`.idea/icon.svg`, launcher icon and so on), type, module count, Git branch and package name.
- **Long-press** a project or tap its more button for details, share as a zip without build output, rename and delete. The detail page can search local and remote-tracking branches.

The round button at the bottom right has three actions:

| Action | Notes |
| --- | --- |
| New project | Pick a template; Gradle templates use AGP 8.13 style (`plugins`, `namespace`, compileSdk 36) |
| Open project | Browse to a folder; when opened through the system file picker, the project is imported as a local working copy that does not sync back |
| Clone Git repository | Enter the repository URL |

> If you downloaded the old “More” templates, reinstall the built-in ones under “More” in the new project dialog.

## Plugins

Common tools such as the icon library sit at the top, followed by **Installed** and **Built-in**:

- Each plugin and each built-in category has its own entry. Tap it to toggle individual components (editor previews, file previews, Markdown extensions, decompilers), adjust related settings and see its ID, source and description.
- **Import plugin**: install a `.aplug` package. Java and Lua plugins are supported; Lua plugins can add file previews, editor previews and Markdown styles without compiling. Descriptions can be translated in one tap.
- Plugins run with all AIDE Plus permissions and can read and change your projects, so only install trusted ones. Uninstall from the plugin’s detail page.

## Share

The Share tab has **Featured** and **Discover**, with tag filters. **Import** opens the clone dialog with the repository URL filled in.

- **Featured**: projects reviewed by maintainers.
- **Discover**: public GitHub repositories with the `aide-plus-project` topic. Add the topic to your repository to appear here, no review needed.
- Anonymous GitHub search allows about 10 requests per minute; wait a moment if you hit the limit.

## Initial setup

First launch opens the setup wizard: terms → permissions → build tools → basic settings → done. Run it again from the home screen menu.

To skip the home screen: **Settings → General → Window → Open editor on launch**.
