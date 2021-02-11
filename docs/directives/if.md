---
id: if-directive
title: l-if Directive
---

You can toggle whether an element is rendered or not based on the `l-if` directive expression. If you want to change the `display: none` CSS attribute of an element instead, use the [`l-bind`](/docs/directives/bind-directive) directive. The children under the `l-if` element cannot be components.

**Syntax:** `<p l-if="[expression]">...</p>`

**Example:** `<p l-if="true">You can see me</p>`
