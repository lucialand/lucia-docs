---
id: model-directive
title: l-model Directive
---

`l-model` allows the value of the input element will be kept in sync with the value of the state property of the component, allowing two-way binding. When the input is changed, `l-model` automatically detects the values of text inputs, checkboxes, radio buttons, textareas, selects, and multiple selects.

> Note: `l-model` will automatically attempt to coerce the type of the value to the same type of the state property value.

**Syntax:** `<input type="text" l-model="[prop]">`

**Example:** `<input type="text" l-model="key">`

---

**`.debounce` property**

The `debounce` property prevents any action regarding the event handler until the input is unfocused. This can be useful if you want to wait for the input to be given before updating / sending a Ajax request.
