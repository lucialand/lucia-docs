---
id: state-directive
title: l-state Directive
---

`l-state` allows you to create component scopes with inline Javascript objects. This means you can pass state that can later be accessed in directives inside that scope. Components can be nested and declared inline with other directives as well.

**Syntax:** `<div l-state="[object]">...</div>`

**Example:** `<div l-state="{ key: 'value' }">...</div>`

---

**Other ways of creating components**

> If you are using a bundler, the `l-state` directive will not automatically initialize and you are required to use this syntax. This is because `l-state` relies on document load events, meaning that it is not tree-shakable.

The first way is to manually initialize the document yourself using the handy-dandy `init` method.

**Syntax:** `Lucia.init([element?])`

**Example:** `Lucia.init()`

You can also create a reusable component in the JavaScript and mount it on multiple elements. This allows for more customizability but it also means that you cannot create nested or inline components.

```html
<div id="app">
  <p l-text="message"></p>
</div>

<script>
  // Assumes a global Lucia variable is already defined
  const { component } = Lucia;
  component({ message: 'Hello World' }).mount('#app');
</script>
```
