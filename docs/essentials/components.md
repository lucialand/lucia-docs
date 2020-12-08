---
id: components
title: Components
---

:::tip
If you are using the CommonJS or ES Module builds of Lucia, there is no automatic initialization. Refer to [manually initializing Lucia](#manual-initialization).
:::

Lucia allows you to create component scopes with inline Javascript objects with the `l-init` directive. This means you can pass view data that can later be accessed in directives inside that scope, and will automatically be initialized on the `DOMContentLoaded` event.

```html
<div l-init="{ message: 'Hello World' }">
  <p l-text="this.message"></p>
</div>
```

## Manual Initialization

By default, Lucia runs a search of all elements with the `l-init` directive and automatically initializes them. If you do not want components to be initialized immediately, you can also use the manual initiation using JavaScript with the `l-use` directive and run `Lucia.init()`.

```html
<div l-use="{ message: 'Hello World' }">
  <p l-text="this.message"></p>
</div>
```

```js
Lucia.init();
```

If you need to access [Lucia's state](/docs/essentials/accessingLuciaState), use the `createApp` and `mount` methods. Declaring a Lucia scope in JavaScript automatically initializes it, so if you want initialize at a later time, prepare the view object beforehand.

```html
<div id="HelloWorld">
  <p l-text="this.message"></p>
</div>
```

```js
const state = Lucia.createApp({ message: 'Hello World' });

console.log(state);

state.mount('#HelloWorld'); // Pass a selector or element reference
```

## Custom Components

You can also create custom components you use in your component scope. Any arguments after the view are valid components and will be used if used in the HTML. For the template, a callback must be passed. Note that there can only be one root node.

The parameters executed on the callback are `children`, which contain the incapsulated code inside the custom component tags.

```html
<div id="HelloWorld">
  <Message l-text="this.message + 'World'">Default Text</Message>
</div>
```

```js
const app = Lucia.createApp({ message: 'Hello World' });

app.component('Message', ({ children }) => {
  return `<p>${children}</p>`;
});

app.mount('#HelloWorld');
```
