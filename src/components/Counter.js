import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  };

  handleIncreamentBy5 = () => {
    this.handleCounter();
    this.handleCounter();
    this.handleCounter();
    this.handleCounter();
    this.handleCounter();
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncreamentBy5}>Increase</button>
      </div>
    );
  }
}

export default Counter;
