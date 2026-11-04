# 调试与 Logcat

## 构建流程页

构建流程是 BrowserPager 中的独立页面，会保存最近一次构建的：

- 构建阶段与进度
- 编译输出
- 错误详情与失败历史

在错误浏览器中也可以直接打开构建流程页。

## Logcat

AIDE Plus 提供两种 Logcat：BrowserPager 中的 Logcat 页面，以及可以浮在其他应用上方的悬浮 Logcat。两者共用同一份来源、过滤条件、暂停状态和历史记录。

| 来源 | 说明 |
| --- | --- |
| su | 需要 Root 权限，可以读取全部日志 |
| Shizuku | 通过 Shizuku 授权读取日志 |
| ADRT | 读取 AIDE Plus 构建的 debug 应用日志，无需 Root |

- 进程和标签过滤都有编辑框和可搜索的候选列表。
- 悬浮窗需要系统的“显示在其他应用上层”权限，兼容 Android 12 及以上版本。

## ADRT 调试

ADRT 是 AIDE 的运行时调试组件：

- 只对 debug 变体（包括 `debug-aide`）注入，release 变体不会注入。
- `debug` 变体只提供日志；`debug-aide` 变体额外提供断点等逐行调试能力。
- 先运行生成的 debug 应用，ADRT 才能建立运行时连接。
