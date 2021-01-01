---
id: todo
title: Todo App Example
---

Below is an extremely simple implementation of a todo app using Lucia, utilizing zero JavaScript.

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Form Input Bindings](/docs/essentials/formInputBindings)
- [Joining Items](/docs/essentials/joiningItems)

View the [live example here](https://codepen.io/aidenybai/pen/JjRrwjN).

```html
<div l-state="{ value: '', todo: [] }">
  <!-- two-way-binds `value` prop to value -->
  <input l-model="this.value" />
  <!-- captures click event, pushing current `value` to `todo` -->
  <button l-on:click="this.todo.push(this.value)">Create</button>
  <!-- joins array together -->
  <ul l-for="task in this.todo">
    <li l-text="this.task"></li>
  </ul>
</div>
```
