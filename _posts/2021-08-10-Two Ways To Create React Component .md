---
Layout: 
Title: "Stateless functional component and class component."
date: "2021-08-10"
---

# Introduction.

I have just learn that Component are the core of react and there are two ways two create React Component. The first way is by defining the stateless functional component which i will share with you in this blogPost.

# Body.

Stateless component is one that receive data and render it, but it cannot manage or track changes to that data.

The important thing in react is that it requires the function name to start with a capital letter.


1 Functional Components.

 Functional components are javascript functions. By writing a javascript function, we can create a functional component in React Apps. To make React app efficient, we use functional component only when we are sure that our component does not require to interact with any other components. Functional components do not require data from other components.

 Example.

function Title()

{

    return <h1>I am Title</h1>;

}

2 Class Components.

The class components are similar to the functional component but has some additional features that makes class component a little more complex than the functional components. The functional components do not care about the other components in your app whereas the class components can work with each other. We can pass data from one class component to other class component.

example.

class Title extends React.Component

{
    render(){

          return <h1>I am Title</h1>;

    }

}

# Conclusion.

I think now i know the different between functional and class component, from the explanation above functional component doesn't care about other component, whereas class does include other component meaning i can pass data from one component to other when using class.

