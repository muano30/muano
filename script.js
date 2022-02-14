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

// const rentalCarsCost = (day) => {
//    let dayCost = 40

//    if(day >= 7){
//        return day * dayCost - 50
//    }if(day >= 3){
//        return day * dayCost - 20
//    }
//    return day * dayCost
// }

// console.log(rentalCarsCost(2))


//kata i love howMuchILoveYou, a little, a location, passionately...not AT


// function howMuchILoveYou(nbPetals) {
// let reference = [
//    "I love you",
//    "a little",
//    "a lot",
//    "passionately",
//    "madly",
//    "not at all"
// ]

// return reference[(nbPetals - 1) % reference.length]
// }


// console.log(howMuchILoveYou(8))

// let students = [
//    {id: 1, name: "Muano"},
//    {id: 2, name: "Tumi"}

// ]

// const replaceOBj = (array, obj, id) => {

//    for(let i in array){
// console.log(array[i])

//       if(array[i].id === id){
//          array[i] = obj
//       }
//    }
// return array
// }

// console.log(replaceOBj(students,{id: 3, name: "Sbu"}, 1))



// let arrayOne = ['a', 'b', 'c', 'd'];
// let arrayTwo = [1, 2, 3, 4];

// let arraysCombined = [...arrayOne, ...arrayTwo];


// given a string with numbers and letters return separate array with numbers and letters .

// const values = "128bc1012fg"

// const separateNumberAndLetters = (string) => {

//    var newNumbers = []
//    var newLetters = []
//    for (var i in string) {
//       if (isNaN(string[i])) {
//          newLetters.push(string[i])
//       }else{
//          newNumbers.push(string[i])
//       }
//    }

// return [newNumbers, newLetters]
// }

// console.log(separateNumberAndLetters(values))


// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.


// const century = year => {
//    const result = String(year / 100).split('.')
//    return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])

// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(89))


// const century = year => {
//    return Math.ceil(year / 100)
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(89))


// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// const move = (position, roll) => {
// return position + (roll * 2)
   
// }


// function move (position, roll) {
   
//    return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
// }

       
// const move = (position, roll) => {
//    if(roll >= 1 && roll <= 6){
//       return roll * 2 + position 
//    }else{
//       return null
//    }
// }


// console.log(move(8, 7))

   // const cal_time = (distance, speed) => {
   //    return distance / speed
   // }

   // console.log(cal_time(20, 3.6))


//    function minTommss(minutes){
//       var sign = minutes < 0 ? "-" : "";
//       var min = Math.floor(Math.abs(minutes));
//       var sec = Math.floor((Math.abs(minutes) * 60) % 60);
//       return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
//      }

// console.log(minTommss(12.2))


// const calculateWalkingTime = (distance, speed = 3.6) => {
//    return distance / speed
//    }

// const time = (decimalTimeString) => {  
// var decimalTimeString = calculateWalkingTime(1);
// var decimalTime = parseFloat(decimalTimeString);
// decimalTime = decimalTime * 60 * 60;
// var hours = Math.floor((decimalTime / (60 * 60)));
// decimalTime = decimalTime - (hours * 60 * 60);
// var minutes = Math.floor((decimalTime / 60));
// decimalTime = decimalTime - (minutes * 60);
// var seconds = Math.round(decimalTime);
// if(hours < 10)
// {
// 	hours = "0" + hours;
// }
// if(minutes < 10)
// {
// 	minutes = "0" + minutes;
// }
// if(seconds < 10)
// {
// 	seconds = "0" + seconds;
// }
// return ("" + hours + ":" + minutes + ":" + seconds);
// }

// console.log(time())



//   const calculateDrivingTime = (distance, speed = 101) => {
//     if (speed <= 100) {
//       return distance / speed
//     } else{
//        return "Driving above speed limmit"
//     }
//   }

//   console.log(calculateDrivingTime(20))


// const add = (x, y) => {
// return x + y 
// }

// console.log(add(111, 1))

// function WordCount(str) {
   //  return str.split(' ')
         //   .filter(function(n) { return n != '' })
         //   .length;
// }

// console.log(WordCount("muano Nevhufumba"))


// dt1 = new Date("2019-11-27");
// dt2 = new Date("2018-06-28");
  
// function diff_year_month_day(dt1, dt2) 
// {

