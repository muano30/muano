---
Layout:
Title: "Debugging"
date: "2021-04-20"
---

# Introduction.

Debugging is the process of going through our code finding any issue and fixing them. What i have notice while i was doing freecodecamp is that if i misspell the name or instead of typing uppercase and i type lowercase or vice versa i will get an error, what i didn't know is that is part of debugging.

I have learned that issue comes in three form, and to use type of to check type of variable, and that in JavaScript arrays are techinically a type of object. 

# Body. 

## Three forms issues comes in debugging.

1: Syntax errors will prevent our code from running.

2: Runtime errors our code will have unxpected behavior.

3: Logical errors our code will do what it is not intended to do.

## Using type of to check type of variable.

1: console.log(type of " ")

2: console.log(type of 0)

3: console.log(type of [])

4: console.log(type of {})

The console.log will display ( string, number, object and object). Arrays are technically a type of object.

## Catch missing open and closing parenthesis after a function call.

PARENTHESIS - a word or phrase inserted as an explanation or after thought into a passage which is gramatically complete without it in writing usualy marked off by brackets, dashes or commas.


function myFunction () {
    return "You rock"
}

let varOne = myFunction;
let varTwo = myFunction();


Here varOne is the function myFunction and varTwo is the string You rock. it is important when calling a function to write function with the brackets

# Conclusion.

I think most of the things we did here i figured them out while doing freecodecamp i just didn't know that they call them debugging. For example i knew that assignment operator (=) we used it to assign a value with variable name. and the other equality operators we use them  to check for equality, there are those that will convert and those that will not convert. So what i learned it that it can happen that i use assigning operator instead of equality operator and that will cause error. 






