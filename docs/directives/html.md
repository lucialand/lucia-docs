---
id: html-directive
title: l-html Directive
---

`l-html` allows you to set the `innerHTML` of an element. This directive is somewhat dangerous because it can potentially result in unintended [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

**Syntax:** `<p l-html="[expression]">...</p>`

**Example:** `<p l-html="key">...</p>`
