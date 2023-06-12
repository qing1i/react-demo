import React from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends React.Component {
  state = {
    hasError: "", // 用于标识子组件是否产生错误
  };

  // 当App下的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    return {
      hasError: error,
    };
  }

  componentDidCatch() {
    console.log("组件出错了");
  }

  render() {
    return (
      <div className="container">
        <Search />
        {this.state.hasError ? <h3>当前网络不稳定，请稍后再试</h3> : <List />}
      </div>
    );
  }
}
