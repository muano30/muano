---
Layout: 
Title: "FreeCodeCamp Challenge, Delete Many Document with model.remove() ."
date: "2022-02-14"
---

# Introduction.

In this blog post i will just share the freeCodeCamp challenge that i have solved, after it took me so long to find out what was the problem with the solution that i have submitted and why i'm getting the error "Unexpected token".  

# Body.

## Explanation.

We were required to delete all the people whos names is in the variable nameToRemove.

My solution is as follows. but when i run this it will not pass i was getting an error that say "Error unexpected Token".

const removeManyPeople = (done) => {
const nameToRemove = "Mary";
Person.deleteMany({"name" : nameToRemove} , (err , data) => {
if(err) return console.error(err);
done(null , data);
})

Then i had to search about this error and find out about it. Then the solution that will pass is as follows.

const removeManyPeople = (done) => {
 const nameToRemove = "Mary";
  Person.deleteMany({"name" : nameToRemove} , (err , data) => {
      if(err) return console.error(err);
     data.ok = true;
     data.n = data.deletedCount;
     done(null , data);
   })


if you compare the two code you will realise that i had to add only two lines which is data.ok = true and data.n = data.deletedCount

If you check the code at server.js line 346 it’s in an if statement

if (data.ok === undefined) {
The code expects an ok property and if it’s not present, it tries to parse the data as json.
The problem here is that data is already an object, it’s not a string. So string form of the data is [object Object] and the first o is causing the Unexpected token o in JSON at position 1 error.

data.ok is for the aforementioned if statement and data.n is for server.js line 353.


# Conclusion.

It is important to understand where the error is coming from and why we getting the error because that helps us to solve the error we getting. I would not have find this solution if i had no idea of what i was searching about.


