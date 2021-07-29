---
Layout: 
Title: "filter method."
date: "2021-07-28"
---

# Introduction.

My biggest challange is to apply functional programing when coding, so i will share filter method example just to share i little understanding i have just learn.

# Body.

The JavaScript filter array function is used to filter an array based on specified criteria. After filtering it returns an array with the values that pass the filter. The JavaScript filter function iterates over the existing values in an array and returns the values that pass.

The filter() method creates an array filled with all array elements that pass a test (provided by a function).

filter() does not execute the function for empty array elements.

filter() does not change the original array.

## Code examples.

1. In the example below we want to get the fruits inside the array that have more than five letter. 

const recipe = ['banana', 'orange', 'apple', 'lemon'];

const results = recipe.filter(word => word.length > 6) 

console.log(results) [The output of this code is banana and orange]


2. In the code below we want to get age older or equal to 18. 

const ages = [32, 33, 16, 40];

let results = ages.filter(checkAdult)  

function checkAdult(age) {

return age >= 18;

}

console.log(results) [The output of this code is  32, 33, 40]


# Conclusion.

I think filter method is easy to apply in this case because all it does is to check if the element inside the array passed the test then return the values that pass the test.

