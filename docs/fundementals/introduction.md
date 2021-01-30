---
id: introduction
title: Introduction
---

> Make sure you have [installed Lucia](/docs/fundementals/installation) on to your project.

To pickup Lucia quickly, you should understand how Lucia operates. Lucia requires markup logic to be containerized inside directives, which contain JavaScript expressions with state passed as global variables.

**Directive Syntax**: `l-directive:modifier.property="expression"`.

| Directive                                     | Description                                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`l-state`](/docs/directives/state-directive) | Declares and initializes a new component scope.                                         |
| [`l-text`](/docs/directives/text-directive)   | Works similarly to `l-bind`, but will update the `textContent` of an element.           |
| [`l-html`](/docs/directives/html-directive)   | Works similarly to `l-bind`, but will update the `innerHTML` of an element.             |
| [`l-if`](/docs/directives/if-directive)       | Conditionally renders an element, completely removing an element from the DOM.          |
| [`l-on`](/docs/directives/on-directive)       | Attaches an event listener to the element. Executes JavaScript expression when emitted. |
| [`l-bind`](/docs/directives/bind-directive)   | Sets the value of an attribute to the result of a JavaScript expression.                |
| [`l-for`](/docs/directives/for-directive)     | Create new DOM nodes for each item in an array.                                         |
| [`l-model`](/docs/directives/model-directive) | Adds "two-way data binding" to an element. Keeps input element in sync with state.      |

Lucia also provides special properties you can access inside directive expressions:

| Property | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `$el`    | The element the directive is attached to.                             |
| `$event` | The event object of an event listener.                                |
| `$emit`  | Create and dispatch a custom event. `$emit('eventName', { options })` |