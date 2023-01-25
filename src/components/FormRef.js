import React, { Component } from "react";

class FormRef extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef("");
    this.passwordRef = React.createRef("");
  }

  componentDidMount() {
    this.emailRef.current.focus();
    console.log(this.emailRef);
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.emailRef.current.value, this.passwordRef.current.value);
    alert(`Email: ${this.emailRef.current.value} and Password : ${this.passwordRef.current.value}`);
  };

  render() {
    console.log("FormRef Component Rendered");
    return (
      <div>
        <h1>Signin Form</h1>
        <form onSubmit={(e) => this.handleLogin(e)}>
          <label name="email">Email:</label>
          <input type="text" placeholder="Email Address" ref={this.emailRef} />
          <br />
          <br />
          <label name="password">Password:</label>
          <input type="text" placeholder="Password" ref={this.passwordRef} />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default FormRef;
