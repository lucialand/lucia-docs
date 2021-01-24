---
id: joiningItems
title: Joining Items
---

Lucia also support list rendering, where you are able to join arrays together and render them using the `l-for` directive. This directive requires a specific syntax, with the accepted format being `(<item?>, <index?>) in <target array>`, similar to how for loops works in JavaScript. When accessing the `item` or `index`, it must be prefixed with `this.`, as these props could conflict with the parent scope props.

```html
<div l-state="{ fruits: ['apple', 'orange', 'banana'] }">
  <ul l-for="(fruit, i) in fruits">
    <li l-text="this.fruit + ' ' + this.i"></li>
  </ul>
</div>
```
