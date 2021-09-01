---
Layout: 
Title: "Component lifecycle."
date: "2021-08-31"
---

# Introduction.

React component lifecycle I haven't used this in my project yet but i think its important to understand them, i will share the life cycle that i have done just for understanding.

# Body.

## Explanantion.

### Mounting

Since class based components are classes, hence the name, the first method that runs is the constructor method. Typically, the constructor is where you would initialize component state.

then, the component runs the getDerivedStateFromProps. Now we come to the render method which returns the JSX. Now React mounts onto the DOM.

Lastly, the componentDidMount method runs. Here is where you would do any asynchronous calls to databases or directly manipulate the DOM if you need. Just like that, our component is born.

### Updating

This phase is triggered every time state or props change. Like in mounting, getDerivedStateFromProps is called, but we have no constructor this time.

Next shouldComponentUpdate runs. Here you can compare old props or state with the new set of props or state. You can determine if your component should re-render or not by returning true or false. This can make your web app more efficient by cutting down on extra re-renders. If shouldComponentUpdate returns false, this update cycle ends. If not, React re-renders and getSnapshotBeforeUpdate runs afterwards. This method has limited use as well. React then runs componentDidUpdate. Like componentDidMount you can use it to make any async calls or manipulate the DOM.

### Unmounting

Our component lived a good life, but all good things must come to an end. The unmounting phase is that last stage of the component lifecycle. When you remove a component from the DOM, React runs componentWillUnmount right before it gets removed. You should use this method to clean up any open connections such as WebSockets or intervals.

### Other Lifecycle Methods

Other lifecycle method is forceUpdate and getDerivedStateFromError.

forceUpdate is a method that directly causes a re-render. While there may be a few use cases for it, it should typically be avoided.

getDerivedStateFromError on the other hand is a lifecycle method that isn’t directly part of the component lifecycle. In the event of an error in a component, getDerivedStateFromError runs and you can update state to reflect that an error occurred. Use this method copiously.

# Conclusion.

The information above about lifecycle component is to help understand what the component does before we can apply them in our code, i think if we understanding how this lifecycle component works we can be able to use them in our code.