# Debugging and Logcat

## Build panel

The build panel is a separate BrowserPager page that keeps the latest build’s:

- Phases and progress
- Compiler output
- Error details and failure history

You can also open it from the error browser.

## Logcat

AIDE Plus has two Logcat views: the BrowserPager Logcat page and a floating Logcat that stays above other apps. Both share the same source, filters, pause state and history.

| Source | Notes |
| --- | --- |
| su | Needs root and reads all logs |
| Shizuku | Reads logs through Shizuku |
| ADRT | Reads logs from debug apps built by AIDE Plus, no root needed |

- Process and tag filters have editors with searchable value lists.
- The floating window needs the “Display over other apps” permission and works on Android 12 and later.

## ADRT debugging

ADRT is the AIDE runtime debugging component:

- It is injected only into debug variants (including `debug-aide`), never into release.
- `debug` gives you logs; `debug-aide` adds breakpoints and line-by-line debugging.
- Run the generated debug app first so ADRT can connect at runtime.
