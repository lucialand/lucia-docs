---
id: accessingLuciaState
title: Accessing Lucia State
---

You can also access Lucia state data if you capture the return value of `Lucia.use`. a Lucia component instance is made up of `$vdom`, which contains the reference Virtual DOM, as well as `$view`, which contains the view state of the application.

```html
<div l-use="App">
  <p l-text="message"></p>
</div>
```

```javascript
const App = Lucia.use('App', {
  message: 'Hello World',
});

console.log(App.$view);

App.$view.message = 'Hello Foo!';
```
