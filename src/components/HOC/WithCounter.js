import React from "react";

const WithCounter = (OriginalComponent, increamentCount) => {
  class UpdatedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    handleCounter = () => {
      this.setState((prev) => ({
        count: prev.count + increamentCount,
      }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleCounter={this.handleCounter}
          {...this.props}
        />
      );
    }
  }

  return UpdatedComponent;
};
export default WithCounter;
