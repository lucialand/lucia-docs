---
id: accessingLuciaState
title: Accessing Lucia State
---

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
