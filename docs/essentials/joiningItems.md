---
id: joiningItems
title: Joining Items
---

Lucia also support list rendering, where you are able to join arrays together and render them using the `l-for` directive. This directive requires a specific syntax, with the accepted format being `<item?>, <index?> in <target array>`, similar to how for loops works in JavaScript.

```html
<div l-state="{ fruits: ['apple', 'orange', 'banana'] }">
  <ul l-for="fruit in this.fruits">
    <li l-text="this.fruit"></li>
  </ul>
</div>
```
