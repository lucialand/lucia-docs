---
id: render-property
title: $render Property
---

`$render` is a method that calls an internal render cycle. If props are provided, then it will force render those specific props, and if none are provided, a full rerender will occur. Generally this is not recommended, as Lucia attempts to automatically do this, but use as necessary.

**Syntax:** `$render([...props?])`

**Example:** `$render()`
