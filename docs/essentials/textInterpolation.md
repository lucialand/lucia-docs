---
id: textInterpolation
title: Text Interpolation
---

Lucia allows you to set the `innerHTML` and the `textContent` of an element with `l-html` and `l-text` respectively. If you are dealing with user inputted content, it is highly advised to use `l-text` to avoid unintended XSS.

```html
<div l-init="{ text: 'I am regular!', html: '<b>I am bold!</b>' }">
  <p l-text="text"></p>
  <p l-html="html"></p>
</div>
```