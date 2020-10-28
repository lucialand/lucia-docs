---
id: joiningItems
title: Joining Items
---

```html
<div l-use="ListRendering()">
  <p l-join="fruits by , "></p>
</div>
```
```javascript
function ListRendering() {
  return {
    fruits: ['apple', 'orange', 'banana'],
  };
}
```