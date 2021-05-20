---
Layout:
Title: "Return a sorted array without changing the original array."
date: "2021-05-19"
---

# Introduction.

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

# Body.

You need not mutate the global array just create a new array in function and then do all the operations on it and return it. Just declare the new array and then push items of existing globalarray in it using concat. Try solving now. Your function should return the arr array with the sort() method applied to it.

## Example.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

  return [].concat(arr).sort(function(a, b) {

    return a - b;

  });

}

nonMutatingSort(globalArray);


OR


var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

  return [].concat(arr).sort(function(a, b) {

    return a === b ? 0 : a < b ? -1 : 1;

  });

}

console.log(nonMutatingSort(globalArray));

# Conclusion.

What have notice here is that slice method will return an empty array, i just don't know if it doesn't work with sort method in this senario.  



