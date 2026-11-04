# Terminal and AI assistant

## Built-in terminal

Open it with **Menu → Tools → Show terminal**, or long-press a folder in the file browser and choose **Open in terminal**. New sessions start in the project root.

- A full-width tab bar with tool buttons below
- 8 color schemes, extra keys that follow the terminal colors, modifier combos and key repeat
- Selection handles, search and `~/.termux` configuration
- “More” offers interrupt, text export, session diagnostics and a searchable link list

## Environments

Manage environments in **Settings → Build & run → Run → Terminal environments**: Termux packages, Linux distros (Ubuntu 22.04 / 20.04, Debian 12, Arch Linux) and the system shell.

- Downloads run in the background with pause and resume.
- Install several instances of the same distro, such as `ubuntu1` and `ubuntu2`.
- “More” next to an environment can **Rename**, **Back up** (`.aide-env.tar.gz`), **Restore a backup** and edit **Software sources** (APT or pacman).
- Experimental backends: **Use Cortex to run Linux** and a root chroot (needs su). PRoot stays the default, and the switch only affects newly started Linux sessions.

> Backups are not encrypted and may contain private keys, passwords and tokens. Only export them to a trusted location.

### One-tap Gradle environment

The environment page can set up a Gradle build environment in a Termux or Linux container, including JDK 17, the Android SDK and an aapt2 that works with newer AGP. Use it with [Gradle command builds](/docs/project-build).

## AI assistant

Open it with **Menu → Tools → AI assistant**, or tap the **AI** handle on the right edge of the editor (toggle it in **Settings → AI & translation → Show AI handle**; drag to move it). With code selected you can also choose **Ask AI assistant**.

1. On first use, tap **Configure model**, choose an API type (OpenAI-compatible, Anthropic or OpenAI Responses) and enter your API key and model name.
2. Ask questions or ask it to change code. Changes show a diff first, and the last round can be undone.
3. The page menu has history, new chat, and settings for skills, remote MCP, sub-agents, long-term memory and web search.

## Local MCP server

**Settings → AI & translation → Local MCP server** serves MCP on `127.0.0.1`, so Claude Code, Codex and other AI clients in Termux can read the current project and its errors:

- Read-only by default; turn on **Allow file changes** on the same page if a client needs to edit.
- Port, token and connection details are on the same page.

## Translation

**Settings → AI & translation** also has code translation (for completion hints) and text translation with selectable engines. Long-press code and choose **Translate** to use it.
