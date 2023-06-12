import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";
import Content from "../pages/Home/Message/Content";

export default [
  { path: "/about", element: <About /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "message",
        element: <Message />,
        children: [
          // 路由的search参数
          //路由的state参数
          {
            path: "content",
            element: <Content />,
          },
          //  路由的params参数
          // {
          //   path: "content/:id/:title/:content",
          //   element: <Content />,
          // },
        ],
      },
    ],
  },
  { path: "/", element: <Navigate to="/about" /> },
];
