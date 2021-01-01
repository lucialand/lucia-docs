---
id: installation
title: Installation
---

Lucia is intentionally made to support multiple forms of installation, giving the developer the freedom to use Lucia in their build processes.

There are two supported ways to install Lucia:

1. [Import CDN bundle](#cdn)
2. [Install via npm](#npm)

## Version

Latest version: ![NPM Version](https://img.shields.io/npm/v/lucia?color=7460E1&labelColor=1D1E32&style=flat-square)

Expanded releases and commits are available on the [GitHub](https://github.com/aidenybai/lucia/releases)

## CDN

Lucia is currently is installable through a CDN and also supports UMD (Node, Browser, Isomorphic/Universal). Put this within your `<head>` tags in html.

```html
<script src="https://unpkg.com/lucia"></script>
```

Generally if you're going to be using Lucia long term you should specify a specific version number as to not inherit breaking changes unknowingly.

## npm

Another option is installing via if you are using a module bundler such as [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org), or [Parcel](https://parceljs.org/). It's currently the recommended installation method when building large scale applications.

```sh
npm install lucia
```

You can then import it directly, or specify the exact build you want.

```js
// ES Module
import * as Lucia from 'lucia/dist/lucia.esm';
// CommonJS
const Lucia = require('lucia/dist/lucia.cjs');
```

## Legacy (ES5) builds

Lucia by default provides `esnext` builds under `/dist`. If you want to access `es5` builds, access under `/dist/legacy`. You can visualize the file structure by [going to the unpkg file explorer](https://unpkg.com/browse/lucia@0.3.8/dist/).
