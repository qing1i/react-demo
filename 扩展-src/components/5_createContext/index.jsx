import React, { Component, createContext } from "react";

// 创建Context容器对象
const CountContext = createContext(0);

export default class A extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h3>A组件</h3>
        <div>当前值为{this.state.count}</div>
        {/* 給子组件传递数据 */}
        <CountContext.Provider value={this.state.count}>
          <B />
        </CountContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h3>B组件</h3>
        <C />
      </div>
    );
  }
}

// 类组件
// class C extends Component {
// 声明接收context
//   static contextType = CountContext;

//   render() {
// 读取context中的value值
//     console.log(this.context);
//     return (
//       <div>
//         <h3>C组件</h3>
//         <div>当前值为{this.context}</div>
//       </div>
//     );
//   }
// }

// 函数组件
function C() {
  return (
    <div>
      <h3>C组件</h3>
      <div>
        当前值为
        <CountContext.Consumer>{(value) => value}</CountContext.Consumer>
      </div>
    </div>
  );
}
