# 插件开发

AIDE Plus 支持导入第三方插件（`.aplug` 插件包），用来增加文件预览、编辑器预览、Markdown 语法与样式，以及 .class 反编译引擎。插件有两种写法：

| 类型 | 适合 | 需要编译 | 宿主 API |
|---|---|---|---|
| **Lua 插件** | 文件预览、编辑器预览、Markdown 样式与脚本 | 不需要，直接打包 | 2 |
| **Java 插件** | 以上全部，外加 Markdown 新语法、反编译引擎、自定义原生界面 | 需要（javac + d8） | 1 起 |

想快速做一个预览或样式，推荐用 Lua；需要接入 commonmark 语法或原生视图时再用 Java。

## 安装与管理

- 导入：**首页 → 插件 → 导入插件**，选择 `.aplug` 文件。安装前会显示插件信息和文件的 SHA-256，确认后安装。
- 管理：在插件页 **已安装** 中点按插件进入详情，可以停用、卸载，查看日志和“提供的功能”（插件注册的每一项）。
- 升级：再次导入相同 `id` 的插件即升级或降级，确认框会显示版本变化，旧版本先停用再替换。

> 插件运行在 AIDE Plus 进程内，拥有 AIDE Plus 的全部权限，可以读取和修改你的项目与文件。只安装来自可信来源的插件。

## 插件包格式

`.aplug` 就是一个 zip 文件，根目录包含：

| 文件 | 说明 |
|---|---|
| `aide-plugin.json` | 插件清单，不超过 64 KB |
| `classes.dex` | Java 插件的代码（d8 编译，`--min-api 26`）。Lua 插件不需要 |
| `*.lua` | Lua 插件的脚本。入口由清单的 `lua` 指定，其余脚本可用 `require` 加载 |

## 插件清单 aide-plugin.json

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

| 字段 | 说明 |
|---|---|
| `id` | 必填，包名格式，全局唯一，升级时保持不变 |
| `name`、`version`、`versionCode` | 显示名称、版本名、版本号 |
| `author`、`homepage` | 作者与主页，主页必须是 `https://` |
| `description` | 默认（英文）说明 |
| `descriptions` | 可选，按语言标签给出说明，例如 `zh-CN`、`de`、`pt`。缺少当前界面语言时，插件页会提供“翻译成界面语言” |
| `entry` | Java 插件的入口类，实现 `io.github.zeroaicy.aide.plugin.AidePlugin`，需要无参构造 |
| `lua` | Lua 插件的入口脚本。有它时不需要 `entry` 和 `classes.dex` |
| `minHostApi` | 需要的宿主 API 版本。当前 AIDE Plus 提供 2；Lua 插件写 2 |

## Lua 插件

### 三步做一个插件

1. 新建文件夹，放入 `aide-plugin.json`（含 `"lua": "main.lua"` 与 `"minHostApi": 2`）和 `main.lua`。
2. 把这些文件打成 zip（文件放在压缩包根目录，不要多套一层文件夹），扩展名改为 `.aplug`：

   ```bash
   zip -r hello.aplug aide-plugin.json main.lua lib/
   ```

3. 在 **首页 → 插件 → 导入插件** 中选择它。修改脚本后重新打包导入即可升级。

### 运行环境

