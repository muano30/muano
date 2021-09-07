---
Layout: 
Title: "How to use state in Functional component."
date: "2021-09-06"
---

# Introduction.

I learn  how to set a state in class component, now i have to learn how to set state in functional component,there is a different because in the functional component we have to use what is called hooks.

# Body.

## Explanation.

Function components can now use state. Before this, data from the state had to be passed down as props from class components to function components or you had to convert your function component to a class component. Now, we can use React hooks, and to use state we can use the useState hook. You declare a state variable along with a set state variable by using array destructuring instead of declaring state as an object and setting as many properties as you need all at once.

import React, { useState } from 'react';

const FunctionComponent = () => {

  const [list, setList] = useState([]);

  const [currentItem, setCurrentItem] = useState('');

  return ();
}

export default FunctionComponent

# Conclusion.

The example above is just an example of how to set state in functional component using react hooks, i think it is important to move step by step understanding how this react hooks works.