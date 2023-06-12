import React from "react";
import { Link, Route } from "react-router-dom";
import Content from "./Content";

export default class Message extends React.Component {
  state = {
    messageArr: [
      { id: "01", title: "message 1" },
      { id: "02", title: "message 2" },
      { id: "03", title: "message 3" },
    ],
  };

  pushShow = (id, title) => {
    // this.props.history.push(`/home/message/content/${id}/${title}`);

    // this.props.history.push(`/home/message/content?id=${id}&title=${title}`);

    this.props.history.push(`/home/message/content`, { id, title });
  };

  replaceShow = (id, title) => {
    // this.props.history.replace(`/home/message/content/${id}/${title}`);

    // this.props.history.replace(`/home/message/content?id=${id}&title=${title}`);

    this.props.history.replace(`/home/message/content`, { id, title });
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(2);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 
                  向路由组件传递参数
                  1. params参数
                */}
                <Link to={`/home/message/content/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                {/* 2. search参数 */}
                {/* <Link
                  to={`/home/message/content/?id=${msgObj.id}&title=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link> */}
                {/* 3. state参数 */}
                {/* <Link
                  to={{
                    pathname: "/home/message/content",
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link> */}
                {/* 
                    replace
                */}
                {/* <Link
                  replace
                  to={{
                    pathname: "/home/message/content",
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link> */}
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 1 */}
        <Route path="/home/message/content/:id/:title" component={Content} />
        {/* 2 */}
        {/* <Route path="/home/message/content" component={Content} /> */}
        {/* 3 */}
        {/* <Route path="/home/message/content" component={Content} /> */}

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
