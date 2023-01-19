import React, { Component } from "react";

import "./Forms.module.css";
import styled from "./Forms.module.css";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      college: "",
      mobileNo: "",
      theme: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.firstName} ${this.state.lastName} study in ${this.state.college}`);
    return;
  };

  render() {
    console.log("Form Rendered");
    const { firstName, lastName, college, mobileNo } = this.state; //destructuring
    const className = this.state.theme ? styled.container : "";
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className={className}>
        <label name="firstName">First Name:</label>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(event) =>
            this.setState({
              firstName: event.target.value,
            })
          }
        />
        <br />
        <br />
        <label name="lastName">Last Name:</label>
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) =>
            this.setState({
              lastName: event.target.value,
            })
          }
        />
        <br />
        <br />
        <label name="college">College Name:</label>
        <input
          type="text"
          value={college}
          placeholder="College Name"
          onChange={(event) =>
            this.setState({
              college: event.target.value,
            })
          }
        />
        <br />
        <br />
        <label name="mobileNo">Mobile No:</label>
        <input
          type="text"
          value={mobileNo}
          placeholder="Mobile No"
          onChange={(event) =>
            this.setState({
              mobileNo: event.target.value,
            })
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
