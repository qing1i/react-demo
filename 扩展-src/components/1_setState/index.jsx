import React from "react";

export default class Count extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // 对象式的setState
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(this.state.count);
    // });
    // console.log(this.state.count);

    // 函数式的setState
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h3>当前值为：{this.state.count}</h3>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}
