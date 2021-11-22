---
Layout: 
Title: "How to use Maths.abs()."
date: "2021-10-20"
---

# Introduction.

I was not familliar with this method until i had to look for a way to convert numbers to an absolute value when solving a kata, for example if you are given an array with string or negative number this method will always gives you an absolute number.

# Body.

# Explanation.

This is how to applied this method: 

Math.abs('-1');   (return 1)
Math.abs(-2);       (return 2)
Math.abs(null);      (return 0)
Math.abs('');        (return 0)
Math.abs([]);        (return 0)
Math.abs([2]);       (return 2)
Math.abs([1,2]);     (return NaN meaning "not a number")
Math.abs({});        (return NaN)
Math.abs('string');  (return NaN)
Math.abs();          (return NaN)


We can also use this method to get the different in like this:

const getDifference = (a, b) => {
    return Math.abs(a - b);
} 

console.log(getDifference(5, 3))



# Conclusion.

As you can see this method is simple and easy, the only thing we need is to know when to apply it or how to use it.