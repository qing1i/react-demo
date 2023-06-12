import React, { Component } from "react";
import { connect } from "react-redux";
// import CountUI from "../../components/Count";
// import {
//   createIncrementAction,
//   createDecrementAction,
//   createIncrementAsyncAction,
// } from "../../redux/count_action";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

class Count extends Component {
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
        <h3>Person组件中的总人数为{this.props.pl}</h3>

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

/*
    1. mapStateToProps函数返回的是一个对象
    2. 返回的对象作为props传递到子组件
    3. mapStateToProps用于传递状态
*/
// function mapStateToProps(state) {
//   return { count: state };
// }
// const mapStateToProps = (state) => ({ count: state });

/*
    1. mapDispatchToProps函数返回的是一个对象
    2. 返回的对象作为props传递到子组件
    3. mapStateToProps用于传递操作状态的方法
*/
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: (num) => dispatch(createIncrementAction(num)),
//     decrement: (num) => dispatch(createDecrementAction(num)),
//   };
// }
// const mapDispatchToProps = (dispatch) => ({
//   increment: (num) => dispatch(createIncrementAction(num)),
//   decrement: (num) => dispatch(createDecrementAction(num)),
//   incrementAsync: (num, time) =>
//     dispatch(createIncrementAsyncAction(num, time)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
export default connect(
  // (state) => ({ count: state }),
  (state) => ({ count: state.count, pl: state.person.length }),

  //   (dispatch) => ({
  //     increment: (num) => dispatch(createIncrementAction(num)),
  //     decrement: (num) => dispatch(createDecrementAction(num)),
  //     incrementAsync: (num, time) =>
  //       dispatch(createIncrementAsyncAction(num, time)),
  //   })
  // 简写
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
  // )(CountUI);
)(Count);
