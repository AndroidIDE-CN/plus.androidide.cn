# Debugging and Logcat

## Build panel

The build panel keeps the latest build’s:

- Phases and progress
- Compiler output
- Error details and failure history

It appears when you press Run and can be opened from the error list after a failure; you can stop the build and copy the output.

## Logcat

AIDE Plus has two Logcat views that share the same source, filters, pause state and history:

- **Logs page**: **Menu → More → View → Logs**
- **Floating Logcat**: **Menu → More → View → Floating Logcat**, or “Open in floating window” from the logs page menu. Drag the title bar to move it and the bottom-right corner to resize; collapse it into a bubble, tap to expand, long-press to close.

The default source is “Automatic”, trying su → Shizuku → ADRT:

| Source | Notes |
| --- | --- |
| su | Needs root and reads all logs |
| Shizuku | Reads logs through Shizuku |
| ADRT | Reads logs from debug apps run from AIDE Plus, no root needed |

- Filters cover minimum level, tag, process, “only this project’s app” and rules. One rule per line, e.g. `tag:MyApp level:W,E`; prefix with `-` to exclude.
- Process and tag filters have editors with searchable value lists.
- The floating window needs the “Display over other apps” permission and works on Android 12 and later.

## ADRT debugging

ADRT is the AIDE runtime debugging component:

- It is injected only into debug variants (including `debug-aide`), never into release.
- Log injection for regular debug builds is controlled by **Settings → Build & run → Build → Enable ADRT log injection**. It is off by default; turn it on to see your app’s logs in Logcat.
- `debug` gives you logs; `debug-aide` adds breakpoints and line-by-line debugging.
- Run the generated debug app first so ADRT can connect at runtime.

### Breakpoints

Long-press a line and choose **Breakpoint**. Run the `debug-aide` variant, and the main menu offers step over, step into, step out and stop.

## Cached logs

AIDE Plus’s own logs are under **Menu → Tools → Manage cached logs** or **Settings → About → Manage cached logs**, where you can view, share or delete them, or share them all when reporting a problem.
