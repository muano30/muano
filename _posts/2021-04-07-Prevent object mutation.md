---
Layout:
Title: "Prevent object mutation"
date: "2021-04-07"
---

# Introduction.

Prevent object mutation, in this topic i just learned that const declaration alone doesn't really protect data from mutation. To make sure the data doesn't change JavaScript provides a function called Object.freeze() to prevent data mutation.

Once object is frozen you can no longer add, update or delete properties from it. Any attempt at changing the object will be rejected without an error.

# Example.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

 Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

# Conclusion.

If you go through the example above you will see that i have "object.freeze(MATH_CONSTANTS)" so that no one is able to alter the value of PI, add or delete properties.


