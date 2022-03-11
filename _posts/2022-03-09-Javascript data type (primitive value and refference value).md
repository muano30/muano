---
Layout: 
Title: "Javascript data type (primitive value and refference value)."
date: "2022-03-09"
---

# Introduction.

In this block post i will share the difference between value type and ojects type in javascript,the reason i'm writting about this is because i've seen a lot of confusion when i was helping first year students then i decided to write about this.  

# Body.

## Exaplanation 

In javaScript we have value data types and objects data types, the value data types are : Numbers, boolean, string, symbol,undefined, bigint and null. value types are also called primitive data type. primitive are data types that is not an objects and has no methods. Objects data types are: array, functions and objects, if we checks the typeof function or array will get object.

Primitive data type or value data types are called by their values and objects data type are called by their reference,


### Primitive data type.

Example:

First i will declare a variable called numberOne and assign number 10 to it, then declare another variable called numberTwo and assing assign the same variable numberOne to it, the again reassign variable numberOne to 20.


let numberOne = 10;
let numberTwo = numberOne;

numberOne = 20


console.log(numberOne)  output 20;
console.log(numberTwo)  output  10


What happen here is that variable numberOne will be stored somewhere in our computer and variable numberTwo will be stored also somewhere. then when we reassign numberOne the value of variable numberTwo doesn't change the reason is because javaScript read code from top to bottom, if we reassign the value of variable numberOne before we assign variable numberone to variable numberTwo the value of variable numberTwo will be the value of variable numberOne because we reassign the value of variable numberOne before we assign it to variable numberTwo.

Example:

let numberOne = 20
numberOne = 10;
let numberTwo = numberOne 

console.log(numberOne)  output = 10;
console.log(numberTwo)  output = 10;


### Object data type.

First i will declare a variable called person and assign object to it with property firstName and value John as a string; then declare a new variable newPerson and assign variable person to it, the update the variable person to Smith.


Example: 

let person = {
   firstName: "John"}
let newPerson = person
person.firstName = "Smith"

console.log(person) output  = Smith
console.log(newPerson)  output =  Smith

What happen here is that object will be stored somewhere in our computer, and our variable will reference that object, variable person will reference to that object and variable newPerson will reference to that object as well, when we update first person the new person will also update that is why we have smith values in both our console.  



# Conclusion.

If you have time here is the link to the video that will hepl you understand.https://www.youtube.com/watch?v=9ooYYRLdg_g