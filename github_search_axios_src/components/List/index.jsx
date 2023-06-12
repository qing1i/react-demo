import React from "react";
import "./index.css";

export default class List extends React.Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
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
