---
Layout:
Title: "Prototype in OOP"
date: "2021-05-11"
---

# Introduction.

First i wanted to understand what is prototype in OOP (object oriented programming) and this is what i have found out:

Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.

# Body.

## What is object prototype?

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

## Why would you use the prototype in JS?

Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.

# Conclusion.

At first i was struggling to understand how this prototype works,i had this question why can't we just write the properties inside the common object, avoiding adding the prototype. 

I what i have learned is that we can use prototype in many ways just like when we used prototype properties to reduce duplicate and when we change them to create a new object.
