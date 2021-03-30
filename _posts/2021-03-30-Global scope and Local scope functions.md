---
Layout:
Title: "Global scope and Local scope functions"
date: "2021-03-30"
---

# Introduction.

TOday i will talk about global and local scope functions. Scope refers to the visibility of variables.

## Global scope functions.

variables which are defined outside of a function block have global scope, which means they can be seen everywhere in our JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope,this can create unintended consequenses elsewhere in our code or when running a function again so we should always declare our variables with var keyword.

## Local scope function.

variables which are declared within a function, as well as the function parameters have local scope, that means they are only visible within that function.

It is possible to have both local and global variable with the same name, when we do this the local variable takes precedence over the global variables ,which means the local variable will be considered to be more important.
