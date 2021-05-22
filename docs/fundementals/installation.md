---
id: installation
title: Installation
---

Lucia is intentionally made to support multiple forms of installation, giving the developer the freedom to use Lucia in their build processes.

There are two supported ways to install Lucia:

1. [Import package via CDN](#cdn)
2. [Install via npm](#npm)

### Version

Latest version: ![NPM Version](https://img.shields.io/npm/v/lucia?color=7460E1&labelColor=1D1E32&style=flat-square)

Expanded releases and commits are available on the [GitHub](https://github.com/aidenybai/lucia/releases).

### CDN

Lucia is currently is installable through a CDN and also supports UMD (Node, Browser, Isomorphic/Universal). Put this within your `<head>` tags in HTML.

```html
<script src="https://unpkg.com/lucia"></script>
```

Generally if you're going to be using Lucia long term you should specify a specific version number as to not inherit breaking changes unknowingly.

### npm

Another option is installing via if you are using a module bundler such as [Vite](https://vitejs.dev/) or [Parcel](https://parceljs.org/). It's currently the recommended installation method when building large scale applications.

> *Psst... Looking for a Vite + Lucia + TailwindCSS setup? Check [Sheesh](https://github.com/aidenybai/sheesh) out!*

```sh
npm install lucia
```
