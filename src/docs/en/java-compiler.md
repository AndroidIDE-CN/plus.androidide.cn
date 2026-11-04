# Java and Kotlin

## Java syntax

The default analyzer already understands part of the Java 8, 9 and 11 syntax, so everyday code needs no extra setup.

For newer Java, enable **ECJ** (the Eclipse Java compiler):

1. Open **Settings → Code & compiler → Compiler** and turn on **Enable Eclipse Compiler for Java [ecj]**.
2. Restart AIDE Plus. You can now compile up to **Java 23**, including lambdas.

ECJ only takes over analysis and compilation. Completion and navigation can use the experimental JDT engine:

| Setting | Location |
| --- | --- |
| JDT member completion | Settings → Code & compiler → Completion |
| Full JDT completion (standalone Java engine) | Settings → Code & compiler → Completion |
| JDT navigation and parameter hints | Settings → Code & compiler → Navigation & sources |
| Background code analysis | Settings → Code & compiler → Error checking |

### Formatting

**Settings → Code & compiler → Eclipse Java format** sets indentation, line width, brace position, blank lines, and comment and annotation wrapping. Enable it, then use **Menu → Format code**.

### New class parsing library

**Settings → Code & compiler → New class parsing library** reads newer class files and the Java 8 API. Restart after changing it, then run **Menu → More → Project → Refresh build**.

Java projects can also use the Android API, which is handy for UI-less tools.

## Kotlin

Kotlin completion, live errors, import fixes and navigation use the AIDE Plus engine, built on the official Kotlin 2.4.20 parser.

1. Install the Kotlin compiler in **Settings → Build & run → Native code → Toolchain manager**.
2. In **Settings → Code & compiler → Compiler**, turn on **Enable Kotlin compilation**, and **Package Kotlin stdlib automatically** if needed.
3. After a restart, `.kt` files are built.

| Setting | Location | Purpose |
| --- | --- | --- |
| Kotlin semantic completion | Code & compiler → Completion | Semantic completion, falling back to keywords |
| Kotlin live errors | Code & compiler → Error checking | Errors while editing, no build needed |
| Full check with the Kotlin compiler | Code & compiler → Error checking | Checks the whole module after you stop typing |
| Kotlin warnings in the error list / editor | Code & compiler → Error checking | Separate switches |

**Quick fixes**: long-press the error and choose **Fix (Kotlin)**. 30+ fixes cover imports, typos, initialization, types, open/override, `@Composable`, `@OptIn` and more. The info button in the error list shows suggestions and the full diagnostic.

**Code style**: **Menu → More → Format → Configure code style**.

## Jump to source

In **Settings → Code & compiler → Navigation & sources**:

- **Jump to library sources**: downloads `-sources.jar` while resolving Maven dependencies and opens real sources.
- **Show decompiled source for classes**: shows Java decompiled by the built-in CFR when no source exists (read-only, still navigable); the decompiler engine can be changed on the same page.

Sources for `android.jar` need to be downloaded first: **Settings → Code & compiler → SDK & platform data → Android SDK platforms**.

## Editor tips

See [Editor and previews](/docs/editor-preview).
