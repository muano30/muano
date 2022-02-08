---
Layout: 
Title: "useEffect."
date: "2021-10-28"
---

# Introduction.

This blog post is about what i have just learn today, which is what we need to add to the second argument of a useEffect hook to limit it to running only on the first render;

# Body.

What we have added in this code is just the empty array on the useEffect method to limit it to run only in the first render.

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []);

  return <DisplayData data={data} />;
}


export default App;

