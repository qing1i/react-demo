import React from "react";
import {
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useInRouterContext,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import routes from "./routes";

export default function App() {
  //路由表
  // const element = useRoutes([
  //   { path: "/about", element: <About /> },
  //   { path: "/home", element: <Home /> },
  //   { path: "/", element: <Navigate to="/about" /> },
  // ]);
  const element = useRoutes(routes);

  console.log(useInRouterContext());

  return (
    <div className="container">
      <Header />
      <hr />
      <div className="row">
        <div className="col-4">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
          </div>
        </div>
        <div className="col-8">
          {/* 注册路由 */}
          {/* <Routes> */}
          {/* 单一匹配，匹配到后不再向下遍历匹配 */}
          {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate to="/about" />} />
          </Routes> */}

          {element}
        </div>
      </div>
    </div>
  );
}
