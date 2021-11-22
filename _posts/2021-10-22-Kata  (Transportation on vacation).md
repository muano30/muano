---
Layout: 
Title: "Kata (Tranportation on vacation)."
date: "2021-10-22"
---

# Introduction.

I solved the kata that says transportation on vacation, i will share my solution with you and how i came up with the solution.

# Body.

## Explanation.


Queston: 

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).


My solution:

const rentalCarsCost = (day) => {
    let dayCost = 40

    if(day >= 7){
        return day * dayCost - 50
    }if(days >= 3){
        return day * dayCost - 20
    }
    return day * dayCost
}

console.log(rentalCarsCost(2))  (output 80)


As you can see what we have done here is to declare and assign the dayCost variable to price of the rentalCarCost per day, and this variable will only be accessed inside this function but not outside this function.

The next step we wrote is if statement to check the condition that day is greater than or equal to day seven and if the condition is true it will return day * dayCost - 50, the reason we multipy day with dayCost is to get the total price of the days they rented the car, then subtract with 50 because on the question we are told that if they rent a car for seven day or more they will get the discount of $50.

Then for three days or more we apply the same procedure we apply for seven days but condition is greater than or equall to three days and subtract with 20 beacuse we are told that for three days or more we get discount of $20.

The lats part was just to return the day mutiply with dayCost because we dont have any discount for day one and two.


We learned that javascript read code from top to bottom, What will happen is that if the argument we pass in the function is two, two will be checked in the first condition and it will fail because 2 is less than 7, then goes to second condition and it will also fail because two is less than 3 the on the last part where we ruturn day * dayCost it will pass then we will get the results of 80 because $40 multipy with 2 days is $80.


# Conclusion.

Solving problem is funny but the tricky party about solving katas is to rush to answer without understanding the Question i learned to understand question first before i answer it, because that leads to answering the question the wrong way.