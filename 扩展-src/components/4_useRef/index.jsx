import React, { useRef } from "react";

export default function Count() {
  const myRef = useRef();

  function showInput() {
    alert(myRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={showInput}>点我显示输入</button>
    </div>
  );
}
