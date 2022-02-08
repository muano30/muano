---
Layout: 
Title: "Century From Year (kata)."
date: "2021-11-17"
---

# Introduction.

In this blog post i will share with you how i solved this kata, and a new javascript method that have just learn after solving this kata which was the quickest or shortest way to solve this kata.

# Body.

On the kata we were given a year on that year we have to find out how many century are on that year, what i know is that century is 100 year meaning whatever year we are given we divide it by 100 then we get the how many cuntury we have on the given year, The challange is we have to roundoff incase we are getting decimals. but the challange when we roundoff we have to get the number which is plus one from the one we getting, but if we not getting any decimal we dont have to rouf it off.


1. This is what have done on the solution below because i want to know how many century i have in a given year, i divide a give year by 100 which is 1 century, then convert the number to string and split it. the reason i convert it to string is because i want to separate a wholenumber and decimals with split. 

On the second line with return i use ternary operator to checks the condition then followed by the expression to execute if the condition is true or if the condition is false. The condition is to checks the length of the results which is two, then the first exprestion we have to convert the string again to number to get the value as a type of number but not string, then if the value have decimal it will take the whole number and increment by one, the next expression is when the value doesnt have decimal it will ust return the value.


 const century = year => {
    const result = String(year / 100).split('.')
    return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
 }
 console.log(century(1705))
 console.log(century(1900))
 console.log(century(1601))
 console.log(century(2000))
 console.log(century(89))

The Math method i have just learned today is Math.ceil(), which return the smallest interger greater than or equal to the value we pass,
I have learned about Math.floor(), which returns the largest or equal interger that is less than the given value meaning it round down, and Math.round() round to the closest whole number.



2. The solution below is for Math.ceil()

 
const century = year => {
   return Math.ceil(year / 100)
}

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(2000))
console.log(century(89))


# Conclusion.

I will say after solving a kata is best to check how others have approach the same question, because i have just learn something i had no idea about.