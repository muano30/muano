---
Layout: 
Title: "The Apply, Call and Bind Methods in Objects."
date: "2021-06-11"
---

# Introduction.

The Apply, Call and Bind Methods in Objects is something i just learn recently that i never knew about, i will share with you some of the things that i have learned.

# Body.

## Explantion.

Consider the Object1 can have its own Properties and Object2 can have its own property, so we can write a common method for these object and use within that using call/apply/bind method.

1. Call Method.

Call invokes the function and allows you to pass in arguments one by one.

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};

var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {

    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);

}

say.call(person1, 'Hello'); // Hello Jon Kuperman

say.call(person2, 'Hello'); // Hello Kelly King

2. Apply Method

Apply invokes the function and allows you to pass in arguments as an array.

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};

var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {

    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);

}

say.apply(person1, ['Hello']); // Hello Jon Kuperman

say.apply(person2, ['Hello']); // Hello Kelly King

3. Bind Method:

Bind returns a new function, allowing you to pass in a this array and any number of arguments.

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};

var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {

    console.log('Hello ' + this.firstName + ' ' + this.lastName);

}

var sayHelloJon = say.bind(person1);

var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman

sayHelloKelly(); // Hello Kelly King

# Conclusion.

What i have shared above helped me to understand how Call, Apply and Bind methods works when working with object, If you have notice you will see that the same objects have been used, i think the most important thing is to know how this methods differ and how we apply them.





