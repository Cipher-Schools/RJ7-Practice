import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  //   tick() {
  //     console.log("hello from tick");
  //     //   setTimeout(() => {
  //     //     this.setState((prevState) => ({
  //     //       time: prevState.time + 1,
  //     //     }));
  //     //   }, 1000);
  //     setInterval(() => {
  //       this.setState((prevState) => ({
  //         time: prevState.time + 1,
  //       }));
  //     }, 1000);
  //   }

  componentDidMount() {
    console.log("hello from tick");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  }

  render() {
    console.log("hello from JSX");
    // this.tick();
    return (
      <div>
        <h1>Clock: {this.state.time}</h1>
      </div>
    );
  }
}
