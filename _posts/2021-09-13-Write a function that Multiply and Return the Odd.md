---
Layout: 
Title: " Write a function that Multiply and Return the Odd."
date: "2021-09-13"
---

# Introduction.

In this blog post i will share about the kata we were given on friday to solve. The kata was about creating a function that will multiply and then give us odds. 

# Body.

Given the array of numbers we must first get the multiply of numbers by 3, then get the odds. When i start solving this kata i had two minds using the loop or high order function map(). i had no idea how i will get the odds numbers but i already know how to return the multiply of numbers.

What i know is that when we create a function we should be able to reuse it, lets say we are given another array that needs the same application we just have to use the same function and pass in the variable name assigned to the new array as argument in the function to get the same functionality.

I was able to return the multiply of three only not able to return the odds numbers. i will write the solution using loop and also high order functions i the next blog post.

Code Solution: 

loop Solution.

Let numberSet = [1, 2 ,3];

const multiplyAndGetOdd = (number) => {

    let list = [];

    let odd = [];

    for(var i in number){

list.push(number[i] * 3);

    }

for(var i in list){

    if(list[i] % 2 !==0 ){

odd.push(list[i])

    }

}

console.log(odd)

}

# Conclusion.

For this solution i had to get help to understand how to get the odd, and what this expresion deoes (item % 2 !== 0). Another thing that i was not familiar with is how to write the loop method the way i wrote it in the code above, i was used to write the loop like this "For( let i = 0; i < 1; i++)".