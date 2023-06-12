import React, { Component } from "react";
// 引入store
import store from "../../redux/store";
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

export default class Header extends Component {
  state = {
    counter: 0,
  };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  increment = () => {
    const { value } = this.selectNum;
    // const { counter } = this.state;
    // this.setState({ counter: counter + value * 1 });

    // store.dispatch({ type: "increment", data: value * 1 });

    store.dispatch(createIncrementAction(value * 1));
  };

  decrement = () => {
    const { value } = this.selectNum;
    // const { counter } = this.state;
    // this.setState({ counter: counter - value * 1 });

    // store.dispatch({ type: "decrement", data: value * 1 });

    store.dispatch(createDecrementAction(value * 1));
  };

  incrementOdd = () => {
    const { value } = this.selectNum;
    // const { counter } = this.state;
    // if (counter % 2 !== 0) {
    //   this.setState({ counter: counter + value * 1 });
    // }
    const counter = store.getState();
    if (counter % 2 !== 0) {
      // store.dispatch({ type: "increment", data: value * 1 });
      store.dispatch(createIncrementAction(value * 1));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNum;
    // const { counter } = this.state;
    // setTimeout(() => {
    //   this.setState({ counter: counter + value * 1 });
    // }, 1000);

    // setTimeout(() => {
    //   // store.dispatch({ type: "increment", data: value * 1 });
    //   store.dispatch(createIncrementAction(value * 1));
    // }, 1000);

    store.dispatch(createIncrementAsyncAction(value * 1, 1000));
  };

  render() {
    return (
      <div>
        {/* <h3>当前数为：{this.state.counter}</h3> */}
        <h3>当前数为：{store.getState()}</h3>

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
