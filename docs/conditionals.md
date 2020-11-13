---
id: conditionals
title: Conditionals
---

You can toggle the the presence or the `display: none` CSS attribute of an element using the `l-if` directive.

```html
<div l-use="Conditionals">
  <button l-if="!show">You can't see me</button>
  <button l-if="show">You can see me</button>
</div>
```

```javascript
Lucia.use('Conditionals', {
  show: true,
});
```
