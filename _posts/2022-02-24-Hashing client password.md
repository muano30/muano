---
Layout: 
Title: "Hashing Client password."
date: "2022-02-23"
---

# Introduction.

In this blog post i want to share how important it is to hash the password of our client, to avoid scammers. I learned that storing a password of a client as a plain text is never okay so we need to hash the password to protect it from hackers.

# Body.

### How does hashing work with passwords?

Hashing function take the user's password and use an algorithm to turn it into a fixed-length of data. The generated hash is compared to the hash stored in the database. If the generated hash and the stored hash match, you're granted access to the account. If the generated hash doesn't match, you get a login error.

## Explanation.

Lets say we building an app that require a user to register and login using password it is never okay to store the password excatly how the user have typed it in our database, we have a function called Bcrypt that helped us to avoid storing password as a plain text and hash it.

We have to handle hashing the password in two key areas the first is where we handle registrastion or saving new account, second when checking that a password is correct on login.

To use Bcrypt we have to install it in our package.json file and it will appear under dependencies, then import Bcrypt to where we want to hash our password like this <const bcrypt = require('bcrypt')>

# Conclusion.

If you want to learn more about why we need bcrypt use this link, https://danboterhoven.medium.com/why-you-should-use-bcrypt-to-hash-passwords-af330100b861