---
id: eventHandling
title: Event Handling
---

You can attach event handlers to elements, limited to `.onevent` handler events using the `l-on` directive.

```html
<div l-use="EventHandlers">
  <button l-on:click="announce()" l-text="message"></button>
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

You can also attach specific properties to event handler directives by appending `.prop`.

```html
<div l-use="EventProperties">
  <form l-on:submit.prevent="notSubmitted()">
    <button type="submit">Submit</button>
  </form>
</div>
```

```javascript
Lucia.use('EventProperties', {
  notSubmitted() {
    alert('Overrided');
  },
});
```

## `effect` Event

Lucia also provides a custom `effect` event as a callback for when the element is updated.

```html
<div l-use="EffectEvent">
  <p l-on:effect="effect()">Will alert if changed.</p>
</div>
```

```js
Lucia.use('EffectEvent', {
  effect() {
    alert('Updated!');
  },
});
```