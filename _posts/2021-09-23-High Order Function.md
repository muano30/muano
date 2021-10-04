---
Layout: 
Title: "High Order Function."
date: "2021-09-23"
---

# Introduction.

In this this blog i have decided to just write about high order function.

# Body.

## Explanation.

### Higher-Order Functions.

In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

#### Array Method .reduce().

The .reduce() method iterates through an array and returns a single value.

It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.


const arrayOfNumbers = [1, 2, 3, 4];
 
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  

  return accumulator + currentValue;

});
 
console.log(sum);

Here, the .reduce() method will sum all the elements of the array.

#### Array Method .forEach().

The .forEach() method executes a callback function on each of the elements in an array in order.

Here, the callback function containing a console.log() method will be executed 5 times, once for each element.


const numbers = [28, 77, 45, 99, 27];
 
numbers.forEach(number => {  

  console.log(number);

});

### Array Method .filter().

The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.


const randomNumbers = [4, 11, 42, 14, 39];

const filteredArray = randomNumbers.filter(n => {  

  return n > 5;

});

Here, the array filteredArray will contain all the elements of randomNumbers but 4.

### Array Method .map().

The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

The original array does not get altered, and the returned array may contain different elements than the original array.


const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
const announcements = finalParticipants.map(member => {

  return member + ' joined the contest.';

})
 
console.log(announcements);

# Conclusion.

I think the most important thing to do before we can use this high order function is to understand how to use loop.