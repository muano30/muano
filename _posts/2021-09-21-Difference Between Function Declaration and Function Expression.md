---
Layout: 
Title: "Difference Between Function Declaration and Function Expression."
date: "2021-09-21"
---

# Introduction.

In this blog post i will share the different between function expression and function declaration, i think it is important to know how to declare a function and how to write function expression.

# Body.

## Explanation.

The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.


### Function decleration.

A function declaration is made of function keyword, followed by an obligatory function name, a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces {...} that delimits the body code.

An example of function declaration:

function isEven(num) {

  return num % 2 === 0;

}

  console.log(isEven(24));  will get true

  console.log(isEven(11));  will get false


function isEven(num) {...} is a function declaration that defines isEven function, which determines if a number is even.

### Function Expression

In case of function expressions the JavaScript statement does not start with function keyword (it is present somewhere in the middle of the statement code):

Function expression: starts with "const"

const getRectArea = function(width, height) {

  return width * height;

};

# Conclusion.

I think it is important to know how to declare a function and how to write functionn expression.