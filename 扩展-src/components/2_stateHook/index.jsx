import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const add = () => {
    // setCount(count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h3>当前数为：{count}</h3>
      <button onClick={add}>+1</button>
    </div>
  );
}
