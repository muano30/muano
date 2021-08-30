---
Layout: 
Title: "Redux Reducers."
date: "2021-08-26"
---

# Introduction.

I have learned the reduce method in javaScript and now i'm learning reducer in redux, i will share with you the information that have just learned about reducer in redux.

# Body.

## Reducers

A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the Array.reduce() method.

Reducers must always follow some specific rules:

1. They should only calculate the new state value based on the state and action arguments

2. They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.

3. They must not do any asynchronous logic, calculate random values, or cause other side effects.

# Conlusion.

Reduce method was a challenge for me when i was learning JavaScript, Reducer in redux work similar to a callback reduce and i can see that they use it a lot in redux, i just need to improve my understanding of this method.

