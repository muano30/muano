---
Layout: 
Title: "provider redux."
date: "2021-11-16"
---

# Introduction.

In this blog post i will share what i have learn about provider in redux what it is and why we use it.

# Body.

Provider is a component that makes the redux store available to any nested components that needs to access the Redux store. I know any React components in a React Redux app can be connected to the store. We use provider to pass the store as an attribute, by passing the store as an attribute in the provider components, we are avoiding having to store the store as props, and pass it as props into each components.


Here is an example on how to use Provider:

import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
)