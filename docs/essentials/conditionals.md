---
id: conditionals
title: Conditionals
---

You can toggle the the presence or the `display: none` CSS attribute of an element using the `l-if` directive.

```html
<div l-init="{ isVisible: true }">
  <button l-if="!isVisible">You can't see me</button>
  <button l-if="isVisible">You can see me</button>
</div>
```
