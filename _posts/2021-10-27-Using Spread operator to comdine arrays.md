---
Layout: 
Title: "Using Spread operator to comdine arrays."
date: "2021-10-27"
---

# Introduction.

In this blog post i will just share what i have just discoverd that we can combine array using spread operator.

# Body.

lets say you are given two array the first array contain letter and the second contain numbers:

let arrayOne = ['a', 'b', 'c', 'd'];
let arrayTwo = [1, 2, 3, 4]

let arraysCombined = [...arrayOne, ...arrayTwo]

console.log(arraysCombined)


The output will be  ['a', 'b', 'c', 'd', 1, 2, 3, 4]