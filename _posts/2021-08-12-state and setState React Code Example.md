---
Layout: 
Title: "State and setState React code Example"
date: "2021-08-12"
---

# Introduction.

The previous blog post i just share the explanation of state and setState without giving the code Example, in this blog post i will share the code example.

# Body.

## Code Example.

### state and setState in React.

class Greetings extends React.Component {

  state = {

    name: "World"

  };

  updateName() {

    this.setState({ name: "Simplilearn" });

  }

  render() {

      return(

          <div>

              {this.state.name}

          </div>

      )

  }

}

1.A state can be modified based on user action or network changes

2.Every time the state of an object changes, React re-renders the component to the browser

3.The state object is initialized in the constructor

4.The state object can store multiple properties

5.this.setState() is used to change the value of the state object

6.setState() function performs a shallow merge between the new and the previous state

# Conclusion.

I have Just learned how state and setState works and their difference, now what's left for me is just to keep on practising to apply both of the in code writting. 