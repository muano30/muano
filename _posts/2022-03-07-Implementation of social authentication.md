---
Layout: 
Title: "Implementation of social authentication."
date: "2022-03-07"
---

# Introduction.

This blog post is just about how we suppose to implement the social authentication in our app.
Authentication is the process of verifying the identity of a person or device. A common example is entering a username and password when you log in to a website.

# Body.

## Explanation.

The basic path that authentication will have to follow in the app is:

1. User click a button or link sending them to our route to authenticate using a specific strategy. (eg GitHub).

2. The route calls passport.authentication('gitHub') which redirect to gitHub.

3. The page the user lands on gitHub, allows them to login i they aren't.It then ask them to approve access to their profile from our app.

4. The user is the then returned to our app at a specific callback url with their profile if they are approved.

5. They are now authenticated, and the app should check if it is a returning profile, or save it in your database profile if it is not.

This strategy with OAuth require us to have at least a client ID and a client Secret, which is a way for the service to verify who the authentication request is comming from and if it is valid.

We obtain all of this from the site we are tying to implement authentication with such as gitHub and are unique to  the app, they are not to be shared with and should never be uploaded to public repository or written directly in our code.

So a common practise is to put them in our .env file and reference them like so. process.env.GITUB_CLIENT_ID.
