// multipy and return the odd 

// let numberset = [1, 2, 3];
// let numberSet1 = [ 4, 5, 6];
// let numberSet2 = [ 7, 8, 9];

// const multiplyAndGetOdd = (number) => {
//     const results = number.map((singleNumber)=>{
//         return singleNumber * 3;
//     })  
//     // console.log(results)  
//     const odd = results.filter((item)=> {
//         return item % 2 !== 0;

//     });
// console.log(odd)

// }

// multiplyAndGetOdd(numberset)
// multiplyAndGetOdd(numberSet1)
// multiplyAndGetOdd(numberSet2)


// let numberset = [1, 2, 3];
// let numberSet1 = [ 4, 5, 6];
// let numberSet2 = [ 7, 8, 9];

// const multiplyAndGetOdd = (number) => {
// let list = [];
// let odd = [];
// for(var i in number){
//     list.push(number[i] * 3);
// }
// // console.log(list)
// for( var i in list){
//     if(list[i] % 2 !== 0){
//     odd.push(list[i])}
// }
//     console.log(odd)
// }

// multiplyAndGetOdd(numberset)
// multiplyAndGetOdd(numberSet1)
// multiplyAndGetOdd(numberSet2)

// let numberset = [1, 2, 3];
// let numberSet1 = [ 4, 5, 6];
// let numberSet2 = [ 7, 8, 9];

// const multiplyAndGetOdd = (number) => {
// let list = [];
// let odd = [];
// for(var i in number){
//     if((number[i]*3)%2 !==0){
//         list.push(number[i] * 3);
//     }
// }
// console.log(list)
// for( var i in list){
//     if(list[i] % 2 !== 0)
//     odd.push(list[i]);
// }
//     console.log(odd)
// }

// multiplyAndGetOdd(numberset)
// multiplyAndGetOdd(numberSet1)
// multiplyAndGetOdd(numberSet2)



// Search and return index of array

// const names = ["Muano", "Tumi", "Kamva"];

// const searchAndReturnIndex =(list, searchText) =>{
//     for(var i in list){
//       return list.indexOf(searchText);
//     } 
// }

// console.log(searchAndReturnIndex(names, "Tumi"))

// const names = ["Muano", "Tumi", "Kamva"];

// const searchAndReturnIndex =(list, searchText) =>{
//     for(let i in list){
//       if(list[i] === searchText){
//           return  i;
//       }
//  }
// }

// console.log(searchAndReturnIndex(names, "Kamva"))


// Array.prototype.foo = 1;

// Now you have no idea what the below code will do.
// var a = [1, 2, 3, 4, 5];
// for (var x in a){
// Now foo is a part of EVERY array and 
// will show up here as a value of 'x'.
// console.log(x);
// }

/* Will display:
   0
   1
   2
   3
   4
   foo
*/


// let author = [ 'Y', 'a', 'n', 'g' ];

// for (let char of author){

//     console.log(char);
// }
// Y
// a
// n
// g

// IIFE (Immediately Invoked Function Expression)

// let paintColor = "red";

// const paint =(() => {
//     return{
//         changeColorToBlue: () => {
//             paintColor="Blue";
//             return paintColor;
//         },
//         changeColorToGreen: () => {
//             paintColor="Green";
//             return paintColor;
//         }

//     }
// })();

// console.log(paint.changeColorToGreen())

// Hoisting.
// cowSays("moo");

// function cowSays(sound){
//     console.log(sound);
// }

// Closure
// const first = () => {
//     const greet = "Hi";
//     const second = () => {
//         const name = "Muano";
//         console.log(`${greet} ${name}` )
//     }
//     return second
// }
//  const newFunc = first()
// newFunc()

// Callbackfunction

// const greetings = (name) => {
//     console.log("Hello " + name)
// }
// const proccessUserName = (callback) => {
//     let name = "Muano"
//     callback(name) 
// }

// proccessUserName(greetings);


// Promises


// function Bike(model,color){
//     this.model = model,
//     this.color = color,
//  Bike.prototype.getDetails = function(){
//       return this.model+' bike is '+this.color;
//     }
//  }
//  var bikeObj1 = new Bike('BMW','BLACK');
//  var bikeObj2 = new Bike('BMW','WHITE');
//  console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
//  console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
//  console.log(bikeObj1,bikeObj2) //attacheced below image as output

// Apply, Call And Bind method
// var obj={
// num : 2
//  }
//  var add = function(num2,num3,num4){
// return this.num + num2 + num3 + num4;
//  }
//  var arr=[3,4,5];
//Call method 
//  console.log(add.call(obj,3,4,5));  //Output : 14
//Apply method
//  console.log(add.apply(obj,arr));   //Output : 14
//bind Method
//  var bound = add.bind(obj);
//  console.log(bound(3,4,5)); 


