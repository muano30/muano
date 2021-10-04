---
Layout: 
Title: "Different Ways to Write loop.."
date: "2021-09-15"
---

# Introduction.

In this blog post i will share different ways to write loop, the reason is because i have just learn a different way to write loop.

# Body.

## Explanation.

When i was doing freeCodeCamp i learn how to write a loop in this way "for( let i = 0; i < 1; i++)" and recently i have just learn what i think is the better way of writting a loop.

var number = [1, 2, 3, 4]

for (var i=0; i< number.length; i++){

    console.log(number[i])

}

The Above code is what i have learned in freeCodeCamp.

the below code is what i have just learned recently, which is the same expresion in the above code. 

let number = [1, 2, 3, 4]

for( let i in number){

    console.log(number[i])
    
}

# Conclusion.

I'm glad to have found a new way to write loop, because this is very simple and easy compare to the old way which sometimes one can make mistakes when writting it.