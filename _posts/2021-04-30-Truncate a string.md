---
Layout:
Title: "Truncate a string"
date: "2021-04-30"
---

# Introduction.

The first question i asked myself when i come across this word is, what is truncate?. To truncate is to Shortens a string down to the number of characters passed as an argument. If the specified number of characters is less than the length of the string, an ellipsis (…) is appended to the string and is included in the character count.

I learned that the trunc() method returns the interger part of a number, and that this method will not round the number up/down to the nearest integer, but simply remove the decimals.

# Body.

I will use the same example that i have solved to show how truncate works.

## Example.

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

1. function truncateString(str, num) {


  if (str.length > num) {

    return str.slice(0, num) + "...";

  } else {

    return str;

  }

}

# Conclusion.

I will say i'm starting to take my time to understand the question before i can answer the question, I've just realize to spend more time understanding the question helps rather that rushing to answer the question.








