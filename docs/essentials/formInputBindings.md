---
id: formInputBindings
title: Form Input Bindings
---

Lucia also supports two-way binding through the `l-model` directive, which is a prebuilt setter to a value for `l-on:input` and `l-bind:value`. This can be important if you need to update something external, but also change the input value if needed.

If you want to debounce the input, or only change when the input is defocused, use `l-model.debounce` instead.

```html
<div l-state="{ message: 'Nothing submitted yet' }">
  <input l-model="message" />
  <p l-text="message"></p>
</div>
```
