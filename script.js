
// Telephone Number ValidatorPassed


// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false




// function telephoneCheck(str) {

//     //Regex patterns
//     // -----------------------------------------------------------
//     let notAllowedCharsRegexp1 = /[a-zA-Z/.[!@#$%^[&*_+=\/`~]/g;
//     let parenthesisComboCheck1 = /^1\(\d\d\d\)/g;
//     let parenthesisComboCheck2 = /^1\s\(\d\d\d\)\s/g;
//     let parenthesisComboCheck3 = /^1\(\d\d\d\)\s/g;
//     let parenthesisComboCheck4 = /^1\s\d\d\d\)/g;
//     let parenthesisComboCheck5 = /^0|[2-9]\(/g;
//     let parenthesisComboCheck6 = /^0|[2-9]\s\(/g;
//     let parenthesisComboCheck7 = /^0|[2-9]\s/g;
//     let parenthesisComboCheck8 = /^1\s\d\d\d\s/g;
//     // -----------------------------------------------------------
    
//     let substringCheck = str.substring(0, 5);

//     if (substringCheck[0] === '(' && substringCheck[4] !== ')' ||
//         substringCheck[0] !== '(' && substringCheck[3] === ')' ||
//         str.length > 16) {
//         return false;
//     }

//     if (str.length > 9 && str.length <= 16) {

//         if (str[0] == 2 ||
//             str[0] === '(' && str[1] == 2 ||
//             notAllowedCharsRegexp1.test(str)
//         ) {
//             return false;
//         }

//         for (let i = str.length; i >= 7; i--) {
//             if (str[i] === ')' || str[i] === '(') {
//                 return false;
//             }
//         }
//         if (parenthesisComboCheck1.test(str) && !parenthesisComboCheck3.test(str) || parenthesisComboCheck2.test(str) || parenthesisComboCheck8.test(str)) {
//             return true;
//         }

//         if (parenthesisComboCheck4.test(str) || parenthesisComboCheck5.test(str) || parenthesisComboCheck6.test(str) || parenthesisComboCheck7.test(str)) {
//             return false;
//         }

//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(telephoneCheck("27576227382"));


// using slice in a sentence

// var txt = "I can eat bananas all day";
// var x = txt.slice(18,21);

// console.log(x)


//  here to access strings in array.

// var cars = ["Saab", "Volvo", "BMW"];
// var x = cars[1];

// console.log(x)

// ceate a loop that runs as long as i is less than 10, but increase i with 2 each time.

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i + 2;
// }

// loop that will iterate through the fruits.

// var fruits = ['banana', "water"]
// for( i of fruits){
    // console.log(i)
// }


// Make the loop stop when i is 5.


// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// Make the loop jump to the next iteration when i is 5.

// for (i = 0; i < 10; i++) {
//     if (i == 6) {
//       continue;}
//     console.log(i);
//   }


// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first)


// Cash register freecodecamp. 

// function checkCashRegister(price, cash, cid) {
//     let change = cash-price
//     let totalCid = 0
//     let status = {status:'', change: []}
  
//     let cidObj = {
//       "PENNY": .01,
//       "NICKEL": .05,
//       "DIME": .1,
//       "QUARTER": .25,
//       "ONE": 1,
//       "FIVE": 5,
//       "TEN": 10,
//       "TWENTY": 20, 
//       "ONE HUNDRED": 100}
  
//     for (let i = 0 ; i < cid.length; i++){
//       totalCid += cid[i][1]
//     }
  
//     totalCid = Number(totalCid.toFixed(2))
   
//     if (change === totalCid){
//       status.status = "CLOSED"
//       status.change.push(cid)
//       return status
//     } else if (totalCid < change){
//       status.status = "INSUFFICIENT_FUNDS"
//       status.change = []  
//     } else {
//         for (let i = cid.length-1 ; i >= 0; i--){
//           if (change >= cidObj[cid[i][0]] && change >= cid[i][1]){
//             status.change.push(cid[i])
//             change -= cid[i][1]
  
//           } else if (change >= cidObj[cid[i][0]] && change < cid[i][1]){
//               let amount = Math.floor(change/cidObj[cid[i][0]])*cidObj[cid[i][0]]
  
//               status.change.push([cid[i][0], amount])
//               change -= amount
//           }
//         } 
//     }
    
//     change = Math.round(change * 100) / 100;
  
//     if (change !== 0){
//       status.status = "INSUFFICIENT_FUNDS"
//       status.change = []
//     } else {
//       status.status = "OPEN"
//     }
//     return status;
//   }
  
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


// hoisting (declaring our function before we invoke it)

// dogSays("hoof!");

// function dogSays(sound) {
//     console.log(sound);
// }

// This how you we use Call,Apply and Bind Method.

// var obj={
    // num : 2
//   }
//  var add = function(num2,num3,num4){
    //  return this.num + num2 + num3 + num4;
//  }
//   var arr=[3,4,5];
  //Call method 
//   console.log(add.call(obj,3,4,5));  //Output : 14
  //Apply method
//   console.log(add.apply(obj,arr));   //Output : 14
  //bind Method
//   var bound = add.bind(obj);
//   console.log(bound(3,4,5));         //output : 14 

// // Emmidiately envoked function. 

// let  paintColor = "red"

// const paint =(() => {
//   return {
//     changeColorToBlue: () => {
//       paintColor: "Blue";
//       return paintColor;
//     },
//     changeColorToGreen: () => {
//       paintColor: "Green";
//       return paintColor;
//     }
//   }
// })();

// console.log(paint.changeColorToBlue());

// closure examples. 


// const first = () => {
//   let greet = "Hi";

//   const second = () => {
//     let name = "Muano";
//     console.log(`${greet}, ${name}`)
//   }
//   return {

// greet,
// second
//   }
// }

// const newFunc = first()

// newFunc.second()

//  callback function.

// const sayName = (name) => {
//   console.log( "Hello " + name);
// }

// const user = (callback) => {
//   name = "muano";
//   callback(name);

// }

// user(sayName);

// const greeting = (name) => {
//   console.log('Hello ' + name);
// }

// const processUserName = (callback) => {
//   let name = 'Muano';
//   callback(name);
// }

// processUserName(greeting);










