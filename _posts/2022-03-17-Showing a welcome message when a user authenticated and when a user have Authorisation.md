---
Layout: 
Title: "Showing a welcome message when a user authenticated and when a user have Authorisation"
date: "2022-03-17"
---

# Introduction.

Showing welcome message when a user is authenticated and when a user have Authorisation, This is something that i thought will only be needed for Authorisation only, I just learned that we can do that both when a user is Authenticated and also when Authorised.   

# Body.

## Explanation.

Authentication is the process of verifying the identity of a person or device. A common example is entering a username and password when you log in to a website. Entering the correct login information lets the website know 1: who you are 2: that it is actually you accessing the website.


Authorization is a security mechanism to determine access levels or user/client privileges related to system resources including files, services, computer programs, data and application features, in simple words i can say Authorization is the process of giving someone permission to do or have something.

A user need to register first to have an access to my privatepage dashboard, The problem i have is that when a user register successfully they will just be taken to the dashboard page without anything like welcome message, The message will only appear when a user now is using the logIn form to access the website.

In my state that have all the details of the user i choose to display the username on the navBar and and also i wrote welcome welcome with the username of the user.

I use this Code on the dashBoard component:


import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const user = useSelector((state) => state.auth.user);


  return (
    <div className="dashboard">
    
      <header>
        <NavBar {...user}/>
      </header>

      <h2>
        Welcome welcome <span>{user.username}</span>

      </h2>
    </div>
  );
};

export default DashBoard;


This will apply only when a user logIn, I'm trying to do the same thing also when a user is registering because when a user is registering nothing is being displayed at the moment.

useSelector allows us to access the properties within the functional component without passing the props.

# Conclusion: 

I don't have the solution yet on how i'm going to show the welcome message and the username of the user when a user register, but i guess is the simmilar approach that i have applied when showin the message whe a user logIn is just the matter of knowing where i'm getting the state from. Because when registering i'm adding and saving the new user and save in the database. 


