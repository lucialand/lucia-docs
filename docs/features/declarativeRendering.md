---
id: declarativeRendering
title: Declarative Rendering
---

Lucia allows you to set the `innerHtml` and the `textContent` of an element with `l-html` and `l-text` respectively.
```html
<div l-use="DeclarativeRendering()">
  <p l-text="message"></p>
  <p l-html="markupMessage"></p>
</div>
```
```javascript
function DeclarativeRendering() {
  return {
    message: 'Hello World!',
    markupMessage: '<span>Hello World with Markup!</span>',
  };
}
```