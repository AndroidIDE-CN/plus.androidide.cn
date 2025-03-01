---

title: Java Compilation

---

# Eclipse Compiler for Java

:::tip Note

Since **AIDE's original version** generates Class files on its own, it causes a lot of bugs.

**ECJ** has been added, but this feature is currently experimental and is **disabled by default**.

Please go to **Settings → Extended Settings → Labs** to enable it.

:::

## **ECJ (Eclipse Compiler for Java)**

**ECJ** is the compiler used by the **[Eclipse](https://www.eclipse.org/)** project to compile **Java** code. Its main features are as follows:

- **Supports Incremental Compilation**
- **Supports the Latest Java Versions**: ECJ often supports the latest **Java syntax features** earlier than the official **Javac**.
- **More Lenient than `Javac`**: In some cases, ECJ is more lenient than `Javac`, allowing code that doesn't fully comply with the specifications to be compiled.
