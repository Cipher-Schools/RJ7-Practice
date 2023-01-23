import React, { Component } from "react";

export default class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "abhinav",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Hello from getDerivedStateFromProps");
    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null; //No changes in state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("lifecycleChild ShouldComponentUpdate");
  }

  render() {
    console.log("hello from LifecycleChild JSX");
    return <div>LifeCycleChild {this.state.name}</div>;
  }
}
