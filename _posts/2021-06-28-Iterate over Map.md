---
Layout: 
Title: "Iterate over Map."
date: "2021-06-28"
---

# Introduction.

The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array. arr: It is optional parameter and it holds the array.

# Body.

## Code Explanation.

For looping over a map, Will show 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
For instance:

let recipeMap = new Map([

  ['cucumber', 500],

  ['tomatoes', 350],

  ['onion',    50]

]);

(iterate over keys (vegetables));

for (let vegetable of recipeMap.keys()) {

  console.log(vegetable);  (output: cucumber, tomatoes, onion)

}

( iterate over values (amounts))

for (let amount of recipeMap.values()) {

  console.log(amount); (output: 500, 350, 50)

}

( iterate over [key, value] entries)

for (let entry of recipeMap) { (the same as of recipeMap.entries())

    console.log(entry); (outout: ['cucumber', 500 ], ['tomatoes', 350] ,['onion', 50]))
}

The insertion order is used
The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

Map has a built-in forEach method, similar to Array:

(runs the function for each (key, value) pair)

recipeMap.forEach( (value, key, map) => {

  console.log(`${key}: ${value}`); (output: cucumber: 500, tomatoes: 350, onio: 50)

});


# Conclusion.

The above code are just example of how Map works, i think the more i keep on learning how this method works and how to apply them it will improve my coding which is what i'm exactly doing.