// currying method
// var add =   function (a){
// return function(b){
//   return function(c){
//  return a+b+c;
//  }        
//    }
//  }
// console.log(add(2)(3)(4)); //output 9
// console.log(add(3)(4)(5)); //output 12


// Create a function that get total marks.

// let marks = [40, 20, 60];

// const getTotalMark = (number) => {
//     let sum = 0
//     for(var i in number){
//         sum += number[i]
//     }

//     return sum
// }

// console.log(getTotalMark(marks))



// const collection = {
//     items: [],
//     add(...items) {
//       this.items.push(...items);
//     },
//     get(index) {
//       return this.items[index];
//     }
//   };
//   collection.add('C', 'Java', 'PHP');
//   console.log(collection.get(1)) 

// class Star {
//     constructor(name) {
//       this.name = name;
//     }
//     getMessage(message) {
//       return this.name + message;
//     }
//   }
//   const sun = new Star('Sun');
//   console.log(sun.getMessage(' is shining'))

// const absValue = (number) => {
//     if (number < 0) {
//       return -number;
//     }
//     return number;
//   }
//   console.log(absValue(-10));
//   console.log(absValue(5)); 
//   console.log(absValue(5));
// const absValue = (number) => {
//     if (number < 0) {
//       return -number;
//     }
//     return number;
//   }
//   console.log(absValue(-10));
//   console.log(absValue(5)); 
//   console.log(absValue(5));




// const names = ["Muano", "Tumi", "Moral"];

// const removeItem = (list, itemName) => {
//     const newList = [];

// for (var i in list) {
//     if(list[i] !== itemName){
//         newList.push(list[i]); 
//     }
// }
// return newList
// }
// console.log(removeItem(names, "Moral"))

// const names = ["Muano", "Tumi", "Moral"]

// const removeItem = (list, itemName) => {
//  return list.filter(item =>  item !== itemName) 

// }

// console.log(removeItem(names, "Moral"))



// function findMultiples(integer, limit) {
//     const list = [];
//       for( let i = 1; i <= limit; i += 1){
//        if(integer * i <= limit){
//          list.push(integer * i)
//        } 
//       }
//       return list
//     }



// const numbers = [40, 20, 80, 90, 100];

// const getHighestAndLowest = (array) => {
// for(var i in array){
//     if(array[i] < 0){
// }
// }
// return array[i]
// }

// console.log(getHighestAndLowest(numbers))



// const numberArr = [23, 122, 1, 23, 4, 56];

// const getHighestAndLowest = (array) => {

// const highest = Math.max(...array);
// const lowest = Math.min(...array);

// }

// console.log(getHighestAndLowest(numberArr))

// console.log("Highest Number: " + highest); // Highest Number: 122

// console.log("Lowest Number: " + lowest); // Lowest Number: 1



// return the highest and the lowest 

// const numbers = [20, 22, 2, 4, 6, 8, 10, 600, 100,];

// const getHighestAndLowest = (array) => {

// return [Math.min(...array), Math.max(...array)];
// }

// console.log(getHighestAndLowest(numbers))



// return the highest.

// const numbers = [1, 2, 3, 6, 12, 13, 17, 3];

// const getHighest = (array) => {

//     var largest = 0;

//     for (var i in array) {
//         if ( largest < array[i] ) {
//             largest = array[i];
//         }
//     }
//     return largest
// }

// console.log(getHighest(numbers));


// const getTotal1 = (array , name) => {
//     var sum = 0
//     for(var i in array){
//         if(array[i] === name){
//             sum  = sum + 1
//         }
//     }
//     return sum
// }


// const items = ["sbu" ,"sbu" , "thato" ,'ten' , 'ten']
// const getTotal2 = (array , name) => {
//     const filterList = array.filter(element => element === name)
//     return filterList.length
// }

// console.log(getTotal2(items , 'thato'))

// const items = ["sbu" ,"sbu" , "thato" ,'ten' , 'ten']


// const number1 = [1, 2, 10];
// const number2 = [2, 4, 1];

// const getTotal = (list1, list2) => {
//    for (var i in list1) {
//       for(var i in list2){
//          sum = list1[i] + list1[i]; 
//        }
//    }    
//    return sum
// }

// console.log(getTotal(number1, number2));



// const names = [{ name: "Ten", marks: 10 }, { name: "Thato", marks: 200 }, { name: "sbu", marks: 30 }]

// const getHighestStudent = (students) => {
// var highest = {marks: 0}
//    for (var i in students) {
//       if(students[i].marks > highest.marks){
//          highest = students[i]
//       }
// }

