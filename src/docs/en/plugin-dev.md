# Plugin development

AIDE Plus can import third-party plugins (`.aplug` packages). A plugin can add file previews, editor previews, Markdown syntax and styles, and `.class` decompiler engines. There are two kinds:

| Kind | Good for | Needs compiling | Host API |
|---|---|---|---|
| **Lua plugin** | File previews, editor previews, Markdown styles and scripts | No, just zip it | 2 |
| **Java plugin** | All of the above, plus new Markdown syntax, decompilers and native views | Yes (javac + d8) | 1 and up |

Use Lua for a quick preview or style. Use Java when you need commonmark syntax extensions or native Android views.

## Installing and managing

- Import: **Home → Plugins → Import plugin**, then pick the `.aplug` file. AIDE Plus shows the plugin details and the file's SHA-256 before you confirm.
- Manage: tap a plugin under **Installed** to open its details. You can disable or uninstall it, read its log, and see what it provides (every item it registered).
- Upgrade: import a package with the same `id`. The dialog shows the version change, and the old version is disabled before it is replaced.

> Plugins run inside the AIDE Plus process with all of its permissions, so they can read and change your projects and files. Only install plugins from sources you trust.

## Package format

An `.aplug` file is a zip with these files at its root:

| File | Description |
|---|---|
| `aide-plugin.json` | The manifest, at most 64 KB |
| `classes.dex` | Java plugin code (built with d8, `--min-api 26`). Not needed for Lua plugins |
| `*.lua` | Lua plugin scripts. The manifest's `lua` field names the entry script; others load with `require` |

## The manifest: aide-plugin.json

```json
{
  "id": "com.example.hello",
  "name": "Hello",
  "version": "1.0",
  "versionCode": 1,
  "author": "you",
  "homepage": "https://example.com",
  "description": "Default (English) description",
  "descriptions": { "zh-CN": "中文说明" },
  "lua": "main.lua",
  "minHostApi": 2
}
```

| Field | Description |
|---|---|
| `id` | Required. Package-name format, globally unique, keep it the same across versions |
| `name`, `version`, `versionCode` | Display name, version name and version number |
| `author`, `homepage` | Author and home page. The home page must use `https://` |
| `description` | Default (English) description |
| `descriptions` | Optional descriptions by language tag, such as `zh-CN`, `de`, `pt`. When the UI language is missing, the plugin page offers to translate |
| `entry` | Java entry class. It implements `io.github.zeroaicy.aide.plugin.AidePlugin` and has a no-argument constructor |
| `lua` | Lua entry script. With it, `entry` and `classes.dex` are not needed |
| `minHostApi` | Required host API version. AIDE Plus currently provides 2; Lua plugins use 2 |

## Lua plugins

### A plugin in three steps

1. Create a folder with `aide-plugin.json` (containing `"lua": "main.lua"` and `"minHostApi": 2`) and `main.lua`.
2. Zip the files so they sit at the root of the archive (no extra folder level), and rename it to `.aplug`:

   ```bash
   zip -r hello.aplug aide-plugin.json main.lua lib/
   ```

3. Import it from **Home → Plugins → Import plugin**. To update, zip again and import again.

### Runtime

