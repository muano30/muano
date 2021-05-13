---
Layout:
Title: "Different between primitive type and reference type."
date: "2021-05-13"
---

# Introduction.

I will explain about the different between primitive type and reference type in a code and will see the difference between the two. In javaScript, a variable may store two types of values, primitive and reference. Primitive types are number, string, boolean, symbol, undefined and null whereas Reference type are object, function and array.


# Body.

## Example of primitive type.

let number = 10;

function increase(number){
    number++;
}

increase(number);

console.log(number);

Here the console will give us 10, but the function we wrote must give us the increase of a number, and the reason is that primitive are copied by their value.


## Example of reference type.

let obj = { value: 10};

function increase(obj){

    obj.value++;
}

increase(obj);

console.log(obj);

Here the console will give us 11 and the reason is beacuse object a copied by their reference.

# Conclusion.

I had no idea  about the primitive value and reference value  until i came across this example and this has help me a lot to undestand the different between the two.