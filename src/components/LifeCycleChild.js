import React, { Component } from "react";

export default class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Hello from getDerivedStateFromProps");
    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return {
      name: "ajay",
    }; //No changes in state
  }

  render() {
    console.log("hello from LifecycleChild JSX");
    return <div>LifeCycleChild {this.state.name}</div>;
  }
}
