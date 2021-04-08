---
Layout:
Title: "Create strings using template literals."
date: "2021-04-08"
---

# Introduction.

I will write about "Creating strings using template literals", when i was doing this topic i remember doing topics about "concatenating strings" in basic JavaScript. Template literals makes creating complex string easier it also allow us to create multi-line strings and use string interpolation features to create strings.

I will use backticks (`), not quotes (' or "), to wrap the string This saves inserting \n within strings. The ${variable} syntax i will use on the code is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

# Example.

The example that i will share with you here is the same example that i solved in freecodecamp.

## Question.

Use template literal syntax with backticks to create an array of list elements (li) strings. Each list elements text should be the one of the array elements from the failure property on the results objects and have a class attribute with the value text warning. The makeList function should return the arrays of list items string.

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
 

## Answer.

The only thing i have done here is to chnage inside the function makeList(arr).

const result = {

  success: ["max-length", "no-amd", "prefer-arrow-functions"],

  failure: ["no-var", "var-on-top", "linebreak"],

  skipped: ["no-extra-semi", "no-dup-keys"]

};

function makeList(arr) {

 const failureItems = [];

 for (let i = 0; i < arr.length; i++){

     failureItems.push(`<li class ="text-warning">${arr[i]}</li>`);

 } 

  return failureItems;
}

const failuresList = makeList(result.failure);

# Conclusion.

I learn about concatenating strings with the plus operator in basic JavaScript, and now in ES6 i just learn that with template literal, concatenating with the plus operator i wont have use it anymore.   