import React from "react";

class Greet extends React.Component {
  render() {
    console.log(this.props);
    this.props.name = "Manisha";
    return (
      <div>
        <h1>
          Hello {this.props.name} {this.props.secondName}
        </h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

// const Greet = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };

export default Greet;
