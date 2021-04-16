---
Layout:
Title: "Things that i have learned about regex"
date: "2021-04-16"
---

# Introduction.

Regular expression or regex are patterns that helps programmers for searching, matching and replacing text. Regex use special characters, capture groups, positive and negative lookahead and other technique to match any text we want. I will not write any code, but i will explain about the characters that i have learn so far. About negative and positive lookahead i have explained in the previous blog post.

We have method to test, match and replace regex, it is also important to learn the syntax of this method.

1: .test() method

2: .match() method

3: .replace() method

# Body.

I will explain each character that i have learn so far.

1:  / /  (two backwards slash) are used in code for matching parts of string, for example if   we have a string "frecodecamp" and we want the word "code". The regex we want is /code/. 

2: Using the symbol for (OR) we use it to search for multiple strings, for example we want to match the string   yes or no, the regex we want is /yes|no/.

3: i flag we use is to igonore upper and lower case, this regex will match the string, Muano, muaNo, muano, the regex we want is /muano/i.

4: g flag search or extract a pattern more than once, the regex we want is /muano/g.

5: wildcard or dot and period (.) if you want to match hug, huh, hut, and hum, we can use the  regex  /hu./ to match all four words.

6: [ ] (square brackets) if we want to match bag, big and bug, we can create a regex /b[aiu]g/.

7: ^  match beginning of sequence

8: +   match one or more repetitions

9: *  search zero or more repetitions

10: ?   zero or one repetitions

11: $  search end of sequence


# Conclusion. 

I think the best way to understand regex is to understand what a single character does in order to apply yourself when multiple characters have to be used. 