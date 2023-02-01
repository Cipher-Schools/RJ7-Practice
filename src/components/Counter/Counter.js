import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Count Value is ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count Value is ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>Count</button>
      </div>
    );
  }
}

export default Counter;
