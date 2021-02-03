---
id: init-directive
title: l-init Directive
---

`l-init` executes an expression once the component it is attached to is initialized. `l-init` is special because it requires an `l-state` directive to be inline with it. `l-init` cannot access state props, as only child elements with directives under the component scope can access them.

**Syntax:** `<div l-state="{...}" l-init="[expression]">...</div>`

**Example:** `<div l-state="{ key: 'value' }" l-init="console.log('I am initialized')">...</div>`
