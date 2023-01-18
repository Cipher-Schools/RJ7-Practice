import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      name: "sashi",
    };
  }
  render() {
    this.props.getName(this.state.name);
    return <h3>This is Child {this.state.name}</h3>;
  }
}
