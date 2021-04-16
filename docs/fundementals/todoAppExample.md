---
id: todo-app-example
title: Todo App Example
---

Let's create a To-do list app in JavaScript!

### Directives used:

- [`l-state`](/docs/directives/state-directive)
- [`l-text`](/docs/directives/text-directive)
- [`l-on`](/docs/directives/on-directive)
- [`l-model`](/docs/directives/model-directive)
- [`l-for`](/docs/directives/for-directive)

View the [live example here](https://codepen.io/aidenybai/pen/JjRrwjN).

### Instructions

Start off by fleshing out some of the HTML. We'll need a `div` to encapsulate our app, `input` to allow user input, `button` to allow users to create a new task, and `ul` to create a bullet list of tasks.

```html
<div>
  <input />
  <button>Create</button>
  <ul>
    <li>My Example Task</li>
  </ul>
</div>
```

Now, we need to attach [`l-state`](/docs/directives/state-directive), or data that relates to the app on the `div`. The state can be represented as an object literal, which is similar to how Vue and React hold state. We will need two properties on the state: `value` (as string), to hold the current value of the input, and `todo` (as array), which holds the tasks that have been added.

```html
<div l-state="{ value: '', todo: [] }">
  <input />
  <button>Create</button>
  <ul>
    <li>My Example Task</li>
  </ul>
</div>
```

Now, we can sync the `value` property of the state with the actual input value. We can do this by using [`l-model`](/docs/directives/model-directive). This means that if the input's value is changed, then `value` will change to equate it, and vice versa.

```html
<div l-state="{ value: '', todo: [] }">
  <input l-model="value" />
  <button>Create</button>
  <ul>
    <li>My Example Task</li>
  </ul>
</div>
```

To add a task, we need to click the "Create" button. We can add a [`l-on:click`](/docs/directives/on-directive) (shorthand: `@click`) directive to handle the event. Think of this like the default `onclick` attribute but with access to the state. When the button is clicked, we want to add a task by adding a new item in the `todo` array with the value being `value`.

```html
<div l-state="{ value: '', todo: [] }">
  <input l-model="value" />
  <button @click="todo.push(value)">Create</button>
  <ul>
    <li>My Example Task</li>
  </ul>
</div>
```

Now that we have the state with the correct values, we need to show it in the bullet list (`ul`). We can do this by using the [`l-for`](/docs/directives/for-directive) directive, which helps us duplicate the child of that element, just like how `for` loops work in JavaScript.

To render the actual tasks inside the list element (`li`), you will need to access the local state (state prefixed with `this.`) and interpolate it using the [`l-text`](/docs/directives/text-directive) directive.

```html
<div l-state="{ value: '', todo: [] }">
  <input l-model="value" />
  <button @click="todo.push(value)">Create</button>
  <ul l-for="task in todo">
    <li l-text="this.task">My Example Task</li>
  </ul>
</div>
```

Congrats, you're now finished! 🎉🎉🎉
