import React, { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { name, count, handleCounter } = this.props;
    return (
      <button onClick={handleCounter}>
        {name} Clicked {count} times
      </button>
    );
  }
}

export default WithCounter(ClickCounter, 5);
