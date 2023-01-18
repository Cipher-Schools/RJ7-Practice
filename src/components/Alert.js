import React, { Component } from "react";
import AlertButton from "./AlertButton";

class Alert extends Component {
  constructor() {
    super();
  }

  handleAlert = (name) => {
    alert(`Hello ${name}!!!`);
  };
  render() {
    return <AlertButton alert={this.handleAlert} />;
  }
}

export default Alert;
