---
Layout: 
Title: " Polymorphism in JavaScript."
date: "2021-06-14"
---

# Introduction.

Polymorphism in JavaScript is one of the concept that i just learn about, and i will share the little information i have about it with you.


# Body.

## What is polymorphism.

The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects.


Polymorphism is one of the tenets of Object-Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. Polymorphism takes advantage of inheritance in order to make this happen.


Real life example of polymorphism, A person at the same time can have different characteristic. Like a man at the same time is a father, a husband, an employee. So the same person posses different behavior in different situations.


## Example.

var employee = new Employee('Muano');

#### override function

#### this method going to execute

Employee.prototype.getDetails = function() {

    return this.name.toUpperCase();

}

console.log(employee.getDetails()); //outPut: MUANO

#### object and prototype function

function Employee(name) {

    this.name = name;

}

Employee.prototype.getDetails = function() {

    return this.name;

}

In the above simple program prototype-based method for an Employee constructor function has to override by another prototype function as return the Name as uppercase. So we can override a function in different Scope.


# Conclusion.

I will say this information did help me, i just need to dig deeper for more examples, this is not the only information about polymorphism, i think the most important thing is to understand this concept and apply it. 