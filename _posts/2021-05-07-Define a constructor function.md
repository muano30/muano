---
Layout:
Title: "Constructor function"
date: "2021-05-07"
---

# Introduction.

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

# Example. 

function Bird() {

  this.name = "Albert";

  this.color = "blue";

  this.numLegs = 2;

}

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 

## Constructors follow this few conventions:

1: Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

2: Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.

3: Constructors define properties and behaviors instead of returning a value as other functions might.

# Conclusion.

I think it is important to understand how constructor function differ from other function, and also knowing how to create an object. 