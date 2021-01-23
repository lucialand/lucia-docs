---
id: accessingLuciaState
title: Accessing Lucia State
---

:::tip
Lucia's state is mutable, but sealed to due to performance and architectural decisions. This means no key-value pairs can be created or destroyed, but it can change.
:::

You can also access Lucia state data if you capture the return value of `Lucia.component`. a Lucia component instance is made up of `<App>.ast`, which contains the abstract syntax tree of the DOM that Lucia references, `<App>.state`, which contains the component state of the application, as well as various helper properties.

```html
<div id="app">
  <p l-text="message"></p>
</div>
```

```javascript
const app = Lucia.component({ message: 'Hello World' });
const state = app.mount('#app');

state.message = 'Hello Foo!';
```

You can technically also retrive the state of a component by accessing the `__l` property of an element reference with the `l-state` directive.
