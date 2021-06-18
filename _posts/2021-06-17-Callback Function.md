---
Layout: 
Title: "Callback Function."
date: "2021-06-17"
---

# Introduction.

In JavaScript, a callback is a function passed into another function as an argument to be executed later. When you pass a callback function into another function, you just pass the reference of the function i.e., the function name without the parentheses ().

Callbacks are a great way to handle something after something else has been completed. If we want to execute a function right after the return of some other function, then callbacks can be used.

# Body.

## Code example.

const greeting = (name) => {

    console.log('Hello ' + name);

}

const processUserName = (callback) => {

    let name = 'Muano';
    
    callback(name);
}

processUserName(greeting);

In the above example notice that greeting passed as an argument (callback) to the ‘processUserName’ function. Before the ‘greeting’ function executed it waits for the event ‘processUserName’ to execute first.

# Conclusion.

Callback is one of the JavaScript concept that is a must to understand. 

