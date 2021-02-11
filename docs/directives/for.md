---
id: for-directive
title: l-for Directive
---

`l-for` allows for iterative rendering, where elements are created based on the value of an array. The expression must adhere to a special syntax, which is detailed below. There can only be one child element in the scope. When referencing the `item` or `index` it must be prepended with `this.`. The children under the `l-for` element cannot be components.

**Syntax:** `(item, index) in array`

**Example:**
```html
<div l-for="(item, index) in items">
  <p l-text="this.item"></p>
</div>
```
