import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends Component {
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: "热度",
        type: "hot",
      },
      {
        id: 2,
        name: "时间",
        type: "time",
      },
    ],
    active: "hot",
    list: [
      {
        id: 1,
        author: "刘德华",
        comment: "给我一杯忘情水",
        time: new Date("2021-10-10 09:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: "周杰伦",
        comment: "哎哟，不错哦",
        time: new Date("2021-10-11 09:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: "五月天",
        comment: "不打扰，是我的温柔",
        time: new Date("2021-10-11 10:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
    comment: "",
  };

  formatTime = (time) =>
    `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

  toggleTab = (type) => {
    this.setState({
      active: type,
    });
  };

  textareaChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  submitComment = () => {
    const newComment = {
      id: nanoid(),
      author: "admin",
      comment: this.state.comment,
      time: new Date(),
      attitude: 0,
    };
    this.setState({
      list: [newComment, ...this.state.list],
    });
  };

  delComment = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  toggleLike = (curItem) => {
    const { id, attitude } = curItem;
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{this.state.list.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((item) => (
                <li
                  key={item.id}
                  className={item.type === this.state.active ? "on" : ""}
                  onClick={() => this.toggleTab(item.type)}
                >
                  按{item.name}排序
                </li>
              ))}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img
                className="user-head"
                src="https://avatars.githubusercontent.com/u/68042867"
                alt=""
              />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.comment}
                onChange={this.textareaChange}
              />
              <button className="comment-submit" onClick={this.submitComment}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => (
              <div className="list-item" key={item.id}>
                <div className="user-face">
                  <img
                    className="user-head"
                    src="https://avatars.githubusercontent.com/u/68042867"
                    alt=""
                  />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{this.formatTime(item.time)}</span>
                    <span
                      className={item.attitude === 1 ? "like liked" : "like"}
                      onClick={() => this.toggleLike(item)}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className={item.attitude === -1 ? "hate hated" : "hate"}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className="reply btn-hover"
                      onClick={() => this.delComment(item.id)}
                    >
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
