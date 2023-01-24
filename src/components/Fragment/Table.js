import React, { Component, Fragment } from "react";
import Column from "./Column";

class Table extends Component {
  render() {
    return (
      <>
        <h1>Table</h1>
        <br />
        <table>
          <tr>
            <Column />
          </tr>
        </table>
      </>
    );
  }
}

export default Table;
