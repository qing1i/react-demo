import React from "react";
import { useNavigationType } from "react-router-dom";

export default function News() {
  // 返回当前的导航类型(用户是如何来到当前页面的)
  console.log(useNavigationType());

  return (
    <div>
      <ul>
        <li>News1</li>
        <li>News2</li>
        <li>News3</li>
      </ul>
    </div>
  );
}
