---
Layout:
Title: "Comparing different values"
date: "2021-03-31"
---

# Introduction.

 Comparing different values, if values being compared are not of the same type the (equality operator) will perfom a type of convertion and then evaluate the value. The (strictly equality operator) will compare both the data type and value as-is, without converting one type to the other. We can also determine the type of variable or a value with the (type of operator).

 # Example.

 ## Equality opetator.
 
 3 == '3' Here we have a number (3) and string ('3'), JavaScript will perfom type of conversion from string to number, meaning it will read them as equal and retun true.

## Strict equality operator.

3 === '3' We have a number and string, Javascript will not perfom any type of conversion, the return will be false.

## Type of operator.

typeof 3
typeof '3' 

Here typeof 3 will return the string number, and typeof '3' will return the string string. 

# Conclusion.

JavaScript have other comparison that i didn't explain in this topic, it is important to know them and how to apply them.