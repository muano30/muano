---
Layout: 
Title: "Two ways to add inline Style in React."
date: "2021-10-29"
---

# Introduction.

In this blog post i will just share two ways we can add inline style in react, which is very different to how we add style in html.

# Body.

This how we add color = "purple" in inline style react. 


const Hearder = () => {
    return (
        <div>
        <h1>style={{color: "purple"}}> Hello World!</h1>
        </div>
    )
}

This is how we add background-color = "yellow"


const Hearder = () => {
    return (
        <div>
        <h1>style={{backgroundColor: "yellow"}}> Hello World!</h1>
        </div>
    )
}
