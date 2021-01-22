---
id: colorChanger
title: Color Changer App Example
---

Below is an color changer example in Lucia, when a hex color is inputed, it will change its `color` style as so.

### Concepts used:

- [Component Scope](/docs/essentials/components)
- [Form Input Bindings](/docs/essentials/formInputBindings)
- [Attribute Binding](/docs/essentials/attributeBinding)
- [Text Interpolation](/docs/essentials/textInterpolation)

View the [live example here](https://codepen.io/aidenybai/pen/LYRQgvg).

```html
<div l-state="{ color: '' }">
  <!-- two-way-binds `color` prop to value -->
  <input l-model="color" placeholder="Enter in a color or hex code" />
  <!-- binds color style to `color`, displays `I am {count}` -->
  <p l-bind:style="{ color }" l-text="`I am ${color}`"></p>
</div>
```
