import React from "react";

function Todo(props) {
  console.log("Todo Component Rendered");
  return (
    <>
      <h1>Todos Items</h1>
      {props.todos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}

      <hr />
      <button onClick={props.handleTodo}>Add Todo</button>
    </>
  );
}

export default React.memo(Todo);
