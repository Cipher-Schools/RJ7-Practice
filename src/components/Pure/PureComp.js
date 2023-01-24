import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("------ PureComponent Rendered -------", this.props.data);
    return <div>This is Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
