---
id: special-cases
title: Special Cases
---

As we reviewed before, Lucia is purposely created to be extremely lightweight and attempts to only do work that is necessary. It also is very easy to integrate, allowing for native CDN usage. However, because of how young Lucia is, many edge cases and issues haven't been found. Here are some comprimises you can implement if issues arise. If you do find an issue, please [report it here](https://github.com/aidenybai/lucia/issues).

### Broken Dependencies and Force Render

Lucia tries its best to automagically compile the necessary dependencies for every component and dynamic node, however there are some edge cases that could occur. This means if a prop is changed it could be possible that it is not rendered. If this occurs, use the [`$render()`](/docs/specialProperties/render-property) special property, which force renders all dynamic nodes.
