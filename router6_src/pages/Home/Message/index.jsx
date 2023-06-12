import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [message] = useState([
    { id: "01", title: "message 1", content: "content 1" },
    { id: "02", title: "message 2", content: "content 2" },
    { id: "03", title: "message 3", content: "content 3" },
  ]);

  const navigate = useNavigate();

  function showContent(m) {
    navigate("content", {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content,
      },
    });
  }

  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            <li key={m.id}>
              {/* <Link to="content">{m.title}</Link> */}

              {/* 路由的params参数 */}
              {/* <Link to={`content/${m.id}/${m.title}/${m.content}`}>
                {m.title}
              </Link> */}

              {/* 路由的search参数 */}
              {/* <Link
                to={`content?id=${m.id}&title=${m.title}&content=${m.content}`}
              >
                {m.title}
              </Link> */}

              {/* 路由的state参数 */}
              <Link
                to="content"
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content,
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showContent(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
