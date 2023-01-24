import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error });
    console.log({ info });
  }

  render() {
    return <div>{this.state.hasError ? <h1>Something is wrong</h1> : this.props.children}</div>;
  }
}

export default ErrorBoundary;
