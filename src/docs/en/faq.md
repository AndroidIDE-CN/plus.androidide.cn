# FAQ

## Why is the source code no longer public?

Some parties used this code in violation of AGPLv3 and hardened their DEX files with VMP to avoid publishing source. The project stopped publishing source code, and the GitHub repository now only hosts APK releases. Derivatives of the historical AGPL versions must still publish their source, credit the original and keep the AGPLv3 license.

## What’s the difference between the APKs on the download page?

They are the same release with different package names and can be installed side by side. Pick the recommended `io.github.zeroaicy.aide` unless you want to keep an older build or test new features.

## Downloads are slow

Switch the download source on the download page, or get the APK from the QQ group. Check the SHA-256 after downloading.

## The build runs out of memory

Newer releases rewrote R class generation and DEX merging after AGP, which fixes this for most projects. If it still happens, disable protection plugins you don’t need, or update to the latest release.

## Dependencies fail to download

- Check that the Maven repositories are reachable from your network.
- Unreachable repositories are skipped automatically; add a working mirror to `repositories`.
- Opening a project downloads missing dependencies before analysis, so wait for it to finish.

## How do I report a problem?

- [GitHub Issues](https://github.com/AndroidIDE-CN/AIDE-Plus/issues)
- QQ groups 487145957 and 1002980489
- [QQ channel](https://pd.qq.com/s/auq589py2)

Include your AIDE Plus version, device model, Android version and steps to reproduce.
