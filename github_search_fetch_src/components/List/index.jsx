import React from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends React.Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };

  // state = {
  //   a: 1,
  // };

  componentDidMount() {
    this.token = PubSub.subscribe("xxx", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，输入关键字，随后点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    src={userObj.avatar_url}
                    alt="img"
                    style={{ width: "100px" }}
                  />
                  <p className="card-text">{userObj.login}</p>
                </a>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
