import React, { Component } from "react";

class Counter2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.handleCounter()}>Increase</button>
      </div>
    );
  }
}

export default Counter2;
