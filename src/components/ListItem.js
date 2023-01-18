import React from "react";

function ListItem(props) {
  return (
    <li>
      {props.name} - {props.key}
    </li>
  );
}

export default ListItem;
