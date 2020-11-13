---
id: declarativeRendering
title: Declarative Rendering
---

Lucia allows you to set the `innerHTML` and the `textContent` of an element with `l-html` and `l-text` respectively.

```html
<div l-use="DeclarativeRendering">
  <p l-text="message"></p>
  <p l-html="markupMessage"></p>
</div>
```

```javascript
Lucia.use('DeclarativeRendering', {
  message: 'Hello World!',
  markupMessage: '<span>Hello World with Markup!</span>',
});
```
