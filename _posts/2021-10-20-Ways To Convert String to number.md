---
Layout: 
Title: "Ways To Convert String to Number."
date: "2021-10-20"
---

# Introduction.

In the previous Blog post i have shared how to convert number to string, today i will share the opposite of previous blog post which is to convert typeof string to typeof number

# Body.

# Explanation.

The approach is the same the only different is the method that we are going to use. We convert string to number the following way:


1. let a = "2"

console.log(typeof(a))    (........Here the typeof will be a string......)

let n = parseInt(a)

console.log(typeof(n))         (......Here the typeof will be number.....) 


2. let a = "2"
console.log(typeof(a))    (........Here the typeof will be a string......)


let n = Number(a)
console.log(typeof(n)) (......Here the typeof will be number.....) 


3. let a = "2"
console.log(typeof(a))      (........Here the typeof will be a string......)

let n = +a
console.log(typeof(n))    (......Here the typeof will be number.....) 


4. let a = "2"
console.log(typeof(a))     (........Here the typeof will be a string......)

let n = parseFloat(a)
console.log(typeof(a))        (......Here the typeof will be number.....) 

5. let a = "2"
console.log(typeof(a))      (........Here the typeof will be a string......)

let n = Math.floor(a)
console.log(typeof(n))     (......Here the typeof will be number.....) 

6.  let a = "2"
console.log(typeof(a))     (........Here the typeof will be a string......)

let n = (~~a)
console.log(typeof(n))     (........Here the typeof will be a number......)


7.  let a = "2"
console.log(typeof(a))    (........Here the typeof will be a string......)

let n = (a * 1)
console.log(typeof(n))   (........Here the typeof will be a number......)


# Conclusion.

As you can see the procedure is simillar to the one we have used in the previous blog post converting number to string, but the method we use when converting string to number is different to the one that we have applied in the previous blog post.