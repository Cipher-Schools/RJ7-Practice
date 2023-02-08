import React, { useReducer } from "react";
import { reducer, globalState } from "./reducer";

function Todo() {
  const [todos, dispatch] = useReducer(reducer, globalState);

  const handleStatus = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  console.log({ todos });
  return (
    <div>
      <h1>Todo Item:</h1>
      {todos.map((todo, i) => (
        <div key={i}>
          <h1>{todo.title}</h1>
          <button onClick={() => handleStatus(todo)}>
            {todo.isCompleted ? "Completed" : "InComplete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
