---
Layout: 
Title: "Redux action."
date: "2021-08-25"
---

# Introduction.

Today i will share about actions in Redux, this was the easiest thing to follow beacuse i have done object when doing javaScript and we write action the same way we write object in js.

# Body.

## Actions.

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like domain or eventName, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

# Conclusion.

I think now i have a better understanding of what an action is in redux i just need to practice applying it.