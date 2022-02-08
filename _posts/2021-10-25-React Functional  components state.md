---
Layout: 
Title: "React Functional Components state."
date: "2021-10-25"
---

# Introduction.

In this block post i will just share with you how to set the state in functional way, the previous blog post i have explained the difference between functional components and class components, i have also shared a code on how to set state in class components. 


# Body.

As we all know that in fuctional components we use hooks, we cannot run this code in a visual studio code without importing the hook first, which is useState.



import React, {useState} from 'react';

function Example(){

    const[formInfo, setFormInfo] = useState({
        name: ''
    })
}

return(

    <div>
    <input
     type="text"
     name="name"
    />
    </div>
)

export default Example;

# Conclusion.

I didn't find it difficlut to differentiate how to set state between the class components and functional components, what i like about functional components is that it takes few line of code to write.