

// var numbers = [175, 50, 25];

//   var subtract = numbers.reduce(myFunc);

// function myFunc(total, num) {
  
//   return total - num;
// } 

// console.log(subtract);

// const myArray = ['Sam', 'Alice', 'Nick', 'Matt'];

// // Appends text to each element of the array
// const newArray = myArray.map(name => {
// 	return 'My name is ' + name; 
// });
// console.log(newArray);

// const myArray = ['Sam', 'Alice', 'Nick', 'Matt'];

// const anotherArray = myArray.map((value, index) => index + ": " + value);
// console.log(anotherArray); // ['0: Sam', '1: Alice', '2: Nick', ...]

// // Starting array is unchanged
// console.log(myArray); 


// var numbers = [ 4, 10, 12, 20];
// var x = numbers.map(Math.sqrt);

// // console.log(x); 

// // var fruits = ['banana', 'milk', 'eggs'];
// // var lists = fruits.map(myFruits)

// // function myFruits(list){
// //   return  list;
// // }
// //  console.log(lists);

// var map = new Map([
//   [5, 4],
//   [7, 9]
// ]);

// //output:true
// console.log(map instanceof Object); 

// //output:false
// var obj = new Object();
// console.log(obj instanceof Map); 


// Closure Example.

// const first = () => {
//   const  name ="Muano";
//   const second = () =>{
//     const surname = "Nevhufumba";
//     console.log(`${name} ${surname}`);
//   }

//   return second
// }

// const newFunc = first();
//  newFunc()


// map method

// const numbers = [ 1,2,4,5,6];

// const bignumbers = numbers.map(number =>{
//     return number * 10;
// });

// console.log(bignumbers)


// filter javascript arrayJavascript By White Browed Owl on Nov 11 2019 Comment
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// const colours = ['green', 'black', 'dark-orange', 'light-yellow', 'azure'];
// const result = colours.filter(colour => colour.length < 6);
// console.log(result);

// const recipe = ['banana', 'orange', 'apple', 'lemon'];
// const results = recipe.filter(longWords) 
// => recipes.length > 5);

// function longWords(recipe){
  // return recipe.length > 5;
// }
// console.log(results)


// const ages = [32, 33, 16, 40];

// let results = ages.filter(checkAdult)  

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(results)

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);


// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(longWords);

// function longWords(words) {

//   return words.length > 6;
// }

// console.log(result);


// let numbers= [3, 4, 5, 6];

// const results = numbers.map(numberOfStudents);

// function numberOfStudents(numbers) {
//   return numbers*3
// } 

// console.log(results)

// Getting the unicode value for "H"

// let str = "HELLO WORLD";
// let results = str.charCodeAt(0)    

// console.log(results)


// let a = [5, 7],
//   count = 10,
//   missing = []

// for (let i = 1; i <= count; i++) {
//   if (a.indexOf(i) === -1) {
//     missing.push(i)
//   }
// }
// console.log(missing)

// var numArray = [0.189459, 0.189460, 0.189461, 0.189463, 0.189466];
// var mia = numArray.reduce(function(acc, cur, ind, arr) {
//   var diff = cur - arr[ind-1];
//   if (diff > 1) {
//     var i = 1;
//     while (i < diff) {
//       acc.push(arr[ind-1]+i);
//       i++;
//     }
//   }
//   return acc;
// }, []);
// console.log(mia);


  






























































