---
Layout: 
Title: "Reduce method."
date: "2021-06-24"
---

# Introduntion.

Reduce comes with some terminology such as reducer & accumulator. The accumulator is the value that we end with and the reducer is what action we will perform in order to get to one value.

# Body.

## Code Example. 

Remember that a reducer will only return one value and one value only hence the name reduce.


let value = 0;

const numbers = [5, 10, 15];

for(let i = 0; i < numbers.length; i++) {

  value = value + numbers[i];  (We can also write this line like this "value += numbers[i]");

}

console.log(value);
 
The above will give us 30 (5 + 10 + 15). This works just fine, but we can do this with reduce instead which will save us from mutating our value variable.


The below code will also output 30, but will not mutate our value variable (which we have now called initialValue)


(this is our initial value i.e. the starting point)

const initialValue = 0;

( numbers array )

const numbers = [5, 10, 15];

( reducer method that takes in the accumulator and next item )

const reducer = (accumulator, item) => {

  return accumulator + item;

};

( we give the reduce method our reducer function and our initial value )

const total = numbers.reduce(reducer, initialValue)

console.log(total);


Below shows what’s logged to the console:

accumulator is 0 item is 5;

accumulator is 5 item is 10;

accumulator is 15 item is 15;


So the first thing is that the method  will be called 3 times because there are 3 values in our array. The accumulator begins at 0 which is our initialValue we passed to reduce. On each call to the function the item is added to the accumulator. The final call to the method has the accumulator value of 15 and item is 15, 15 + 15 gives us 30 which is our final value. Remember the reducer method returns the accumulator plus the item.


# Conclusion.

This is just one of an example of reduce method i have learned today, i've seen many complex examples of reduce method and i still want to improve my kwnoledge of reduce method. 