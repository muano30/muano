---
Layout: 
Title: "State and setState React"
date: "2021-08-11"
---

# Introduction.

I will share the different between state and setState in React and the reason i want to share this is because i was confused not knowing how to apply both of them.

# Body.

## Explanation.

### What Is ‘State’ in ReactJS?

The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render. 


### The setState() Method

State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

Always use the setState() method to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.

# Conclusion.

I think it is importtant to understand the different between the two before we can apply them in the code in order to understand what they do when we apply writting code.
