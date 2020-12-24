---
id: attributeBinding
title: Attribute Binding
---

You can also bind attributes to elements. Below is an example of URL binding to an `<a>` tag using the `l-bind` directive. If the computed value is false or undefined, the attribute will be detached.

```html
<div l-state="{ url: 'https://example.com' }">
  <a l-bind:href="this.url">Example Link</a>
</div>
```

## Binding Styles and Classes

For styles and classes, you should use object syntax to toggle classes or specify styles. Classes rely on togglable boolean dependency, while styles require you specify a style value.

```html
<div l-state="{ show: true, styles: { color: 'purple' } }">
  <h1 l-bind:class="{ hello: this.show }">Classes are cool</h1>
  <h1 l-bind:style="this.styles">Styles are sassy</h1>
</div>
```

## Binding Shorthands

Lucia's compiler also recognizes prefix shorthands, so instead of writing `l-bind:attribute`, you can just write `:attribute`, where `l-bind:` is replaced by `:`.