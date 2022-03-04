---
Layout: 
Title: "Provider-Redux."
date: "2022-03-03"
---

# Introduction.

In this blog post i will share what i have learn about provider in redux what it is and why we use it.

# Body.

Provider is a component that makes the redux store available to any nested components that needs to access the Redux store. I know any React components in a React Redux app can be connected to the store. We use provider to pass the store as an attribute, by passing the store as an attribute in the provider components, we are avoiding having to store the store as props, and pass it as props into each components.

Here is an example on how to use Provider:


Inside the src folder of react app there's index.js file, if we get inside the index file we will find a code like this:

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  document.getElementById('root')

);

Then the next step we wrapp the App with the provider like the following:

ReactDOM.render(

 <React.StrictMode>

  <Provider store={store}>

    <App />

  </Provider >

    </React.StrictMode>,

  document.getElementById('root')

);

Note: This doesn't mean we have set the redux flow because the flow needs a lot of things to be done, what we have just done is one step of redux flow, we need to install and importing packages, for this case all need to do is to install the react-redux package this is how we install is ( npm install react-redux ) after wrapping our app is to import provider.

This is how we import provider:

import {Provider} from 'react-redux';


ReactDOM.render(

 <React.StrictMode>

  <Provider store={store}>

    <App />

  </Provider >

    </React.StrictMode>,

  document.getElementById('root')

);
