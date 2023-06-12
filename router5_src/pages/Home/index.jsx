import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              {/* <a href="foo" className="nav-link">
                News
              </a> */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li className="nav-item">
              {/* <a href="foo" className="nav-link">
                Message
              </a> */}
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
