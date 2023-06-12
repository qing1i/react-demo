import React, { useState } from "react";
import { Navigate, NavLink, Outlet, useOutlet } from "react-router-dom";

export default function Home() {
  // const [count, setCount] = useState(0);

  // 用来呈现当前组件中渲染的嵌套路由
  // 如果嵌套路由没有挂载，则为null
  // 如果嵌套路由已经挂载，则展示嵌套的路由对象
  console.log(useOutlet());

  return (
    <div>
      <h3>Home</h3>
      {/* {count === 10 ? <Navigate to="/about" /> : <h4>当前值为{count}</h4>}
      <button onClick={() => setCount(count + 1)}>+1</button> */}

      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            {/* <NavLink className="nav-link" to="/home/news">
              News
            </NavLink> */}
            <NavLink className="nav-link" to="news">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home/message">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  );
}
