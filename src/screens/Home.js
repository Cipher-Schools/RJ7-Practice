import React, { Component } from "react";
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";

class Home extends Component {

  render() {

    
    return (
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default Home;
