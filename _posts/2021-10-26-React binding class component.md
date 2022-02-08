---
Layout: 
Title: "React binding class components."
date: "2021-10-26"
---

# Introduction.

This blog post is about how to use bind method in react which i have learn in class components and functional components.

# Body.

We can bind in the constructor this way.

class example extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}


The second one is using the arrow function to bind.


class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.setState({ backgroundColor: 'red' })}
        style={this.state}
      >
        Set background to red
      </button>
    )
  }
}
