---
id: core-concepts
title: Core Concepts
---

### Components

Lucia is based off of the fundemental concept of components, which are partitions of markup that have state. An example of a component in Lucia using the [`l-state`](/docs/directives/state-directive) directive could be something like this:

```html
<div l-state="{ message: 'Hello World' }">
  <p l-text="message"></p>
</div>
```

### State

State is the concept of data that every component has, represented as a JavaScript object. State is mutable, but its size cannot change. Here is an example of what state looks like:

```js
{
  tasks: {
    monday: ['Eat food', 'Exercise'],
    tuesday: ['Program', 'Play games'],
    wednesday: ['Read books', 'Learn Lucia'],
  },
  numberOfTasks: 6
}
```

### Directives

Directives are essentially just special HTML attributes that act as markers that Lucia can understand. Directives are composed of 4 parts: `name`, `modifier`, `property`, `expression`. When compiled, it looks like: `l-name:modifier.property="expression"`. The name, modifier, and property are categories in descending specificity. Not all directives have modifiers or properties, but they all have a name. The expression is a JavaScript expression that will be executed when one of its dependencies change. You can view all Lucia directives [in-detail here](/docs/fundementals/introduction)

### Reactivity

Reactivity refers to the syncing of the DOM with the state. This means if the state is changed, then the DOM will also change with it. Lucia is smart in the way that it only updates the content in the DOM that is affected by the specific state change, maximizing performance.
