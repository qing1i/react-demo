import React, { lazy, Suspense } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

// 路由懒加载
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="list-group">
              {/* <Link className="list-group-item active" to="/home">
                Home
              </Link>
              <Link className="list-group-item" to="/about">
                About
              </Link> */}

              {/* <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink> */}

              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-8">
            {/* 注册路由 */}

            {/* <Switch>：匹配到路径相同的后，不再向下继续遍历 */}
            {/* <Switch> */}
            <Route path="/home" component={Home}></Route>

            {/* exact：开启精准匹配 */}
            {/* <Route exact path="/home" component={Home}></Route> */}
            <Route path="/about" component={About}></Route>

            {/* Redirect：当所有路由都无法匹配时，跳转到Redirect指定的路由 */}
            <Redirect to="/home" />

            {/* </Switch> */}

            {/* 
                路由懒加载
            */}
            <Suspense fallback={<h3>Loading</h3>}>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
