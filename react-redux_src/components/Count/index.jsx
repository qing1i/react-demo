import React, { Component } from "react";

export default class Count extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    const { value } = this.selectNum;
    this.props.increment(value * 1);
  };

  decrement = () => {
    const { value } = this.selectNum;
    this.props.decrement(value * 1);
  };

  incrementOdd = () => {
    const { value } = this.selectNum;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNum;
    this.props.incrementAsync(value * 1, 1000);
  };

  render() {
    console.log("UI", this.props);
    return (
      <div>
        <h3>当前数为：{this.props.count}</h3>

        <select ref={(c) => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
