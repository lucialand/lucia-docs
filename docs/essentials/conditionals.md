---
id: conditionals
title: Conditionals
---

You can toggle the the presence or the `display: none` CSS attribute of an element using the `l-if` directive based on the return boolean. This can also be achieved using `l-bind:hidden` and assigning a boolean value to it.

```html
<div l-init="{ isVisible: true }">
  <button l-if="!this.isVisible">You can't see me</button>
  <button l-if="this.isVisible">You can see me</button>
</div>
```
