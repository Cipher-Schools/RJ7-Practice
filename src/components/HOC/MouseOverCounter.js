import React, { Component } from "react";
import WithCounter from "./WithCounter";

class MouseOverCounter extends Component {
  render() {
    const { count, handleCounter } = this.props;
    return <h3 onMouseOver={handleCounter}>Hovered {count} times</h3>;
  }
}

export default WithCounter(MouseOverCounter, 10);