// return highest
// }

// console.log(getHighestStudent(names))



// function simpleMultiplication(number) {
//    if(number % 2 == 0){
//      return number * 8
//    }else{
//       return number * 9
//    }
// }

// console.log(simpleMultiplication(7))



// function uniqueArray2(arr) {
//    var a = [];
//    for (var i=0, l=arr.length; i<l; i++)
//        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
//            a.push(arr[i]);
//    return a;
// }


// const names = [
//    { name: "Muano", surname: "Nevhufumba", marks: 100 },
//    { name: "Kamva", surname: "Zitho", marks: 60 },
//    { name: "Tumi", Nevhufumba: "Ramolo", marks: 70 },
//    { name: "Wonagni", surname: "Sikhosana", marks: 10 },
// ]

// const passedStudent = (list) => {
//    let newlist = []
//    for(var i of list){
//       if(i.marks >= 50){
//          newList.push(i.marks)
//       }
//    }
//    return newList
// }

// const passedStudent = (list) => {
//    let newList = []
//    for(var i in list){
//       if(list[i].marks >= 50){
//          newList.push(list[i].marks)
//       }
//    }
//    return newList
// }

// console.log(passedStudent(names))



// const names = ["Thato", "Thato", "Sbu", "Sbu", "Sbu"]

// const getTotalCount = (array , name) => {
//     var sum = 0
//     for(var i in array){
//         if(array[i] === name){
//             sum  = sum + 1
//         }
//     }
//     return sum
// }
// console.log(getTotalCount(names,"Sbu"))


// const names = ["That", "Sbu", "Sb", "muano", "Tumisang"]

// const getLongestString = (array) => {

//     var longestString = "";

// for (var i in array) {
//     if (array[i].length > longestString.length) {
//         longestString = array[i];
//     }
// }
// return longestString
// }
// console.log(getLongestString(names))

// const names = ["That", "Sbu", "Sb", "muano", "Tumisang"]
// const names1 = ["That", "Sbu", "Sb", "muano"]

// const getLongestString = (array) =>{
//     var longestWord = "";

//     array.forEach(function(word) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });

//     return longestWord;
// }

// console.log(getLongestString(names))
// console.log(getLongestString(names1))

// program to generate a multiplication table

// take input from the user


// students = [
//    { name: "Muano", marks: 20 },
//    { name: "Tumi", marks: 30 },
//    { name: "Kamva", marks: 40 }
// ]

// getStudentBelowAvarage = (array) => {
//    newMarks = [];
//    getStudentBelowAvarage = [];
//    for (i of array) {
//       newMarks.push({ name: i.name, marks: i.marks * 2 })
//    }
//    for (i of newMarks) {
//       if (i.marks < 50) {
//          getStudentBelowAvarage.push(i)
//       }
//    }
//    return getStudentBelowAvarage
// }
// console.log(getStudentBelowAvarage(students))


// getStudentBelowAvarage = (array) => {
//    newMark = [];
//    getStudentBelowAvarage = [];
//    for (i in array) {
//       newMark.push({ name: array[i].name, marks: array[i].marks * 2 })
//    }

//    for (i in newMark) {
//       if (newMark[i].marks < 50) {
//          getStudentBelowAvarage.push(newMark[i])
//       }
//    }
//    return getStudentBelowAvarage
// }
// console.log(getStudentBelowAvarage(students))


// const numbers = [2, 2, 4, 6, 10, 10]

// const removeDuplicats = (array) => {
//    const newArray = []
//       for(var i= 0; i < array.length; i++){
//       if(newArray.indexOf(array[i]) === -1){
//             newArray.push(array[i])
//          }
//    }

//    return newArray
// }
// console.log(removeDuplicats(numbers))



// const numbers = [2, 2, 4, 6, 10, 10]

// const removeDuplicats = (array) => {
//    const newArray = [];
//    for (var i in array) {
//       if (newArray.indexOf(array[i]) === -1) {
//          newArray.push(array[i])
//       }
//    }
//    return newArray
// }

// console.log(removeDuplicats(numbers))



// const marks = [2, 4, 6, 7, 8]

// const getAvarage = (array) => {
//     sum = 0
//       for(var i in array){
//       sum = sum + array[i]/array.length
//       }
//      return sum/10 * 100
//    }

// console.log(getAvarage(marks))

// // ////////////////////////////////add only positive numbers

// const numbers = [1, 2, -3, -4, -5, ]

// function positiveSum(arr) {
//     let sum = 0;
//     for(var i in arr){
//     //   console.log(arr[i])
//       if(arr[i] >= 0  ){
//         sum += arr[i]
//       }
//     }
//     return sum
//   }

