---
id: watch-directive
title: l-watch Directive
---

`l-watch` attaches watchers to properties. `l-watch` is special because it requires an `l-state` directive to be inline with it. `l-watch` requires an object to be passed, with the state property as the key and a callback as the value.

**Syntax:** `<div l-state="{...}" l-watch="[expression]">...</div>`

**Example:** `<div l-state="{ key: 'value' }" l-watch="{ key: () => {} }">...</div>`
