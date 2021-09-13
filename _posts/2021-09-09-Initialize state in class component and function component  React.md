---
Layout: 
Title: "Initialize state in class component and function component React."
date: "2021-09-09"
---

# Introduction.
 
 In this Blog post i will just share how to initialize state in class component and function component, then we will be able to see the different between the two.

 # Body.

 ## Explanantion.

 ### Class Component.

 With class component i think we apply the same logic i have learned in javasScript, which we have a constructor which we use to initialize the object state in class. Then in react we have super inside the constructor which is used to call constructor for its parent class, this is used when we want to access some variables for its parent class.

 now this is how we write our state in class:

 class Example extends React.Component {

     constructor(props){

         super(props);

         this.state={

             count: 0,

         }

     }

 }

 props inside the constructor is the words for properties we use it to pass data from one component to another.

 ### Function component.

 In function component we use hooks, which are function that let us hook into react state and lifecycle component features.

First we have to import our hook in react which allows us to keep the local state in the function component. We have the hook called useState() is a Hook that allows us to have state variables in functional components. 
The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.

Import React, {useState} 'react';

function Example = () => {

const [count, setCount] = useState(0)

}

The first element is the initial state and the second one is a function that is used for updating the state.


# Conclusion.

We have to understand the different between the two how we initialize the state in class and function component, what i have notice is that in class component we had to write more line of code to set the state and in function we wrote few code.

