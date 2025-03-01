---

title: Remote Project Dependency Downloader

---

# Downloading Dependencies from Maven Repository

:::tip Note

We currently support both POM and BOM dependencies.

:::

## **POM (Project Object Model)**
**POM** is the core configuration file for Maven projects, typically named `pom.xml`. It defines the project's basic information, build configurations, plugins, dependencies, and more.

## **BOM (Bill of Materials)**
**BOM** is a special type of POM file used to define a set of common version numbers to simplify dependency version management. BOM is not a regular project file but is specifically used for managing **dependency versions**.

## **Differences Between POM and BOM**

| **Feature**           | **POM**                                      | **BOM**                                      |
|-----------------------|----------------------------------------------|----------------------------------------------|
| **Definition**         | Core configuration file for the project, including dependencies, plugins, and builds | POM file used for centralized version control and dependency management |
| **Functionality**      | Defines the project's dependencies, builds, and information | Defines only the dependency version information, used for version control |
| **Dependency Management** | Includes specific dependency versions       | Only defines version numbers in `dependencyManagement` to avoid redundant version specification |
| **Standalone Usage**   | Yes                                          | No, must be used as a parent POM or referenced in another POM's `dependencyManagement` |
| **Common Use Case**    | For project-specific configuration and management | As a version control tool, shared across multiple projects for dependency versions |


