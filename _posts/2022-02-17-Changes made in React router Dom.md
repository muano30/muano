---
Layout: 
Title: "Changes made in React router Dom."
date: "2022-02-17"
---

# Introduction.

In this blog post i will just talk about the things that are no longer working when we are using react router Dom.

# Body.

## Explanation.

When we want a button to direct us to another page after submitting we would first import useHistory
then do this,

  let history = useHistory();

  const redirect = () => {
    history.push('/jobform')
} 

Then pass redirect() to the button that we want to it to direct to the path we used.


The new way of doing this with new version in linux is easy and straight forward not saying the old way is not straight forward this is how we do it in new version.

We first import  useNavigate 

Then do the following:

const navigate = useNavigate()

const redirect = () => {
    navigate('/jobform)
}


# Conclusion.

Put in mind that if you choose not to update the package version, the older way can still work but if you use the current version the older way will not work in the current version.

As programmers in coding we always learn new things and when they upgrade to new things we must also be ready to upgrade to learn new way of doing things.
