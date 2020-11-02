---
id: formInputBindings
title: Form Input Bindings
---

```html
<div l-use="FormInputBindings">
  <input l-model="message" />
  <p l-text="message"></p>
</div>
```

```javascript
Lucia.use('FormInputBindings', {
  message: 'Nothing submitted yet',
});
```
