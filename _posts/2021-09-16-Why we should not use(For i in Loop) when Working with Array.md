---
Layout: 
Title: "Why we should not use "For (var i in array)" loop when Working with Array."
date: "2021-09-16"
---

# Introduction.

In this blog post i will share why we should not use "for (var i in array)" loop when working with array.

# Body.

The best practice to use this way is never using it for arrays. Since arrays are also objects under the hood and the index of each item is regarded as the property of the object, The index order is implementation-dependent, and array values may not be accessed in the order you expect.applying “for…in…” to arrays may cause some unexpected results.
The following is a very good example from the question “Why is using “for…in” for array iteration a bad idea?


Array.prototype.foo = 1;  (Now we have no idea what the below code will do.) 

var numbers = [1, 2, 3, 4, 5];

for (var i in numbers){

    "Now foo is a part of EVERY array and  will show up here as a value of 'i'."

    console.log(i);
}

 Will display:

   0
   1
   2
   3
   4
   foo


Therefore, to make your code bug-free, never apply “for…in…” to arrays.

# Conlusion.

This is just an example of why using "for( var i in array)" is a bad idea. I will say this should be avoided when we know we have multiple or too many lines of code.