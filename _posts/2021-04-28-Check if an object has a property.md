---
Layout:
Title: "Check if an object has a property "
date: "2021-04-28"
---
# Introduction.

On the basic JavaScript i learn to check if an abject have property using "hasOwnProperty()" method, i have just learn that there is another method which can also help me to check if an object has a property.  

# Explanation.

## Example.

We've created an object, users with some users in it and a function isEveryOneHere, which we pass thr users object to as an arguments. finish writing this function so that it returns true only if the users object contains all of four names, Alan, Jeff, Sarah, and Ryan as keys and false otherwise.

function isEveryOneHere (obj) {

    if(

        'Alan' in users &&

        'Jeff' in users &&

        'Sarah' in users &&

        'Ryan' in users
    ) {

        return true;

    }

    return false;
}

console.log(isEveryOneHere(users))

# Conclusion.

The example above is the new way i've just learn, to check if an object has a property. HasOwnProperty() is not only the method we can use to check if an object has property.