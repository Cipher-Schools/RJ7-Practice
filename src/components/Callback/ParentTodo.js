import React, { useCallback, useState } from "react";
import Todo from "./Todo";

function ParentTodo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleTodo = useCallback(() => {
    setTodos((prev) => [...prev, "Todo Item"]);
  }, [todos]);

  console.log("Parent Todo Component render");

  return (
    <>
      <Todo handleTodo={handleTodo} todos={todos} />
      <div>
        <button onClick={handleCount}>Value: {count}</button>
      </div>
    </>
  );
}

export default ParentTodo;