- 解释器是 [LuaJ](https://github.com/luaj/luaj) 3.0.1（Lua 5.2）。标准库可用，`os.exit` 被禁用。
- `luajava` 可用，可以调用 Android / Java API。
- `require "lib.ini"` 会在插件包内查找 `lib/ini.lua`。
- `print` 写入插件日志。同一插件的 Lua 代码串行执行，预览在后台线程调用。

### 全局表 aide

| 成员 | 说明 |
|---|---|
| `aide.id`、`aide.version` | 插件 id 与版本 |
| `aide.hostApi` | 宿主 API 版本 |
| `aide.locale` | 界面语言标签，例如 `zh-CN` |
| `aide.dataDir` | 插件自己的数据目录，卸载时删除 |
| `aide.context` | 应用 Context（luajava 对象） |
| `aide.log(...)` | 写日志，显示在插件详情页与 AIDE Plus 日志中 |
| `aide.toast(text)` | 在主线程弹出短提示 |
| `aide.markdown{ id, css, js }` | 给 Markdown 预览加样式与页面脚本 |
| `aide.filePreview{ id, extensions, render, priority, previewText }` | 注册文件预览 |
| `aide.editorPreview{ id, extensions, title, render, priority }` | 注册编辑器预览 |
| `aide.onUnload(function)` | 插件停用或卸载前调用 |

- **文件预览**：打开扩展名命中的文件时调用 `render(path, text, name, entry)`，返回 HTML。返回片段时会套上与应用一致的样式，返回完整页面则原样显示。`entry` 是压缩包内的条目名，磁盘文件为 `nil`。`priority` 默认 150，高于内置预览。`previewText = true` 时，文本文件直接进预览，不进编辑器。
- **编辑器预览**：编辑命中的文件时，编辑区右上角出现预览按钮。`render(path, text)` 中的 `text` 是编辑器当前内容（含未保存的修改），编辑后自动刷新。
- **Markdown**：`css` 加到每个 Markdown 预览页，`js` 只在允许脚本的页面运行。

预览页面允许脚本、禁止联网，链接只在点按时交给系统打开 http(s)。`render` 抛出的错误会直接显示在预览中，方便排查。

### 示例：INI 文件预览

`aide-plugin.json`：

```json
{
  "id": "io.github.aideplus.sample.lua",
  "name": "INI Viewer (Lua)",
  "version": "1.0",
  "versionCode": 1,
  "author": "AIDE+",
  "homepage": "https://github.com/AndroidIDE-CN/AIDE-Plus",
  "description": "Previews .ini/.cfg files as tables and styles <kbd> keys in the Markdown preview.",
  "descriptions": { "zh-CN": "把 .ini/.cfg 文件显示为表格，并美化 Markdown 预览中的 <kbd> 按键。" },
  "lua": "main.lua",
  "minHostApi": 2
}
```

`main.lua`：

```lua
local ini = require "lib.ini"   -- 插件包内的 lib/ini.lua，负责解析并输出 HTML

aide.log("loaded " .. aide.id .. " " .. aide.version .. " on host API " .. aide.hostApi)

-- 文件预览：在文件列表或压缩包中打开 .ini / .cfg
aide.filePreview {
  id = "sample.lua.ini-file",
  extensions = { "ini", "cfg" },
  render = function(path, text, name, entry)
    return ini.html(text, name)
  end,
}

-- 编辑器预览：编辑 .ini 时右上角的预览按钮，编辑后自动刷新
aide.editorPreview {
  id = "sample.lua.ini-editor",
  extensions = { "ini", "cfg" },
  title = "INI",
  render = function(path, text)
    return ini.html(text, path and path:match("[^/]+$") or "INI")
  end,
}

-- Markdown：<kbd> 按键样式
aide.markdown {
  id = "sample.lua.kbd",
  css = "kbd{display:inline-block;padding:1px 6px;border:1px solid #9e9e9e;border-bottom-width:2px;border-radius:4px;font:12px monospace}",
}

aide.onUnload(function()
  aide.log("unloaded")
end)
```

`render` 返回的 HTML 里要自己转义文本中的 `&`、`<`、`>`、`"`，避免文件内容被当成标签。

## Java 插件

### 入口类

```java
public final class HelloPlugin implements AidePlugin {
    @Override
    public void onLoad(PluginContext context) {
        context.registerMarkdownExtension(new MyMarkdownExtension());   // Markdown 语法与样式
        context.registerEditorPreview(new MyEditorPreviewProvider());   // 编辑器预览
        context.registerFilePreview(new MyPreviewProvider());           // 文件预览
        context.registerDecompiler(new MyDecompiler());                 // .class 反编译引擎
        context.log("loaded");
    }

    @Override
    public void onUnload() {
        // 停止自己的线程、关闭文件；注册的功能由宿主自动移除
    }
}
```

- `onLoad` 在主线程调用（首页或编辑器启动时，或导入、启用后立即调用），耗时工作放到自己的线程。
- 注册的 id 不能与已有项（含内置项）相同，否则会抛出异常、插件加载失败。
- `context.getDataDir()` 是插件自己的数据目录，卸载时删除；`context.getContext()` 是应用 Context，不要长期持有 Activity。
- `context.log(message)` / `context.log(message, error)` 写入插件日志。

### 可注册的扩展

| 方法 | 接口 | 用途 |
|---|---|---|
| `registerMarkdownExtension` | `io.github.zeroaicy.aide.markdown.MarkdownExtension` | 用 commonmark 扩展增加新语法，并按文档加入样式和脚本 |
| `registerEditorPreview` | `io.github.zeroaicy.aide.editorpreview.EditorPreviewProvider` | 编辑区右上角的预览，可只读，也可编辑后写回编辑器 |
| `registerFilePreview` | `io.github.zeroaicy.aide.viewer.PreviewProvider` | 非代码文件与压缩包条目的内嵌预览 |
| `registerDecompiler` | `io.github.zeroaicy.aide.decompiler.Decompiler` | 反编译 .class，出现在 **设置 → 代码与编译 → 跳转与源码** 的反编译引擎列表中 |

只想输出 HTML 时，Java 插件也可以直接使用与 Lua 插件相同的 HTML 预览：`viewer.HtmlPreviewContent`、`editorpreview.HtmlEditorPreview`。

**编辑器预览**：`priority(file)` 在主线程、每次编辑后都会调用，只做轻量判断（扩展名、文件头），不处理时返回 `NONE`，数值大者优先。`create(host)` 为每个编辑器创建一个 `EditorPreview`，实现 `view()`、`show(file)`，按需实现 `textChanged`、`actions`、`hide`、`destroy`。可编辑的预览先用 `host.isEditable()` 判断，再用 `host.replaceText(全文)` 写回，写回会标记为已修改，可以在编辑器中撤销。

**文件预览**：`priority(request)` 只做轻量判断，需要文件头时用 `request.head()` 或 `request.startsWith(magic)`（最多 64 字节）。`create(pane, request)` 返回 `PreviewContent`，耗时读取用 `pane.load(owner, work, done, failed)` 放到后台。`previewsText(ext)` 返回 true 可以把某种文本文件改为进预览。同一优先级时后注册者优先。

**Markdown 扩展**：`syntax()` 返回 commonmark 扩展（`Parser.ParserExtension` / `HtmlRenderer.HtmlRendererExtension`），`contribute(page, document)` 按文档加入样式与脚本。脚本只在文档用到时加载（`MarkdownPage.contains(document, 节点类)`），并且在无脚本时内容也应可读。

**反编译引擎**：实现 `id()`、`displayName(context)`、`version()`、`decompile(request)`。`request.internalName` 是顶层类内部名（如 `a/b/C`），`request.classes.read(name)` 提供本类与内部类的字节，引擎不要自行访问文件系统。引擎必须能在 ART 上运行，只用 Android 已有的 Java API。

### 编译与打包

1. 用 `javac --release 11` 编译插件源码。classpath 上放 `android.jar`、AIDE Plus 的插件 API 类和 commonmark 0.24.0。这些类只参与编译，运行时由 AIDE Plus 提供。
2. 用 d8 生成 dex，最低 API 26，同样只把宿主类作为 classpath：

   ```bash
   d8 --min-api 26 --lib android.jar --classpath <宿主类> --classpath commonmark-0.24.0.jar \
      --output out/ $(find classes -name '*.class')
   ```

3. 把 `aide-plugin.json`（写明 `entry`）和 `classes.dex` 打成 zip，扩展名改为 `.aplug`。

> 不要把 AIDE Plus 或 commonmark 的类打进 `classes.dex`，否则会与宿主冲突。

官方示例插件为 Markdown 预览增加 `==高亮==` 语法：在 `onLoad` 中注册一个 `MarkdownExtension`，用 commonmark 的自定义分隔符解析 `==`，渲染成 `<mark>`，并在 `contribute` 中按明暗主题加入样式。

## 生命周期与安全

- 安装位置为应用私有目录 `files/plugins/<id>/plugin.aplug`，文件只读（Android 14 起动态加载的 dex 必须只读）。dex 插件用 `DexClassLoader` 加载，父加载器为 AIDE Plus。
- 加载插件前会写入“加载中”标记，加载完成后清除。如果应用在加载某个插件时崩溃，下次启动会自动停用该插件并显示原因。
- 找不到入口类、`onLoad` 抛出异常等加载错误会记录在插件详情中，已注册的功能会被撤销，不影响应用其它部分。
- 停用或卸载时，宿主按记录逐一移除插件注册的功能，再调用 `onUnload`。

## 调试建议

- 多用 `aide.log` / `context.log`，日志在插件详情页可以直接看到。
- Lua 插件的 `render` 出错时，错误信息会显示在预览里；改完脚本重新打包导入即可。
- 插件说明写好英文 `description` 和中文 `descriptions["zh-CN"]`，其它语言用户可以在插件页一键翻译。
