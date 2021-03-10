---
Layout:
Title: "Recursion"
date: "2021-03-10"
---

# Introduction.
 
 Today i will share an information about RECURSION, what is it?, the example of it, why do we have to apply it and where to apply it.

# What is Recursion.

 When a fuction calls itself until it doesn't.

# Example.

 Here i will repeat the example that i've learned because it makes me understand it better but this is not the only example, i discovered that there are more complex example or code i will need to understand but this make it easy for me to start. 


## Lets say we want to Count down from ten.
      
      countdownfrom(10)

    let countdownfrom = (num) =>  {
        console.log(num)
        countdownfrom(num-1)
        }
      
      
       If we run the code above will see that the computer will run this number untill -1500,  so the next step i will write a line we need to add to make it count to the number we want or where we want it to stop.

       In the same code above this is the line we have to add.

       "if (num === 0) return;"  after adding this line, when we run the code it will countdown until one.
    
# Conclusion.

This is not the only example for recursion, i have to find more and complex example, but this example for the start it helped me to understand.  
 