//  var time =(dt2.getTime() - dt1.getTime()) / 1000;
//  var year  = Math.abs(Math.round((time/(60 * 60 * 24))/365.25));
//  var month = Math.abs(Math.round(time/(60 * 60 * 24 * 7 * 4)));
//  var days = Math.abs(Math.round(time/(3600 * 24)));
//  return "Year :- " + year + " Month :- " + month + " Days :-" + days;
  
// }

// console.log(diff_year_month_day(dt1,dt2))

// startDate = new Date("1818-06-28");
// endDate =  new Date("2019-11-27");


// function getDateDifference(startDate, endDate) {
//   if (startDate > endDate) {
//     console.error('Start date must be before end date');
//     return null;
//   }
//   var startYear = startDate.getFullYear();
//   var startMonth = startDate.getMonth();
//   var startDay = startDate.getDate();

//   var endYear = endDate.getFullYear();
//   var endMonth = endDate.getMonth();
//   var endDay = endDate.getDate();

//   // We calculate February based on end year as it might be a leep year which might influence the number of days.
//   var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
//   var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
//   var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);

//   var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;

//   // (12 + ...) % 12 makes sure index is always between 0 and 11
//   var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;

//   return {
//     years: years,
//     months: months,
//     days: days
//   };
// }

// console.log(getDateDifference(startDate, endDate))


//    dateDifference(actualDate, value: boolean) {
//             // Calculate time between two dates:
//             const date1 = actualDate; // the date you already commented/ posted
//             const date2: any = new Date(); // today

//             let r = {}; // object for clarity
//             let message: string;

//             const diffInSeconds: number = Math.abs(date2 - date1) / 1000;
//             const days: number = Math.floor(diffInSeconds / 60 / 60 / 24);
//             const hours: number = Math.floor(diffInSeconds / 60 / 60 % 24);
//             const minutes: number = Math.floor(diffInSeconds / 60 % 60);
//             const seconds: number = Math.floor(diffInSeconds % 60);
//             const milliseconds: number = 
//            Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

//             const months: number = Math.floor(days / 31);
//             const years: number = Math.floor(months / 12);

//             // the below object is just optional 
//             // if you want to return an object instead of a message
//             r = {
//                 years,
//                 months,
//                 days,
//                 hours,
//                 minutes,
//                 seconds,
//                 milliseconds
//             };

//             // check if difference is in years or months
//             if (years === 0 && months === 0) {
//                 // show in days if no years / months
//                 if (days > 0) {
//                     if (days === 1) {
//                         message = days + ' day';
//                     } else { message = days + ' days'; }
//                 }  else if (hours > 0) {
//                     // show in hours if no years / months / days
//                     if (hours === 1) {
//                         message = hours + ' hour';
//                     } else {
//                         message = hours + ' hours';
//                     }
//                 } else {
//                     // show in minutes if no years / months / days / hours
//                     if (minutes === 1) {
//                         message = minutes + ' minute';
//                     } else {message = minutes + ' minutes';}  
//                 }
//             } else if (years === 0 && months > 0) {
//                 // show in months if no years
//                 if (months === 1) {
//                     message = months + ' month';
//                 } else {message = months + ' months';}
//             } else if (years > 0) {
//                 // show in years if years exist
//                 if (years === 1) {
//                     message = years + ' year';
//                 } else {message = years + ' years';}
//             }

//             // To display either an object or a message in the view
//            if (value === true) {
//                     return r;
//                 }
//             return message;
//         }




// express freecodeCamp.


// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// console.log("Hello World");


// app.use((req, res, next) => {
// var string = req.method + " " + req.path + " - " + req.ip;
// console.log(string)
//   next();
// });

// app.get("/", (req,res)=>{
//   res.sendFile(__dirname + "/views/index.html")
// })
// app.use("/public", express.static(__dirname + "/public"))

// const mySecret = process.env['MESSAGE_STYLE']
// app.get("/json", (req,res)=>{
//   if(process.env.MESSAGE_STYLE === "uppercase"){
//   res.json({"message": "Hello json".toUpperCase()})
// }else{
//   res.json({"message": "Hello json"})

// }
// })

// app.get("/now", (req,res, next)=>{
//   req.now = new Date().toString();
//   next();
// }, (req,res)=>{
//   res.send({time: req.now});
// } )

