---
Layout: 
Title: "How to Apply useEffect."
date: "2021-09-08"
---

# Introduction.

In this blog post i will share how to use useEffect by creating a count app.

# Body.

  import React, {useState, useEffect} from 'react'

  function Count (){
      const [count, setCount] = useState(0);
      
      useEffect(()=>{
          document.title = ` You Clicked ${count} times`
      });
      return(
          <div>
          <p>You Clicked {count} times</p>
          <button onClick=setCount(count + 1)>Click Me</button>
          </div>
      );
  }

export default App

As i have explain in the previous blog post useEffect works the same as lifeCycle we have learned in class component but use effect combine both lifeCycle at once.

By using this Hook, i'm tell React that your component needs to do something after render. React will remember the function i have passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

 Placing useEffect inside the component lets us access the count state variable or any props right from the effect. We don’t need a special API to read it, it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React specific APIs where JavaScript already provides a solution.

By default  useEffect run after every render, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.


# Conclusion.

I have just learn what useEffect can do compared to lifeCycle. useEffect combine componentDidMount, componentDidUpdate and componentWillUnmount at once.