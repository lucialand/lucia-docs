---
id: hotswapping
title: Hotswapping
---

:::warning
Hotswapping is currently an experimental and optional feature and may potentially have adverse effects. Use at your own risk.
:::

Hotswapping in Lucia allows "fake" navigation, instead of loading the page each time you redirect, Lucia intercepts the request, and instead of redirecting, it fetches the page content and swaps the new content with the old under `document.body` and uses `history.pushState`.

Why do this? Well when you load a page, you not only load the HTML, but the CSS, JavaScript, and other assets. Performing a basic HTTP request and just doing a single DOM manipulation compared to the aformentioned action is much more efficient.

To use hotswapping, include the `l-href` element on to a clickable element, such as `<a>` or `<button>`, and provide the relative path of the target in the directive value. `l-href` does not require a component scope to be used.

```html
<!-- Page redirect to /old-path -->
<a href="/old-path">Navigate to /old-path</a>
<!-- Hotswapped target to /new-path -->
<a l-href="/new-path">Navigate to /new-path</a>
```

Easy as that! If you want to use [Turbo Drive](https://turbo.hotwire.dev/reference/drive) or [Turbolinks](https://github.com/turbolinks/turbolinks) instead, feel free to (in fact, Lucia has built in support for them!). Hotswapping is completely optional.
