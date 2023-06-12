import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function unmount() {}

  return (
    <div>
      <h3>当前数为：{count}</h3>
      <button onClick={unmount}>卸载组件</button>
    </div>
  );
}
