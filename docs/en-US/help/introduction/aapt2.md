---

title: AAPT2

---

# Android Asset Packaging Tool 2

:::tip Note

**AAPT2** is enabled by default as Google has deprecated **AAPT**.

:::

**AAPT2** (Android Asset Packaging Tool 2) is a tool for handling and packaging resource files (such as layouts, images, strings, etc.) in Android applications. It is the upgraded version of **AAPT** (Android Asset Packaging Tool), designed to improve the efficiency and flexibility of resource packaging. AAPT2 is part of the **Android Gradle Plugin** and is used for **compiling**, **packaging**, and **optimizing** Android application resources.

## **Key Features of AAPT2:**

1. **Resource Compilation**
   - AAPT2 compiles the application's **resource files** (such as XML files, images, audio files) and packages them into APK or AAB files.

2. **Incremental Compilation**
   - AAPT2 introduces incremental compilation, where only modified resources are recompiled, significantly speeding up the build process.

3. **Resource Optimization**
   - AAPT2 optimizes the final APK or AAB size by removing unused resources.

4. **Support for More Complex Resource Structures**
   - AAPT2 better handles complex **resource types**, such as **multi-language and resolution-specific image resources**, ensuring they are properly packaged and managed.

5. **Error Handling and Diagnostics**
   - Unlike AAPT, AAPT2 provides better **error messages** and **diagnostic information**, making it easier for developers to handle resource-related errors.

## **Differences Between AAPT2 and AAPT:**

| **Feature**                | **AAPT**                      | **AAPT2**                          |
|----------------------------|-------------------------------|-------------------------------------|
| **Performance**             | Slower, processes resources individually | Faster, supports incremental compilation |
| **Incremental Compilation** | Not supported                 | Supports incremental compilation, improving build speed |
| **Error Handling**          | Limited error messages        | Detailed error messages, easier to debug |
| **Parallel Processing**     | Not supported                 | Supports parallel resource processing, improving efficiency |
| **Compatibility**           | Supports more legacy versions | Supports modern Android build processes |
| **Generated Resource Files**| Generates `.apk` files        | Generates `.ap_` files, supports AAB packaging |

