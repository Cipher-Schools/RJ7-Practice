import React, { useMemo, useState } from "react";

function MemoComp() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const calculation = useMemo(() => complexCalculation(count), [count]);
  return (
    <div>
      <h2>Hello Memo Hook</h2>
      <button onClick={() => setCount1((prev) => prev + 1)}>Increase Count1</button>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <h2>Complex Calc Value: {count} </h2>
        {calculation}
      </div>
    </div>
  );
}

const complexCalculation = (num) => {
  console.log("hello from complexCalculation....");
  for (var i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

export default MemoComp;
