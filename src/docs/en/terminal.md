# Terminal and AI assistant

## Built-in terminal

AIDE Plus integrates the Termux terminal:

- A full-width tab bar with tool buttons below
- 8 color schemes, extra keys that follow the terminal colors, modifier combos and key repeat
- Selection handles, search and `~/.termux` configuration
- A searchable list of links under “More”

## Environments

Manage environments under **Terminal → Environments**:

- Download the Termux bootstrap or a Linux distro, in the background, with pause and resume.
- Install several instances of the same distro, such as `ubuntu1` and `ubuntu2`.
- Rename environments, back them up as `.aide-env.tar.gz` and restore them later.
- Edit APT or pacman sources from the “Software sources” menu.

> Backups are not encrypted and may contain private keys, passwords and tokens. Only export them to a trusted location.

### One-tap Gradle environment

The environment page can set up a Gradle build environment in a Termux or Linux container, including JDK 17, the Android SDK and an aapt2 that works with newer AGP. Use it together with [Gradle command builds](/docs/project-build).

## AI assistant

Open the AI assistant from the side drawer in the editor to discuss the current project:

- It reads, searches and edits project files, shows a diff before each change, and can undo the last round.
- It works with OpenAI-compatible, Anthropic and OpenAI Responses APIs; enter your own endpoint and key.
- Skills, remote MCP, sub-agents, long-term memory and web search are supported.
- It can fill in missing string translations or run commands in the build container.
