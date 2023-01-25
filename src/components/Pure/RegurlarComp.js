import React, { Component } from "react";

class RegurlarComp extends Component {
  render() {
    console.log("-----Regular Component Rendered------", this.props.data);
    return <div>This is RegurlarComp {this.props.name}</div>;
  }
}

export default React.memo(RegurlarComp);
