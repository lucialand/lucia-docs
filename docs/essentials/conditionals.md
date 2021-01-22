---
id: conditionals
title: Conditionals
---

You can toggle the the presence or the `display: none` CSS attribute of an element using the `l-if` directive based on the return boolean. This can also be achieved using `l-bind:hidden` and assigning a boolean value to it.

If you want to toggle the `hidden` property of an element instead, use `l-if.hidden.`

```html
<div l-state="{ isVisible: true }">
  <button l-if="!isVisible">You can't see me</button>
  <button l-if="isVisible">You can see me</button>
</div>
```
