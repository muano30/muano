---
Layout: 
Title: "Changing an Object Structure(Reduce Method)."
date: "2021-06-25"
---

# Introduction.
 
 The reduce method have been giving me challange when i try to apply it, so i decided to search code examples where reduce method have been applied and try to apply them with understanding. I will share with you a code example where a reduce method is used to change an object structure.

 # Body.

 ## Code Explanation.

With the new Pokemon game coming out, let’s pretend we have a server that sends us an array of Pokemon objects like this:

const pokemon = [

  { name: "charmander", type: "fire" },

  { name: "squirtle", type: "water" },

  { name: "bulbasaur", type: "grass" }

]

(We want to change this object to look like:)

const pokemonModified = {
    
  charmander: { type: "fire" },

  squirtle: { type: "water" },

  bulbasaur: { type: "grass" }

};

(To get to that desired output we do the following:)

const getMapFromArray = data =>

  data.reduce((acc, item) => {

    ( add object key to our object i.e.) charmander: { type: 'water' }

    accumulator[item.name] = { type: item.type };

    return accumulator;

  }, {});
 
(If we call our method like this:)

getMapFromArray(pokemon)


(We get this desired output:)

object { charmander: Object, squirtle: Object, bulbasaur: Object}

charmander: Object type: "fire"

squiretle: Objects type: "water"

bulbasaur: Objects type: "grass"


# Conclusion.

I just need to get more practise of reduce method to improve my understanding. I think doing more research will improve my understanding of this method.
