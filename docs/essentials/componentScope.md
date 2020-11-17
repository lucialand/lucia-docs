---
id: componentScope
title: Declaring a Component Scope
---

Lucia allows you to create component scopes with inline Javascript objects with the `l-init` directive.

```html
<div l-init="{ message: 'Hello World' }">
  <p l-text="message"></p>
</div>
```

Or you can use the manual initiation using JavaScript with the `l-use` directive.

```html
<div l-use="{ message: 'Hello World' }">
  <p l-text="message"></p>
</div>
```

```js
Lucia.init();
```

If you need to access [Lucia's state](/docs/essentials/accessingLuciaState) but also initialize, use the `l-use` directive in combination with `Lucia.use`.

```html
<div l-use="HelloWorld">
  <p l-text="message"></p>
</div>
```

```js
Lucia.use('HelloWorld', {
  message: 'Hello World',
});
```
