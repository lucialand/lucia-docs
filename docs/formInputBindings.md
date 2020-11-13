---
id: formInputBindings
title: Form Input Bindings
---

Lucia also supports two-way binding through the `l-model` directive, which is a prebuilt setter to a value for `l-on:input`.

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
