---
Layout:
Title: "Code wars(Sum the Strings)."
date: "2021-05-25"
---

# Introduction.
 
I will talk about the problem that i have solved on code wars today, which is "sum the strings" and the reason is because i've just learned about something i was not aware of, that helped me to finally find the answer.

# Body.

## Explanation.

I have to create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string). Given two parameter i learned about parseInt function that it parses a string and return an integer, i tried it first and the test fail, the reason is beacuse if the first character in the string can't be converted into a number it return NaN. We were given Something to NOte  which is "if either input is an empty string, consider it as zero", then i knew  that parseInt will never work in this case, 

If i tried parseFloat samething will happen the test will fail, then i use "Number" all the test pass, Number is another method that convert strings to numbers.

## My solution looks like this:

function sumStr(a,b) {

return (Number(a) + Number(b)).toString();

}


# Conclusion.

Note that (Number) have to start with a capital letter N. I knew about parseInt and it's condition i didn't know about Number that it can be used to convert string to number, this is something i have just learned. 