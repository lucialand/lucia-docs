---
id: joiningItems
title: Joining Items
---

```html
<div l-use="ListRendering">
  <p l-join="fruits by , "></p>
</div>
```

```javascript
Lucia.use('ListRendering', {
  fruits: ['apple', 'orange', 'banana'],
});
```
