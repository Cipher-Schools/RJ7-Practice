import React, { Component } from "react";
import ListItem from "./ListItem";

export default class Lists extends Component {
  Persons = [
    {
      id: 1,
      name: "Sahla",
    },
    {
      id: 2,
      name: "Vijay",
    },
    {
      id: 3,
      name: "Sumit",
    },
    {
      id: 4,
      name: "Lav",
    },
    {
      id: 5,
      name: "Lav",
    },
    {
      id: 6,
      name: "Akash",
    },
  ];
  render() {
    const PersonList = this.Persons.map((person, index) => (
      <ListItem key={index} name={person.name} />
    ));

    return (
      <div>
        <h1>Lists</h1>
        <ul>{PersonList}</ul>
      </div>
    );
  }
}
