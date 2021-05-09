---
id: custom-components
title: Custom Components
---

> Note: This is still an experimental feature. Syntax can change at any time, so use at your own risk.

Custom components allows you to set create custom components in a `init` scope. Attach a `l-tag` directive on a template to define a new custom component. The content inside the template must only have one root child node.

**Syntax:** `<template l-tag="[custom component tag]">...</template>`

**Example:** `<template l-tag="my-custom-component">...</template>`

You can then use `<my-custom-component></my-custom-component>` anywhere in the page.
