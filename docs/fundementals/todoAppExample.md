---
id: todo-app-example
title: Todo App Example
---

Below is an extremely simple implementation of a todo app using Lucia, utilizing zero JavaScript. Tasks can be added by submitting the form with the input.

### Directives used:

- [`l-state`](/docs/directives/state-directive)
- [`l-text`](/docs/directives/text-directive)
- [`l-on`](/docs/directives/on-directive)
- [`l-model`](/docs/directives/model-directive)
- [`l-for`](/docs/directives/for-directive)

View the [live example here](https://codepen.io/aidenybai/pen/JjRrwjN).

```html
<div l-state="{ value: '', todo: [] }">
  <!-- two-way-binds `value` prop to value -->
  <input l-model="value" />
  <!-- captures click event, pushing current `value` to `todo` -->
  <button @click="todo.push(value)">Create</button>
  <!-- joins array together -->
  <ul l-for="task in todo">
    <li l-text="task"></li>
  </ul>
</div>
```
