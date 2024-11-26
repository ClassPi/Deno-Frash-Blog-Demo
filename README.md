# Deno-Fresh Blog Demo

You can learn how to build a blog with Deno-Fresh framewrok![image](/static/logo.svg)

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

### How it works

Every time start This project will read the `./data` folder and create a blog info list by `./utils/blog.ts`, then use [gray-matter](https://www.npmjs.com/package/gray-matter) to parse the markdown header like this:

```markdown
---
title: Deno Deploy
publishedAt: 2022-09-24
changedAt: 2022-09-30
type: life
cover: "https://xxxxx/md_cover12138.png"
summary: "this blog is about how to use Deno Deploy"
---
```

Then use the Deno std lib `@deno/gfm` to parse the markdown content to HTML.

### UI

The UI is built with [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/), and [Preact](https://preactjs.com/) for the frontend framework, it's Fresh's default JS framework.

### IDEA 

As a frontend beginner, I believe that building a blog is an excellent way to learn how to use the Deno-Fresh framework for real-world projects. Specifically, I want to understand how to use `Partials` to update a page with new content from the server without causing the browser to reload. Additionally, I aim to learn how to use `useEffect` and `useState` within an [island](https://jasonformat.com/islands-architecture/).