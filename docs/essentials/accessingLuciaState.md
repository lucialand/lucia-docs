---
id: accessingLuciaState
title: Accessing Lucia State
---

You can also access Lucia state data if you capture the return value of `Lucia.createApp`. a Lucia component instance is made up of `<App>.vdom`, which contains the Virtual DOM reference, `<App>.state`, which contains the component state of the application, as well as various helper properties.

```html
<div id="app">
  <p l-text="this.message"></p>
</div>
```

```javascript
const app = Lucia.createApp({ message: 'Hello World' });

app.state.message = 'Hello Foo!';

app.mount('#app');
```
