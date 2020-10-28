---
id: eventHandling
title: Event Handling
---

You can attach event handlers to elements.
```html
<div l-use="EventHandlers()">
  <button l-on:click="announce()" l-text="message"></button>
</div>
```
```javascript
function EventHandlers() {
  return {
    message: 'Hello world!',
    announce() {
      alert(this.message);
    },
  };
}
```