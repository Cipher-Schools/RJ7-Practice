import React, { Component } from "react";

class Hero extends Component {
  render() {
    if (this.props.name === "Superman") {
      throw new Error("Hero name is Superman!!!");
    }
    return (
      <div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Hero;
