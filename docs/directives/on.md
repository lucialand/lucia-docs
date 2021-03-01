---
id: on-directive
title: l-on Directive
---

> Note: The shorthand property for `l-on` is `@`

`l-on` adds an event listener to the element is is attached to. This means if that event is emited on the element, then it will execute the expression. Check the [Events refererence on MDN](https://developer.mozilla.org/en-US/docs/Web/Events) for more information.

**Syntax:** `<button l-on:[event]="[expression]">...</button>`

**Example:** `<button l-on:click="key = 'value'">Change value</button>`

---

**`.global` property**

The `.global` property forces the event listener to be attached to the `document` instead of the target element.

---

**`.prevent` property**

The `.prevent` property calls the `preventDefault()` on the event when it is called, essentially preventing normal, predefined behavior.

---

**`.stop` property**

The `.stop` property calls the `stopPropogation()` on the event when it is called, essentially preventing bubbling from child elements to parent elements.

---

**`.outside` property**

The `.outside` property attaches an event handler to the document, conditionally excluding the element it is attached to. This means that it only executes the expression when anything other than the target element is fired. This could be used for modals or special UI elements.

---

**`.self` property**

The `.self` property attaches an event handler to the element, conditionally excluding the children of that element. This means that it only executes the expression when only target element is fired. This could be used for cards with additional interactives.

---

**`.once` property**

The `.once` property forces the event listener to only be called once, meaning that event calls after will not work. This can be useful for one-time actions, such as loading HTML into the document from Ajax.

---

**`.passive` property**

The `.passive` property helps with better scroll performance, especially on mobile devices.
