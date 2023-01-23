import React, { Component } from "react";

class UpdateLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      data: [],
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps: ", state);
  //     if (t !== state.counter) {
  //       return {
  //         counter: this.state.counter,
  //       };
  //     } else return null;
  //   }

  componentDidMount() {
    console.log("UpdateLifeCycle ComponentDidMount");
    fetch(`https://dummyjson.com/posts/${this.state.counter}`)
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter !== this.state.counter) {
      console.log("shopuldComponentUpdate calss", nextState);
      return true;
    } else return false;
    // return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevState: ", prevState);
  }

  //   componentDidUpdate(prevProps, prevState, snapShotValue) {
  //     console.log("componentDidUpdateCall");
  //     if (prevState.counter !== this.state.counter) {
  //       fetch(`https://dummyjson.com/posts/${this.state.counter}`)
  //         .then((res) => res.json())
  //         .then((data) => console.log({ data }));
  //     }
  //   }

  render() {
    console.log("Hello from render");
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={() => this.setState((prevState) => ({ counter: prevState.counter }))}>
          Count
        </button>
        {/* <button
          onClick={() => this.setState((prevState) => ({ counter1: prevState.counter1 + 1 }))}
        >
          Count2
        </button> */}
      </div>
    );
  }
}

export default UpdateLifeCycle;
