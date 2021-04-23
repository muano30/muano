---
Layout:
Title: "Template strings Codewars"
date: "2021-04-23"
---

# Introduction.

Today i will share with you a solution of the kata that i have solved in codewars. When i was going through the questions, i find this question about Template string, then i proceed to the next line then i knew i will be able to solve this problem. what came to my mind when i saw the template string is that i learned about template literal and it talks about with template literal there is no need to use concatenating strings with plus operator anymore and it was introduced in ES6.

## Question.

Template Strings.

Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings.

### Task

Your task is to return the correct string using the Template String Feature.

### Input

Two Strings, no validation is needed.

### Output

You must output a string containing the two strings with the word ```' are '```

1. var TempleStrings = function(obj, feature) {

  return //complete this

}

## Answer.

var TempleStrings = function(obj, feature) {

 return `${obj} are ${feature}`

}

I knew the new way of concatenating strings in ES6 is template literal as i have learned it in freecodecamp. I knew i will have to use template literal. I have also learned that parameter works as a placeholder. Debugging have also taught me that arguments must be supplied in the correct order then i knew inside the parameter 1 which is obj, there have to be the first string. Note: template literal work with backtiks.

# Conclusion.

This is not the only problem that i have solved with the knwoledge that i have gained from freecodecamp. I just wanted to share with you that i learned about creating strings using template literal in freecodecamp. 