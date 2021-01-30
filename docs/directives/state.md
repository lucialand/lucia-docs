---
id: state-directive
title: l-state Directive
---

`l-state` allows you to create component scopes with inline Javascript objects. This means you can pass state that can later be accessed in directives inside that scope.

**Syntax:** `<div l-state="[object]">...</div>`

**Example:** `<div l-state="{ key: 'value' }">...</div>`

---

**Creating components using JavaScript**

> If you are using a bundler, the `l-state` directive will not work and you are required to use this syntax. This is because `l-state` relies on document load events, meaning that it is not tree-shakable.

It is possible to create a reusable component in the JavaScript and mount it on multiple elements.

```html
<div id="app">
  <p l-text="message"></p>
</div>

<script>
  const App = Lucia.component({ message: 'Hello World' });

  App.mount('#app');
</script>
```