// app.get("/:word/echo", (req,res)=>{
//   const{word} = req.params
// res.json({echo: word})
// })

// app.get("/name", (req,res)=>{
//   var {first: firstname, last: lastname} = req.query;
//   res.json({name: `${firstname} ${lastname}`})
// })



// app.post("/name", function(req, res) {
//     var string = req.body.first + " " + req.body.last;
//     res.json({ name: string });
//   });


//  module.exports = app;




//  mongodb+srv://muano-user_01:<kevin30>@cluster0.y8i6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



// const reversedArray = (n) =>{
  // let reversed = n.toString().split('').reverse()
  // return reversed.map((n) => parseInt(n))
// }

// console.log(reversedArray(56789))



// const points = (games) => {
//   let answer = 0
//     for(const score of games) {
//         const arr = score.split(":")
//         if(Number(arr[0]) > Number(arr[1])) {
//             answer += 3
//         } else if (Number(arr[0]) == Number(arr[1])) {
//             answer += 1
//         }
//     }

//     return answer
// }

// console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))


// mongoBD and Mongoose

// MONGO-URI = mongodb+srv://muano-user_01:kevin30@cluster0.y8i6b.mongodb.net/freeCodeCampDataBase?retryWrites=true&w=majority


// require('dotenv').config();
// const mongoose = require("mongoose")
// const mySecret = process.env['MONGO_URI']
// mongoose.connect( mySecret, {useNewUrlParser: true})


// const personSchema = mongoose.Schema({
//   name: {type: String, required: true},
//   age: Number,
//   favoriteFoods: [String] 
// })


// let Person = mongoose.model("Person", personSchema);

// const createAndSavePerson = (done) => {
//   const muano = new Person({
//     name: "Muano Nevhufumba",
//     age: 20,
//     favoriteFoods: ["Eggs", "Fish", "Hard Body"]
//   })
//   muano.save(function(err,data){
//     if (err) return console.log(err);

//   done(null, data);
    
//   })
// };

// let arrayOfPeople = [
//   {name: "Muano", age: 20, favoriteFoods: ["Eggs", "Fish", "Hard Body"]},
//   {name: "Tumi", age: 25, favoriteFoods: ["Eggs", "Fish", "Hard Body"]},
//  {name: "Feydo", age: 30, favoriteFoods: ["Eggs", "Fish", "Hard Body"]}
// ]

// const createManyPeople = (arrayOfPeople, done) => {
//    Person.create(arrayOfPeople, function(err, peopleList){
//      if (err) return console.log(err);
//      done(null, peopleList);
//   })
// };

// const findPeopleByName = (personName, done) => {
//   Person.find({name: personName},function(err, found){
// if(err) return console.log(err)

//   done(null, found);
//   })
// };

// const findOneByFood = (food, done) => {
//    Person.findOne({favoriteFoods: food}, function(err, food){
//  if(err) return console.log(err)
//    done(null, food);
//    })
//  };
 
//  const findPersonById = (personId, done) => {
//    Person.findById(personId, function(err, personId){
//      if(err) return console.log(err)
//    done(null, personId);
//    })
//  };
 
//  const findEditThenSave = (personId, done) => {
//    const foodToAdd = "hamburger";
//    Person.findById(personId,(err, person) => {
//      if(err) return console.log(err)
 
//      person.favoriteFoods.push("foodToAdd");
 
//      person.save((err, updated) => {
//        if(err) return console.log(err)
//    done(null, updated);
//      })
//    })
 
//  };

// const findAndUpdate = (personName, done) => {
//    const ageToSet = 20;
//        Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
//      if(err) return console.log(err);
//      done(null, updatedDoc);
//    })
//  };
// const removeById = (personId, done) => {
//   Person.findByIdAndRemove(personId, (err,data)=>{
//     if(err) return console.log(err)
//   done(null, data);
//   })
// };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";
//   Person.deleteMany({name: nameToRemove},function(err, response){
//     if(err) return console.log(err)
//   done(null, response);
//   })
// };

// Well of ideas-Easy-Version

function well(x) {
   switch (x.filter(i => i === 'good').length) {
     case 0:
       return 'Fail!'
     case 1:
     case 2:
       return 'Publish!'
     default:
       return 'I smell a series!'
   }
 }

console.log((well(['good', 'bad', 'bad', 'bad', 'bad'])));