- The interpreter is [LuaJ](https://github.com/luaj/luaj) 3.0.1 (Lua 5.2). The standard library is available; `os.exit` is disabled.
- `luajava` is available for calling Android and Java APIs.
- `require "lib.ini"` loads `lib/ini.lua` from the package.
- `print` writes to the plugin log. A plugin's Lua code runs serially; previews are called on a background thread.

### The global table aide

| Member | Description |
|---|---|
| `aide.id`, `aide.version` | Plugin id and version |
| `aide.hostApi` | Host API version |
| `aide.locale` | UI language tag, such as `zh-CN` |
| `aide.dataDir` | The plugin's own data folder, deleted on uninstall |
| `aide.context` | Application Context (a luajava object) |
| `aide.log(...)` | Writes to the log shown on the plugin details page and in the AIDE Plus log |
| `aide.toast(text)` | Shows a short toast on the main thread |
| `aide.markdown{ id, css, js }` | Adds styles and page scripts to the Markdown preview |
| `aide.filePreview{ id, extensions, render, priority, previewText }` | Registers a file preview |
| `aide.editorPreview{ id, extensions, title, render, priority }` | Registers an editor preview |
| `aide.onUnload(function)` | Called before the plugin is disabled or uninstalled |

- **File preview**: when a file with a matching extension opens, `render(path, text, name, entry)` returns HTML. A fragment is wrapped in the app's styles; a full page is shown as is. `entry` is the entry name inside an archive, or `nil` for files on disk. `priority` defaults to 150, above the built-in previews. With `previewText = true`, text files open in the preview instead of the editor.
- **Editor preview**: a preview button appears at the top right of the editor. `text` in `render(path, text)` is the editor's current content, unsaved changes included, and the preview refreshes after edits.
- **Markdown**: `css` is added to every Markdown preview; `js` only runs on pages that allow scripts.

Preview pages allow scripts but block network access. Links open in the system browser only when tapped (http and https). Errors thrown by `render` show up in the preview.

### Example: an INI file preview

`aide-plugin.json`:

```json
{
  "id": "io.github.aideplus.sample.lua",
  "name": "INI Viewer (Lua)",
  "version": "1.0",
  "versionCode": 1,
  "author": "AIDE+",
  "homepage": "https://github.com/AndroidIDE-CN/AIDE-Plus",
  "description": "Previews .ini/.cfg files as tables and styles <kbd> keys in the Markdown preview.",
  "lua": "main.lua",
  "minHostApi": 2
}
```

`main.lua`:

```lua
local ini = require "lib.ini"   -- lib/ini.lua in the package parses the file and builds HTML

aide.log("loaded " .. aide.id .. " " .. aide.version .. " on host API " .. aide.hostApi)

-- File preview: open .ini / .cfg from the file list or an archive
aide.filePreview {
  id = "sample.lua.ini-file",
  extensions = { "ini", "cfg" },
  render = function(path, text, name, entry)
    return ini.html(text, name)
  end,
}

-- Editor preview: the preview button while editing .ini, refreshed after edits
aide.editorPreview {
  id = "sample.lua.ini-editor",
  extensions = { "ini", "cfg" },
  title = "INI",
  render = function(path, text)
    return ini.html(text, path and path:match("[^/]+$") or "INI")
  end,
}

-- Markdown: style <kbd> keys
aide.markdown {
  id = "sample.lua.kbd",
  css = "kbd{display:inline-block;padding:1px 6px;border:1px solid #9e9e9e;border-bottom-width:2px;border-radius:4px;font:12px monospace}",
}

aide.onUnload(function()
  aide.log("unloaded")
end)
```

Escape `&`, `<`, `>` and `"` in the HTML that `render` returns, so file content is not read as markup.

## Java plugins

### The entry class

```java
public final class HelloPlugin implements AidePlugin {
    @Override
    public void onLoad(PluginContext context) {
        context.registerMarkdownExtension(new MyMarkdownExtension());   // Markdown syntax and styles
        context.registerEditorPreview(new MyEditorPreviewProvider());   // editor preview
        context.registerFilePreview(new MyPreviewProvider());           // file preview
        context.registerDecompiler(new MyDecompiler());                 // .class decompiler
        context.log("loaded");
    }

    @Override
    public void onUnload() {
        // Stop your threads and close files; registrations are removed by the host
    }
}
```

- `onLoad` runs on the main thread (when Home or the editor starts, or right after import or enable). Move slow work to your own thread.
- Registered ids must not clash with existing ones, built-ins included, or loading fails.
- `context.getDataDir()` is the plugin's own data folder, deleted on uninstall. `context.getContext()` is the application Context; don't hold on to an Activity.
- `context.log(message)` and `context.log(message, error)` write to the plugin log.

### Extension points

| Method | Interface | Purpose |
|---|---|---|
| `registerMarkdownExtension` | `io.github.zeroaicy.aide.markdown.MarkdownExtension` | New syntax through commonmark extensions, plus styles and scripts per document |
| `registerEditorPreview` | `io.github.zeroaicy.aide.editorpreview.EditorPreviewProvider` | The preview at the top right of the editor, read-only or writing edits back |
| `registerFilePreview` | `io.github.zeroaicy.aide.viewer.PreviewProvider` | Inline previews for non-code files and archive entries |
| `registerDecompiler` | `io.github.zeroaicy.aide.decompiler.Decompiler` | Decompiles .class files; listed under **Settings → Code & compiler → Navigation & sources** |

If you only need HTML output, Java plugins can use the same HTML previews as Lua: `viewer.HtmlPreviewContent` and `editorpreview.HtmlEditorPreview`.

**Editor preview**: `priority(file)` runs on the main thread after every edit, so keep it light (extension, file head). Return `NONE` to skip; higher values win. `create(host)` makes one `EditorPreview` per editor, implementing `view()` and `show(file)`, and optionally `textChanged`, `actions`, `hide` and `destroy`. Editable previews check `host.isEditable()` and write back with `host.replaceText(fullText)`, which marks the file modified and can be undone in the editor.

**File preview**: keep `priority(request)` light. Use `request.head()` or `request.startsWith(magic)` (up to 64 bytes) to check the file header. `create(pane, request)` returns a `PreviewContent`; do slow reads with `pane.load(owner, work, done, failed)`. Return true from `previewsText(ext)` to send a text type to the preview. At equal priority, the later registration wins.

**Markdown extension**: `syntax()` returns commonmark extensions (`Parser.ParserExtension` / `HtmlRenderer.HtmlRendererExtension`), and `contribute(page, document)` adds styles and scripts for the document. Load scripts only when the document uses them (`MarkdownPage.contains(document, NodeClass)`), and keep content readable without scripts.

**Decompiler**: implement `id()`, `displayName(context)`, `version()` and `decompile(request)`. `request.internalName` is the top-level internal name (such as `a/b/C`), and `request.classes.read(name)` returns the bytes of the class and its inner classes. Don't touch the file system yourself. The engine must run on ART using only Java APIs that Android has.

### Building and packaging

1. Compile with `javac --release 11`. Put `android.jar`, the AIDE Plus plugin API classes and commonmark 0.24.0 on the classpath. They are compile-time only; AIDE Plus provides them at runtime.
2. Build the dex with d8 at min API 26, again with the host classes only on the classpath:

   ```bash
   d8 --min-api 26 --lib android.jar --classpath <host classes> --classpath commonmark-0.24.0.jar \
      --output out/ $(find classes -name '*.class')
   ```

3. Zip `aide-plugin.json` (with `entry` set) and `classes.dex`, and rename the file to `.aplug`.

> Don't put AIDE Plus or commonmark classes into `classes.dex`. They would clash with the host.

The official sample adds `==highlight==` syntax to the Markdown preview. It registers a `MarkdownExtension` in `onLoad`, parses `==` with a commonmark custom delimiter, renders it as `<mark>`, and adds light and dark styles in `contribute`.

## Lifecycle and safety

- Plugins are installed read-only at `files/plugins/<id>/plugin.aplug` in the app's private storage (Android 14 requires dynamically loaded dex files to be read-only). Dex plugins load through a `DexClassLoader` whose parent is AIDE Plus.
- A "loading" marker is written before a plugin loads and cleared afterwards. If the app crashes while loading a plugin, that plugin is disabled on the next start and the reason is shown.
- Load errors, such as a missing entry class or an exception in `onLoad`, are recorded on the details page. Anything the plugin had registered is rolled back, and the rest of the app keeps working.
- When a plugin is disabled or uninstalled, the host removes each registration and then calls `onUnload`.

## Debugging tips

- Log generously with `aide.log` or `context.log`. The log is on the plugin details page.
- In Lua plugins, errors from `render` appear in the preview. Fix the script, zip it again and re-import.
- Write an English `description` and a `descriptions["zh-CN"]`. Users of other languages can translate it from the plugin page.
