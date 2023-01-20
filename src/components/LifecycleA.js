import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

export default class LifecycleA extends Component {
  constructor() {
    super();
    console.log("hello from Constructor");
    this.state = {
      name: "kirti",
    };
  }

  componentDidMount() {
    console.log("hello from ComponentDidMount");
  }

  render() {
    console.log("Hello from Render()");
    return <LifeCycleChild name={this.state.name} />;
  }
}
