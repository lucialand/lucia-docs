---
id: joiningItems
title: Joining Items
---

Lucia also support list rendering, where you are able to join arrays together and render them using the `l-join` directive. This directive requires a specific syntax, with the accepted format being `<array> as <text/html> by <delimiter>`, similar to how `<Array>.join` works in JavaScript.

```html
<div l-state="{ fruits: ['apple', 'orange', 'banana'] }">
  <p l-join="this.fruits as text by , "></p>
</div>
```
