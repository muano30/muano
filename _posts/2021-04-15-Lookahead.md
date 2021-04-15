---
Layout:
Title: "Lookahead"
date: "2021-04-15"
---

# Introduction.

Lookahead are patterns that tell JavaScript to look-ahead in your string to check for patterns futher along. This can be useful when you want to search for multiple pattern over the string.

## Two kinds of lookahead

1. positive lookahead

Will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the (...) is the required part that is not matched.

2. Negative lookahead

Will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where (...) is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead is not present.

# Conclusion.

I had a challenge solving the freecodecamp example, then i realise that i didn't understand the positive lookahead and negative lookahead.









