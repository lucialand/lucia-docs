---
id: introduction
title: Introduction
---

Lucia is a tiny JavaScript library for building web apps.

- **Declarative:** Lucia provides a declarative API similar to Vue/Alpine to create views, making development predictable and intuitive through markup-centric code.
- **Reactive:** When the view is changed, the internal reference Virtual DOM will automatically react and will update and render the new view in realtime.
- **Lightweight:** Lucia is extremely light and performant as it does not use a traditional Virtual DOM, rather it renders directives only if necessary by skipping static nodes through element references.

![TravisCI Build](https://badgen.net/travis/aidenybai/lucia?color=7460E1&labelColor=1D1E32&style=flat-square&label=build) ![Code Size](https://badgen.net/badgesize/brotli/https/unpkg.com/lucia?color=7460E1&labelColor=1D1E32&style=flat-square&label=size) ![NPM Version](https://img.shields.io/npm/v/lucia?color=7460E1&labelColor=1D1E32&style=flat-square) ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?color=7460E1&labelColor=1D1E32&style=flat-square) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=7460E1&labelColor=1D1E32&style=flat-square) ![Code Coverage](https://img.shields.io/coveralls/github/aidenybai/lucia?color=7460E1&labelColor=1D1E32&style=flat-square)

## Getting Started

:::tip
Make sure you have [installed Lucia](/docs/essentials/installation) on to your project.
:::

To pickup Lucia quickly, you should understand how Lucia operates. Lucia requires markup logic to be containerized inside directives, which contain JavaScript expressions with state included.

| Directive                                       | Description                                                                             |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`l-init`](/docs/essentials/componentScope)     | Declares and initializes a new component scope.                                         |
| [`l-use`](/docs/essentials/componentScope)      | Declares a new component scope that needs manual initialization.                        |
| [`l-text`](/docs/essentials/textInterpolation)  | Works similarly to `l-bind`, but will update the `textContent` of an element.           |
| [`l-html`](/docs/essentials/textInterpolation)  | Works similarly to `l-bind`, but will update the `innerHTML` of an element.             |
| [`l-if`](/docs/essentials/conditionals)         | Toggles `display: none;` on the element depending on expression (true or false).        |
| [`l-on`](/docs/essentials/eventHandling)        | Attaches an event listener to the element. Executes JavaScript expression when emitted. |
| [`l-bind`](/docs/essentials/attributeBinding)   | Sets the value of an attribute to the result of a JavaScript expression.                |
| [`l-join`](/docs/essentials/joiningItems)       | Create new DOM nodes for each item in an array.                                         |
| [`l-model`](/docs/essentials/formInputBindings) | Adds "two-way data binding" to an element. Keeps input element in sync with view data.  |

## Clicker Game Example

Below is an extremely simple implementation of a clicker game using Lucia, utilizing zero JavaScript.

```html
<div l-use="{ count: 0 }">
  <button l-text="count" l-on:click="++count">0</button>
</div>
```

View the [live example here](https://codepen.io/aidenybai/pen/jOrXdKj).
