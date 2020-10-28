---
id: attributeBinding
title: Attribute Binding
---

You can bind attributes to expressions.

```html
<div l-use="AttributeBinding()">
  <h1 l-bind:class="{ hello: show }">Classes are cool</h1>
  <h1 l-bind:style="color">Styles are sassy</h1>
</div>
```

```javascript
function AttributeBinding() {
  return {
    show: true,
    color: { color: 'purple' },
  };
}
```