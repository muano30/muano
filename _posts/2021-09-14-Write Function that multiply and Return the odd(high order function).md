---
Layout: 
Title: "Write Function that multiply and Return the odd(high order function)."
date: "2021-09-14"
---

# Introduction.

In this blog post i will just share how to solve the same kata i solved in the previous blog post, but this time i will be using high order function.

# Body.

## Explanation.

What i know is that high order function in order to use them we need to have a knowledge of how loop method works.

code solution.

let numberSet = [ 1, 2, 3];

const multiplyAndGetOdd = (number) => {

    const multiply = number.map((singleNumber)=>{

        return singleNumber * 3;

    });

    const odd = multiply.filter((item)=>{

        item % 2 !== 0;

    });

console.log(odd);

}

multiplyAndGetOdd(numberSet);

# Conclusion.

This was not easy also to come up with a solution i do understand map method and filter method, when mapping it means that we to return the same array but this time multiplied by 3; When filterind it means that we want to return a certain number that meet our condition those that don't meet our condition will not be returned. 
