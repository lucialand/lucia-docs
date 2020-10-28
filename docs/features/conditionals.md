---
id: conditionals
title: Conditionals
---

You can toggle the `display: none` CSS attribute of an element.
```html
<div l-use="Conditionals()">
  <button l-if="!show">You can't see me</button>
  <button l-if="show">You can see me</button>
</div>
```
```javascript
function Conditionals() {
  return { show: true };
}
```