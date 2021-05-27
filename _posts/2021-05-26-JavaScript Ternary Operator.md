---
Layout:
Title: "JavaScript Ternary Operator."
date: "2021-05-26"
---

# Introduction.

What i know about ternary operator is that it can be used to replace  an if...else statement in certain situation, i just wanted to know more about ternary operator and decided to check some example and put them here to remind myself in feature.

# Body.

## What is a Ternary operator?

A ternary operator evaluates a condition and executes a block of code based on the condition.

### Its syntax is:

condition ? expression1 : expression2

### The ternary operator evaluates the test condition.

1. the condition is true, expression1 is executed.

2. If the condition is false, expression2 is executed.

The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

### Let's write a program to determine if a student passed or failed in the exam based on marks obtained.

#### program to check pass or fail

let marks = prompt('Enter your marks :');

#### check the condition

let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);

Output 1

Enter your marks: 78

You pass the exam.

Suppose the user enters 78. Then the condition marks >= 40 is checked which evaluates to true. So the first expression pass is assigned to the result variable.

Output 2

Enter your marks: 35

You fail the exam.

Suppose the use enters 35. Then the condition marks >= 40 evaluates to false. So the second expression fail is assigned to the result variable.

## Nested ternary operators

You can also nest one ternary operator as an expression inside another ternary operator. For example,

#### program to check if number is positive, negative or zero

let a = 3;

let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";

console.log(`The number is ${result}.`);

Output

The number is positive.
 

Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.


# Conclusion.

I think it is important to understand if statement first before we can use ternary operator, what i like about ternary operator is that we write less code compare to if..else statement. 