---
id: counter
title: Counter App Example
---

Below is an extremely simple implementation of the standard counter app, often a boilerplate for many libraries. When the `-` button is clicked, then the count will decrement by 1. When the `+` button is clicked, then the count will increment by 1. The constraints of `count` is `0 < n < 9007199254740991`

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Event Handling](/docs/essentials/eventHandling)
- [Text Interpolation](/docs/essentials/textInterpolation)
- [Conditionals](/docs/essentials/conditionals)

View the [live example here](https://codepen.io/aidenybai/pen/zYKRmep).


```html
<div l-state="{ count: 0 }">
  <!-- decrements on click, does not show if `count < 0` -->
  <button l-if="this.count > 0" l-on:click="this.count--">-</button>
  <!-- displays `count` -->
  <span l-text="this.count">0</span>
  <!-- increments on click, does not show if `count > MAX` -->
  <button l-if="this.count <= Number.MAX_SAFE_INTEGER" l-on:click="this.count++">+</button>
</div>
```
