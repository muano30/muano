---
Layout: 
Title: "React toastify"
date: "2022-03-15"
---

# Introduction.

I have been looking for package that i can use to indicate the erros UI(user inteface) front frontEnd i have just found out that the is a package called react toastify which i can use to show the errors a user is getting.

# Body.

## Explanation.

Code example of how to apply react toastify.

import "./styles.css";

import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

// CALL IT ONCE IN YOUR APP

if (typeof window !== "undefined") {
  injectStyle();
}

export default function App() {
  function notify() {
    toast.dark("Hey 👋, see how easy!");
  }

  return (
    <>
      <div className="App">
        <div className="btn-group">
          <button className="btn" onClick={notify} id="animate.css">
            click me
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

The above code is just a simple example of how react-toastify works, i will not give much of an explanation, but when a user click on the button they will get a message from a notify fuction.  


# Conclusion.

Use this link to learn more about the above code in react toastify: https://codesandbox.io/s/qfg0l?file=/src/App.js
