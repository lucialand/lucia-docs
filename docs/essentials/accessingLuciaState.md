---
id: accessingLuciaState
title: Accessing Lucia State
---

You can also access Lucia state data if you capture the return value of `Lucia.use`. a Lucia component instance is made up of `<App>.vdom`, which contains the Virtual DOM reference, as well as `<App>.view`, which contains the view state of the application.

```html
<div l-use="App">
  <p l-text="message"></p>
</div>
```

```javascript
const App = Lucia.use('App', {
  message: 'Hello World',
});

App.view.message = 'Hello Foo!';
```
