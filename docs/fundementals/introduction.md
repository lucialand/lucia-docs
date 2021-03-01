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
| [`l-init`](/docs/directives/init-directive)   | Executes an expression when `l-state` is initialized.                                   |
| [`l-text`](/docs/directives/text-directive)   | Works similarly to `l-bind`, but will update the `textContent` of an element.           |
| [`l-html`](/docs/directives/html-directive)   | Works similarly to `l-bind`, but will update the `innerHTML` of an element.             |
| [`l-on`](/docs/directives/on-directive)       | Attaches an event listener to the element. Executes JavaScript expression when emitted. |
| [`l-bind`](/docs/directives/bind-directive)   | Sets the value of an attribute to the result of a JavaScript expression.                |
| [`l-for`](/docs/directives/for-directive)     | Create new DOM nodes for each item in an array.                                         |
| [`l-model`](/docs/directives/model-directive) | Adds "two-way data binding" to an element. Keeps input element in sync with state.      |
| [`l-mask`](/docs/directives/mask-directive)   | Is removed when an element is rendered.                                                 |

Lucia also provides special properties you can access inside directive expressions:

| Property                                             | Description                               |
| ---------------------------------------------------- | ----------------------------------------- |
| [`$el`](/docs/specialProperties/el-property)         | The element the directive is attached to. |
| [`$render`](/docs/specialProperties/render-property) | Force rerender of props.                  |
| [`$event`](/docs/specialProperties/event-property)   | The event object of an event listener.    |
| [`$emit`](/docs/specialProperties/emit-property)     | Create and dispatch a custom event.       |
