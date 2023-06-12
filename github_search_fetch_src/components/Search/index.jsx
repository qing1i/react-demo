import React from "react";
import PubSub from "pubsub-js";

export default class Search extends React.Component {
  handleSearch = async () => {
    const {
      keywordEl: { value },
    } = this;

    PubSub.publish("xxx", { isFirst: false, isLoading: true });

    // axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //   (res) =>
    //     PubSub.publish("xxx", { isLoading: false, users: res.data.items }),
    //   (err) => PubSub.publish("xxx", { isLoading: false, err: err.message })
    // );

    // 未优化
    //   fetch(`https://api.github.com/search/users?q=${value}`)
    //     .then(
    //       (res) => {
    //         console.log("联系服务器成功了");
    //         return res.json();
    //       }
    //       // (err) => {
    //       //   console.log("联系服务器失败了", err);
    //       //   return new Promise(() => {});
    //       // }
    //     )
    //     .then(
    //       (res) => {
    //         console.log("获取数据成功了", res);
    //       }
    //       // (err) => {
    //       //   console.log("获取数据失败了", err);
    //       // }
    //     )
    //     .catch((err) => console.log(err));

    // 优化
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${value}`);
      const data = await res.json();
      console.log(data);
      PubSub.publish("xxx", { isLoading: false, users: data.items });
    } catch (err) {
      console.log("请求出错", err);
      PubSub.publish("xxx", { isLoading: false, err: err.message });
    }
  };

  render() {
    return (
      <section>
        <h3>Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordEl = c)}
            type="text"
            placeholder="enter the name you search "
          />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
