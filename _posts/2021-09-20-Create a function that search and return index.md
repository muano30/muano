---
Layout: 
Title: "Create a function that search and return index."
date: "2021-09-20"
---

# Introduction.

We were given a kata to solve given an array with list of names in string,which requires us to create a function that search the name and return the index. 

# Body.

# Explanation.

This was easy kata to solve honestly, it didn't need much of a thinking, I had two ways in which i can solve this problem, using if statement or use indexOf() javascript method.

Another thing that i think i have a problem with is rushing to answer the question before thinking of the best idea or solution for the problem, which make me confuse how i have to put my code, i think i need to work on that.

Code Solution:

let names = ["Muano", "Matodzi", "Rulani"]

const searchAndReturnIndex = (list, searchText) => {

    for(var i in list){

        if(list[i] === searchText){
            
            return i
        }
    }

}

console.log( searchAndReturnIndex(names, "Muano"));
