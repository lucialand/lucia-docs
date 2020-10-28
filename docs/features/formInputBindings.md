---
id: formInputBindings
title: Form Input Bindings
---

```html
<div l-use="FormInputBindings()">
  <input l-model="message" />
  <p l-text="message"></p>
</div>
```
```javascript
function FormInputBindings() {
  return {
    message: 'Nothing submitted yet',
  };
}
```