---
id: bind-directive
title: l-bind Directive
---

> Note: The shorthand property for `l-bind` is `:`

`l-bind` changes the value of an attribute based on the expression. If the value is a boolean, the attribute will be conditionally rendered.

**Syntax:** `<button l-bind:[attribute]="[expression]">...</button>`

**Example:** `<button l-bind:title="key">...</button>`

---

**`l-bind` for classes**

`l-bind` also allows you to bind classes. To bind classes, provide an object literal to the expression, where the key is the class and the value is the boolean conditional.

**Example:** `<div l-bind:class="{ container: key }">...</div>`

---

**`l-bind` for styles**

`l-bind` also allows you to bind styles. To bind styles, provide an object literal to the expression, where the key is the the name of the style and the value is the value of the style.

**Example:** `<p l-bind:style="{ color: key }">...</p>`

---

**`l-bind` for multiple attributes**

`l-bind` also supports object literal syntax for binding several attributes that are not styles or classes.

**Example:** `<button l-bind="{ hidden: true, title: 'Hello World' }">...</button>`
