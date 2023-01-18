import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      user: "Guest",
    };
  }

  render() {
    const handleSubscribe = () => {
      //   this.state.user = "Logged in user";
      this.setState(
        {
          user: "Logged in user",
        },
        () => {
          console.log("state value: ", this.state.user);
        }
      );
    };
    return (
      <div>
        <h1>Hello {this.state.user}</h1>
        <button onClick={handleSubscribe}>Login</button>
      </div>
    );
  }
}

export default Message;
