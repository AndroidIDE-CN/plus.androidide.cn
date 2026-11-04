# Java and Kotlin

## Java syntax

The default analyzer already understands part of the Java 8, 9 and 11 syntax, so everyday code needs no extra setup.

For newer Java, enable **ECJ** (the Eclipse Java compiler):

- With ECJ compilation enabled you can compile up to **Java 23**, including lambdas.
- With ECJ formatting enabled, modern Java code formats correctly.
- A custom class parser reads class files from newer Java versions.

> If you can’t find the option, search for “ECJ” or “Java” in settings.

Java projects can also use the Android API, which is handy for UI-less tools.

## Kotlin

Kotlin completion, live errors, import fixes and navigation use the AIDE Plus engine, built on the official Kotlin 2.4.20 parser, and stay smooth on large projects.

- kotlinc and KSP share one compiler, keeping the toolchain small.
- Kotlin code style can be adjusted in settings.
- Kotlin compiler versions are managed in the toolchain manager.

## Jump to source

With “Jump to source” enabled, classes from libraries and `android.jar` open their source code. Download Android platform sources in the SDK manager first; you can keep navigating inside the sources.

## Editor tips

- The symbol bar has three rows by default, with undo, redo and save.
- Code colors are customizable, and Java has semantic highlighting.
- AIDL, CMake and TOML files get completion, errors and navigation too.
- “Comment preview” in the editor menu shows rendered doc comments.
