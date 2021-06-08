---
Layout: 
Title: "Palindrome Checker."
date: "2021-06-07"
---

# Introduction.

Solving this problem was not easy at all, but finally i manage to solve it,and it feels good to finaly figure something out. 

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 

# Explanation.

// Palindrome Checker


// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


function palindrome(str) {

    let regex = /[^A-Za-z0-9]/g;

    str = str.toLowerCase().replace(regex, '');

    let length = str.length;

    for (let i = 0; i < length/2; i++) {

      if (str[i] !== str[length - 1 - i]) {

          return false;

      }

    }

    return true;

   }
   
   
   console.log(palindrome("eye"));





 






