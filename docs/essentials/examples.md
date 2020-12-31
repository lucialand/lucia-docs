---
id: examples
title: Examples
---

This documentation provides some example applications made with Lucia you can try to play with. We highly recommend you go through the essentials first and then come back to understand the code.

## Todo App Example

Below is an extremely simple implementation of a todo app using Lucia, utilizing zero JavaScript.

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Form Input Bindings](/docs/essentials/formInputBindings)
- [Joining Items](/docs/essentials/joiningItems)

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

View the [live example here](https://codepen.io/aidenybai/pen/JjRrwjN).

## Counter Example

Below is an extremely simple implementation of the standard counter app, often a boilerplate for many libraries. When the `-` button is clicked, then the count will decrement by 1. When the `+` button is clicked, then the count will increment by 1. The constraints of `count` is `0 < n < 9007199254740991`

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Event Handling](/docs/essentials/eventHandling)
- [Text Interpolation](/docs/essentials/textInterpolation)
- [Conditionals](/docs/essentials/conditionals)

```html
<div l-state="{ count: 0 }">
  <button l-if="this.count > 0" l-on:click="this.count--">-</button>
  <span l-text="this.count">0</span>
  <button l-if="this.count <= Number.MAX_SAFE_INTEGER" l-on:click="this.count++">+</button>
</div>
```

View the [live example here](https://codepen.io/aidenybai/pen/zYKRmep).

## Color Changer Example

Below is an color changer example in Lucia, when a hex color is inputed, it will change its `color` style as so.

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Form Input Bindings](/docs/essentials/formInputBindings)
- [Attribute Binding](/docs/essentials/attributeBinding)
- [Text Interpolation](/docs/essentials/textInterpolation)

```html
<div l-state="{ color: '' }">
  <input l-model="this.color" placeholder="Enter in a color or hex code" />
  <p l-bind:style="{ color: this.color }" l-text="`I am ${this.color}`"></p>
</div>
```

View the [live example here](https://codepen.io/aidenybai/pen/LYRQgvg).
