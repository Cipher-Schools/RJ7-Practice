import React, { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("hello from useEffect");
    document.title = `Count value is ${count}`;
    document.getElementById("btn1").addEventListener("click", handleCounter);

    return () => {
      console.log("Unmounting stage....");
      document.getElementById("btn1").removeEventListener("click", handleCounter);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount1((prev) => prev + 1)}>Count1</button>
      <button id="btn1">Count</button>
    </div>
  );
}

export default CounterEffect;
