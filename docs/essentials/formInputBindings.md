---
id: formInputBindings
title: Form Input Bindings
---

Lucia also supports two-way binding through the `l-model` directive, which is a prebuilt setter to a value for `l-on:input` and `l-bind:value`. This can be important if you need to update something external, but also change the input value if needed.

```html
<div l-init="{ message: 'Nothing submitted yet' }">
  <input l-model="this.message" />
  <p l-text="this.message"></p>
</div>
```
