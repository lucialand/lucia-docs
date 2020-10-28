---
id: simpleClickerGame
title: Simple Clicker Game
---

Below is an example of a clicker game in Lucia. Your eyes aren't fooling you, it is really that simple.
```html
<div l-use="{ count: 0 }">
  <button l-text="count" l-on:click="++count">0</button>
</div>
```