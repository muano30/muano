---
Layout: 
Title: "CSS Modules in React."
date: "2021-11-01"
---

# Introduction.

In this blog post i will share what is css modules in react, and how it help us when we are styling our app.

# Body.

If you are relatively new to CSS, you may or may not have encountered the significant problem that occurs as an application’s style expands— since CSS rules follow global scope, two or more classes of the same name will collide. Handling multiple stylesheets and keeping track of naming conventions in CSS files can get burdensome, and if you aren’t careful enough, you are bound to encounter some conflicts from identical class names.

CSS Modules can solve these errors likely to appear, especially as your application grows. They ultimately allow us to use the same class name in multiple files without selector and rule errors by scoping class names locally by default.

A CSS Module is simply a .css file, where classes act similarly to local variables in Javascript. It is a tool that makes every class unique by including a hash in their name.

## Creating a CSS Module

If you are using create-react-app, making CSS Module for a component is relatively easy. Follow the typical naming convention for a css file, but insert module before .css, like so: [name].module.css
