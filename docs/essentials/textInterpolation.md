---
id: textInterpolation
title: Text Interpolation
---

Lucia allows you to set the `innerHTML` and the `textContent` of an element with `l-html` and `l-text` respectively.

```html
<div l-init="{ text: 'I am regular!', html: '<b>I am bold!</b>' }">
  <p l-text="text"></p>
  <p l-html="html"></p>
</div>
```
