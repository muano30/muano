---
Layout: 
Title: "Validate backend using package"
date: "2022-03-10"
---

# Introduction.

I'm working on how to validate backend using a package called @hapi/joi, i will share how far i know about this package and what i have done upto so far with the package.

# Body.

## Explanation.

@hapi/joi is a package we can use to validate the backend, and currently i have appllied it in my login and register form project.

To use it i had to install it using npm install @hapi/joi and it will appear under dependencies in the package.json file. 

after doing that i created a file called validation.js inside the validation file i declared a variable called const joi  and i assing require("@hapi/joi") to it.

There are two form that i want to validate which is login and register form, in the register form i have  username, email and password for a user to register, in my login form i have email and password for user to login using the email and password they have used when registering, if the user try to login using false information they will never get an access because information a user have to provide have to match the information saved in the backend.


The code that i have used to validate my backend is as follows:

const Joi = require("@hapi/joi");

const registerValidation = (data) => {

  const schema = Joi.object({

    username: Joi.string().min(6).required(),

    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),

  });

  return schema.validate(data);
};

const loginValidation = (data) => {

  const schema = Joi.object({

    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),

  });

  return schema.validate(data);

};

module.exports = { loginValidation, registerValidation };

As provided in the variable registerValidation all the input must have a minimum of six character if it is less than that the access to register will be dinied. and the message for the error a user have committed must be displayed which i havent done so far hope the i will figure out how to do that and i i'm able to do that i will explain in the next project. @hapi/joi comes with all the error message a user will commit like if the user type less than six character it will show that the user name should me six character long  etc, where do we see that error, on the console log we go to the network and click on the action that we have taken will get the error message and the respond of that message, same applies to the logInValidation.


# Conclusion.

 If you have time you can try to look at what i have done on my project using this gitHub link https://github.com/muano30/JSON-WEB-TOKEN/tree/main/auth/client



