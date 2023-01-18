import React from "react";

function AlertButton(props) {
  return <button onClick={() => props.alert("preeti")}>Try now</button>;
}

export default AlertButton;
