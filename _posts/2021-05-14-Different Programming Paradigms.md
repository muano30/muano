---
Layout:
Title: "Different programming paradigms."
date: "2021-05-14"
---

# What is paradigms programming.

Is about how we write, structure and organise our code, it also depend on how we reason about our program which style we think will be best in the program we want to build.

# Functional programming.

Functional programming paradigms is the form of programming that we use to avoid changing state and mutable data. Here the output of a function is always the same and this is because the outputs of a function relies on arguments of the function, given the same exact input to the function, and there is no magic that is happening behind the scenes. This helps us with eliminating the side effets in our code. Functional programming work best when there are no histories to deal with. It works particularly well when there are no boundaries required, or those boundaries are already predefined. It thrives in situations where the state is not a factor and there is very little to no involvement with mutable data.

Functional programming only have pure function and pure function takes an argument as an input and whose output is a return value. The example of this is that if a function depend on a global or class members data it is not pure. functional Programming follow declarative programming model that expresses logic without describing the control follow.

# Advantages of functional programming.

1. It works well with immutable data.

2. Is very easy to test becasue we dont have to worry about hidden state and side effects.

3. We know that they depend on the input paramaters to produce the output, so it make debbuging easy.

4. It support all the the programming paradigms that is involved in parallel programing.

5. Involves executing statement in a way of choice based on the program.

# Disadvantages of functional programming.

1. We dont have the state and no update of variables is allowed, we will have a problem when working with large data structure and it need to perform a duplicate of any data even if it changes the smaller part of the data.

2. Combining pure function into a complete application it is difficult.

3. Using only immmutable values and recursion can lead to perfomance problem.

4. It can be difficult to implement as it takes a different approach to think from a functional stand point. 
 

# Object oriented programming.

Object oriented programming paradigm we use objects to represent things we are programming about. These objects could be data structures. The objects hold data about them in attributes.The attributes in the objects are manipulated through methods or functions that are given to the object. For instance, we might have a Car object that represents all of the data a Car would have: wheels, engene, color, mirrors, weight, doors. Those would be the attributes. The car object would also have things that it can do such as: start and stop, these would be the functions that play with the data the object stores.

What is important with object oriented programming is the ability to encapsulate data from outsiders. Encapsulation is the ability to hide variables within the class from outside access, which makes it great for security reasons, along with leaky, unwanted or accidental usage. Most programmers using object oriented design say that it is a style of programming that allows you to model real world scenarios much simpler. This allows for a good transition from requirements to code that works like the customer or user wants it to. OOP follows the imperative programming model that uses statements to actively change the state of the program.


# Advantages of OOP.

1. The code is written once and used multiple times without having to repeat the same code.

2. We have Iheretence if we need same functionality in multiple Object we can write common class and have the same functionality and inherit it for the subtype class.

3. This is easy to maintain because object will be created with small difference from the common ones.

4. For security reason because it hide some of the data from the users.

5. Make use of mutable data for functioning.

6. It is very simple as it is based on mapping real-life functions and use it while programming.


# Disadvantages of OOP.

1. The size of code is large here because we are dealing with multiple objects.

2. It requires a lot of work to create.

3. Because they carry large amount of code also make them slower.

4. It does not support parallel programming as a whole beacuse of its way of functioning.

# Conclusion.

When working across different boundaries OOP is the excellent methods to keep everything packaged up and secure from unwanted external usage. where as functionaml programming works well when complexity is contained.

Functional proramming is good when the code requires new operations on the already existing items, where as object oriented programming is good when we want to keep thngs packaged and secured from the unwanted access and usage.

Use this Github link to access my code examples ( https://github.com/muano30/Different-programming-paradigms-code-example)