//   console.log(positiveSum(numbers))

// // getAverage with objects.

//   const marks = [{ name: "Thabo", mark: 15 }, { name: "Muano", mark: 15 }, { name: "Angel", mark: 15}];

// const getAverage = (array, totalMark) => {
//     var sum = {mark: 0}
//     for (var i in array) {
//         sum.mark = sum.mark +  array[i].mark
//     }

//     var value = sum.mark / array.length

//     var sumValue = value / totalMark 
//     return sumValue * 100
// }
// console.log(getAverage(marks , 20))

// const marks = [{ name: "Thabo", mark: 6 }, { name: "Muano", mark: 6 }, { name: "Angel", mark: 15 }];

// const getAverage = (array, totalMark) => {
//    var sum = 0;
//    for (var i in array) {
//       sum = sum + array[i].mark
//    }

//    var value = sum / array.length

//    var sumValue = value / totalMark
//    return sumValue * 100
// }
// // console.log(getAverage(marks , 20))


// getStudentAboveAverage = (array, totalMark) => {
//    var averageStudent = getAverage(array, totalMark)
//    studentABoveAverage = [];
//    for (var i in array) {


//       if (getAverage([array[i]], totalMark) > averageStudent) {
//          studentABoveAverage.push(array[i])
//       }
//    }
//    return studentABoveAverage

// }

// console.log(getStudentAboveAverage(marks, 20))




// const numbers = [2, 2, 4, 6, 10, 10, 10]

// const removeDuplicats = (array) => {
//    const newArray = [];
//    for (var i in array) {
//       if (newArray.indexOf(array[i]) === -1) {
//          newArray.push(array[i])
//       }
//    }
//    return newArray
// }

// console.log(removeDuplicats(numbers))



// var a = 0; 
// var b = 40;
// function remainder(a, b){
   // Divide the larger argument by the smaller argument and return the remainder
   
//    if(a > b && b === 0){
//      return NaN;
//    } else if(b > a && a === 0){
//      return NaN;
//    }
//    return a > b ? a % b : b % a
//  }

//  console.log(remainder(a, b))


// numberSet = -1

// function opposite(number) {
//    return - number
//  }

//  console.log(opposite(numberSet))





// const values = [ 2, 4 , 6, "7", "b"]

// function halfAndReturnTotal(array) {
//   const arrayWithNoStrings = [];
//   const arrayWithOnlyPostiveNumbers = [];
//   const dividedList = [];
//   var sum = 0;

//   for (var i in array) {
//     if (array[i] < 0) {
//       arrayWithOnlyPostiveNumbers.push(array[i] * -1);
//     }
//     if (array[i] > 0) {
//       arrayWithOnlyPostiveNumbers.push(array[i]);
//     }
//   }

//   for (var i in arrayWithOnlyPostiveNumbers) {
//     if (typeof arrayWithOnlyPostiveNumbers[i] !== "string") {
//       arrayWithNoStrings.push(arrayWithOnlyPostiveNumbers[i]);
//     }
//   }

//   for (var i in arrayWithNoStrings) {
//     dividedList.push(arrayWithNoStrings[i] / 2);
//   }

//   for (var i in dividedList) {
//     sum += dividedList[i];
//   }

//   return sum;
// }

// console.log(halfAndReturnTotal(values));


// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.



// let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// function gooseFilter (birds) {
//    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//    return birds.filter(birds => geese.indexOf(birds) < 0)
   
//  };

//  console.log(gooseFilter(birds))



// return the lastfour values

//  const numbers = [ 2, 4, 6, 8 , 10 , 2, 4, 6, 82 , 310]
 
//  const returnLastFourItem = (array) => {
//     for(var i in array){
//        return array.slice(-4)
//     }
//  }

// console.log(returnLastFourItem(numbers))



// calculate average if it's an empty array return zero

// var numbers = [10, 20, 30, 40];

// function find_average(array) {
//  sum = 0;
//   for(var i in array){
//   sum = sum + array[i]
//   }  
//   return sum/array.length || 0;
  
// }

// console.log(find_average(numbers))



// function get the ratings


 
// 8 kyu Transportation on vacation

// const rentalCarsCost = (d) => {
//   let dayCost = 40;
// if(d >= 7){
//    return d * dayCost - 50
// } if(d >= 3){
//       return d * dayCost - 20 
//    } 
//    return d * dayCost
// }

// console.log(rentalCarsCost(6))

const rentalCarsCost = (day) => {
   let dayCost = 40

   if(day >= 7){
       return day * dayCost - 50
   }if(day >= 3){
       return day * dayCost - 20
   }
   return day * dayCost
}

console.log(rentalCarsCost(2))