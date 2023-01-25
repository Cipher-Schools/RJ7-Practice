import React, { Component } from "react";
import RegurlarComp from "./RegurlarComp";
import PureComp from "./PureComp";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "shashi",
      data: [1, 2],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "shashi",
      });
    }, 2000);
  }

  // handleBtn = () => {
  //   this.setState({
  //     data: [...this.state.data, 5],
  //   });
  // };

  render() {
    console.log("---------- Parent Component --------------");
    return (
      <div>
        <h1>Home Component</h1>
        <RegurlarComp name={this.state.name} data={this.state.data} />
        <PureComp name={this.state.name} data={this.state.data} />
        <button onClick={this.handleBtn}>Push Values</button>
      </div>
    );
  }
}

export default Home;
