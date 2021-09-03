---
Layout: 
Title: "charCodeAt() method."
date: "2021-09-02"
---

# Introduction.

I was solving a kata and i was looking for a method that returns a unicode of the character at the specified index in a string, then i find charCodeAt() method. I will share what i have learned about this method.

# Body.

## Explanation.

The charCodeAt() method returns the unicode of the character at the specified index in a string. The index of the first character is 0, the second character 1, and so on. We can use the charCodeAt() method together with the length property to return the unicode of the last character in a string. The index of the last character is -1, the second last character is -2, and so on.


Code example.

1.Return the Unicode of the first character in a string (the Unicode value for "H"):

let str = "HELLO WORLD";

let results = str.charCodeAt(0)    

console.log(results)

2.Return the Unicode of the last character in a string (the Unicode value for "D"):

let str = "HELLO WORLD";

let results = str.charCodeAt(str.length-1)

console.log(results)

# Conclusion.

The method helped me to get the unicode in highest Scoring Word kata.






