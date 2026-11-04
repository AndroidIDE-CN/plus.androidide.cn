# Editor and previews

> “Menu” is the main menu at the top right of the editor; the “long-press menu” is what appears when you long-press code.

## Editing aids

Each of these has its own switch in **Settings → Editor**:

| Setting | What it does |
| --- | --- |
| Indent guides | Shows indentation levels without changing the file |
| Bracket pair guides | Highlights the current level of Java/Kotlin/C/C++/JSON/JSONC brackets and XML/SVG/HTML tags |
| Smart bracket pairing | Pairs brackets and quotes, wraps selections, deletes pairs; closes XML/SVG tags and attribute quotes |
| Inline diagnostics | Shows a live error summary after the code; tap for suggestions and the full error |

The same page has fonts, auto save, async loading for large files and **Highlighting → TextMate grammars**.

The symbol bar lives in **Settings → Input & shortcuts**: 1 to 4 rows, custom symbols and snippets per language, and hardware keyboard shortcuts.

## File structure

**Menu → File structure** lists the classes, methods and fields of the current `.java`, `.kt` or `.class` file:

- Search at the top, filter by all / types / methods / fields, tap to jump.
- Java methods can show a **flowchart**, which you can copy as Mermaid.

## Navigation and usages

- **Menu → Find…** has Find usages, find in file, find in project and go to line.
- Java `native` / Kotlin `external` methods and JNI functions in C/C++ navigate to each other, and Find usages lists the other side.
- References to AIDL-generated interfaces, stubs and methods jump to the `.aidl` declaration.
- Library sources and decompiler settings are described in [Java and Kotlin](/docs/java-compiler).

## Long-press menu

Long-press code for: translate, fix, **Fix (Kotlin)**, go to, **comment preview**, view docs, **breakpoint**, plus refactorings (rename, inline variable, introduce variable, extract method) and code actions (organize imports, add try-catch, generate getters/setters and constructors, extract resource). With code selected you can also **Ask AI assistant**.

## Previews

### Compose preview

1. Open a Kotlin file with `@Preview` functions.
2. Tap the preview button at the top right of the editor to switch between source and preview.
3. Opening the preview compiles the module’s Kotlin and Java incrementally, including unsaved changes, on top of the last build. Tap a compile error to jump to its line.

Auto refresh: **Settings → Code & compiler → Compiler → Compose preview auto refresh** (refreshes 1.5 s after you stop typing). Kotlin compilation must be enabled first; see [Java and Kotlin](/docs/java-compiler).

### Markdown preview

Open a `.md` file and tap the preview button at the top right. Mermaid diagrams, KaTeX math, code highlighting, footnotes, `[TOC]` with heading links, GitHub alerts (`> [!NOTE]`), emoji shortcodes and YAML front matter are supported, all rendered offline.

### File previews

Tap a non-code file in the file browser to preview it:

| Type | Preview |
| --- | --- |
| Images, audio, video, PDF, fonts | Viewed directly, with the toolbar at the top |
| jar / aar / zip / apk | Browse and search by package; apk shows icon, name, package and version |
| CSV / TSV, JSON / YAML / TOML / properties | Table or tree, editable in place with the original format kept and undo |
| SQLite | Read-only tables |
| Certificates, keystores | Fingerprints; keystores after entering the password |
| .dex, .class | Class lists and decompiled source |
| .so, resources.arsc, binary manifest | ABI, sections and exported symbols, resource tables |
| Anything else | Hex view and searchable text with line numbers |

Turn off previews you don’t need under **Home → Plugins**.

## Layouts and manifest

- With a layout XML open, **Menu → Designer** opens the visual layout designer.
- **Menu → Manifest editor** opens the manifest editor.
