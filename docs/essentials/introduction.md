---
id: introduction
title: Introduction
---

Lucia is a tiny JavaScript (UMD compatible) library that serves as a bridge between vanilla JavaScript and Vue. Some features of Lucia are:

- **Declarative**: Lucia provides a declarative API similar to Vue/Alpine to create views, making development predictable and intuitive through markup-centric code.
- **Reactive**: When the view is changed, the internal reference Virtual DOM will automatically react and will update and render the new view in realtime.
- **Lightweight**: Lucia is extremely light (~3kb min+brotli) and performant as it does not use a traditional Virtual DOM, rather it renders directives only if necessary by skipping static nodes through selectors.

## Getting Started

:::tip
Make sure you have [installed Lucia](/docs/essentials/installation) on to your project.
:::

To pickup Lucia quickly, you should understand how Lucia operates. Lucia requires markup logic to be containerized inside directives, which contain JavaScript expressions with state included.

| Directive                              | Description                                                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------- |
| [`l-init`](/docs/essentials/componentScope)       | Declares and initializes a new component scope.                                         |
| [`l-use`](/docs/essentials/componentScope)        | Declares a new component scope that needs manual initialization.                        |
| [`l-text`](/docs/essentials/declarativeRendering) | Works similarly to `l-bind`, but will update the `textContent` of an element.           |
| [`l-html`](/docs/essentials/declarativeRendering) | Works similarly to `l-bind`, but will update the `innerHTML` of an element.            |
| [`l-if`](/docs/essentials/conditionals)           | Toggles `display: none;` on the element depending on expression (true or false).        |
| [`l-on`](/docs/essentials/eventHandling)          | Attaches an event listener to the element. Executes JavaScript expression when emitted. |
| [`l-bind`](/docs/essentials/attributeBinding)     | Sets the value of an attribute to the result of a JavaScript expression.                |
| [`l-join`](/docs/essentials/joiningItems)         | Create new DOM nodes for each item in an array.                                         |
| [`l-model`](/docs/essentials/formInputBindings)   | Adds "two-way data binding" to an element. Keeps input element in sync with view data.  |

## Clicker Game Example

Below is an extremely simple implementation of a clicker game using Lucia, utilizing zero JavaScript.

```html
<div l-use="{ count: 0 }">
  <button l-text="count" l-on:click="++count">0</button>
</div>
```

View the [live example here](https://codepen.io/aidenybai/pen/jOrXdKj).
