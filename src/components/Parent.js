import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      student_name: "",
    };
    this.handlePropsFromChild = this.handlePropsFromChild.bind(this);
  }

  handlePropsFromChild(name) {
    console.log({ name });
    // this.setState((prevState) => ({
    //   ...prevState,
    //   student_name: name,
    // }));
  }
  render() {
    return (
      <div>
        <h3>This is Parent Component</h3>
        <Child getName={this.handlePropsFromChild} />
      </div>
    );
  }
}
