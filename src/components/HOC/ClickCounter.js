import React, { Component } from "react";

class ClickCounter extends Component {
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
    return <button onClick={() => this.handleCounter()}>Clicked {this.state.count} times</button>;
  }
}

export default ClickCounter;
