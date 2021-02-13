---
id: special-cases
title: Special Cases
---

As we reviewed before, Lucia is purposely created to be extremely lightweight and attempts to only do work that is necessary. It also is very easy to integrate, allowing for native CDN usage. However, because of how young Lucia is, many edge cases and issues haven't been found. Here are some comprimises you can implement if issues arise. If you do find an issue, please [report it here](https://github.com/aidenybai/lucia/issues).

### Masking Uninitialized Elements

Since Lucia is primarily CDN based and does not support Single File Components (SFCs), templates cannot be precompiled, and everything is done just-in-time (JIT). This comes with the advantage of not needing a bundler and complex build processes, but results in "DOM-flashing." This effect basically is when elements are removed on render, but because the DOM loads a short period of time after, the element will be visibile for a very short amount of time.

You can mitigate this by using the [`l-mask`](/docs/directives/mask-directive), which when a style is applied, it will not show and fix this issue.

### Broken Dependencies and Force Render

Lucia tries its best to automagically compile the necessary dependencies for every component and dynamic node, however there are some edge cases that could occur. This means if a prop is changed it could be possible that it is not rendered. If this occurs, use the `$render()` magic property, which force renders all dynamic nodes.