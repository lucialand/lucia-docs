---
id: attributeBinding
title: Attribute Binding
---

You can also bind attributes to elements. Below is an example of URL binding to an `<a>` tag using the `l-bind` directive.

```html
<div l-use="AttributeBinding">
  <a l-bind:href="url">Example Link</a>
</div>
```

```js
Lucia.use('AttributeBinding', {
  url: 'https://example.com',
});
```

## Binding Styles and Classes

For styles and classes, you should use object syntax to toggle classes or specify styles.

```html
<div l-use="StylesAndClasses">
  <h1 l-bind:class="{ hello: show }">Classes are cool</h1>
  <h1 l-bind:style="styles">Styles are sassy</h1>
</div>
```

```javascript
Lucia.use('StylesAndClasses', {
  show: true,
  styles: { color: 'purple' },
});
```
