---
Layout:
Title: "Create a Function Using For Loop"
date: "2021-04-19"
---

# Introduction.

Friday we were given a task to do on weekend which is to create a function which will return an array of first and second largest number in a given array. and we were told use for loop and avoid using sort.

I struggle a lot to come up with a solution but at the end i did come up with a solution, the first solution i came up with was when i was using two arrays i manage to find a solution, bacause i create a function to select the largest number in each array, i will talk about the solution that i came up with using one array to find the first and second largest number.

# Body.

This is the solution that i came up with using for loop.

const twoLargestNumber = (arr) => {

  var largestOne = 0;

  let secondLargest = 0;

  let largestNumberIndex = 0; 

  for ( let i = 0; i < arr.length; i++){

     if (arr[i] > largestOne) {

        LargestOne = arr[i];

        largestNumberIndex = i  
     } 

}

arr.splice(largestNumberIndex,1)

for ( let i = 0; i < arr.length; i++){

    if (arr[i] > secondLargest){

        secondLargest = arr[i];
    }
}

return [largestOne,  secondLargest]

}

console.log(twoLargestNumber([3, 6, 2, 56, 32, 5, 89]))

The output here will be an array of [89, 56].


# Conclusion.

I create the second for loop to get second largest number which i have realised  if i were to get more numbers i will have to create more for loop which will make my code to big, i will try to simplify this code to make is smaller.

I think for loop is not easy to work with but it hepls to learn and understand how to work with list of things.