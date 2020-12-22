---
id: eventHandling
title: Event Handling
---

You can attach event handlers to elements, limited to `.on<event>` handler events using the `l-on` directive. Some of these include `onclick`, `onkeypress`, and `onsubmit`. More details about events can be found [on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers).

```html
<div l-use="EventHandlers">
  <button l-on:click="this.announce()" l-text="this.message"></button>
</div>
```

```javascript
Lucia.use('EventHandlers', {
  message: 'Hello world!',
  announce() {
    alert(this.message);
  },
});
```

## Event Properties

You can also attach specific properties to event handler directives by appending `.prop`. Supported properties are: `.stop`, which invokes `.stopPropogation()` on the Event, and `.prevent`. which invokes `.preventDefault()` on the Event.

```html
<div l-state="{ notSubmitted() { alert('Overrided') } }">
  <form l-on:submit.prevent="this.notSubmitted()">
    <button type="submit">Submit</button>
  </form>
</div>
```
