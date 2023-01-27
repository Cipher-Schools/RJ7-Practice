import React, { Component } from "react";
import { UserConsumer } from "./UserContext";
import { ThemeConsumer } from "./ThemeContext";

class ComponentF extends Component {
  render() {
    return (
      <ThemeConsumer>
        {(theme) => (
          <UserConsumer>
            {(name) => {
              return (
                <h2>
                  Hello {name} {theme}
                </h2>
              );
            }}
          </UserConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

export default ComponentF;
