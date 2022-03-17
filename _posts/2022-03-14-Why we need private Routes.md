---
Layout: 
Title: "Why we need private routes"
date: "2022-03-14"
---

# Introduction.

In this blog post i will share why we need private routes, and why it is important to have private routes.

# Body.

## Explanantion.

This is what we do to have private routes:

import React from 'react'
import DashBoard from "./DashBoard";
import LoginForm from "./LoginForm";
import Home from "./Home";
import RegisterForm from "./RegistrationForm";
import { Navigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";



function Main() {

  const  PrivateRoute = ({ children })  => {
    var determineAuth = false
    let token = localStorage.getItem('token');
    if(token) {
      determineAuth = true
    }
  
  
    return determineAuth ? children : <Navigate to="/" />
  }

  return (
    <div>
      <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>} />

<Route path="/Dashboard" element={

          <PrivateRoute>

<DashBoard />

</PrivateRoute>

} />
          <Route path="/user/register" element={<RegisterForm/>} />

          <Route path="/user/login" element={<LoginForm/>} />

          </Routes>

      </Router>

    </div>

  );

}

export default Main;


As you can see in the code above, inside my function Main i have Component that are not covered by PrivateRoute and only one component DashBoard is covered with PrivateRoute, the reason is covered by Private route is because it will only be accessed by a user who have registered only, it will require a user to register to have an access to the component.

If the component is not inside the PrivateRoute it will accessed by a user who is not registerd and the main purpose is to have a user register first to have an access to the page.


# Conlusion. 

What i have notice id that the old way of doing this is nolonger working, so it is better to look for the new way which is what i have provided on this blogPost but find otherways where maybe they have explained better.








