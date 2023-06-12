import React, { Component, PureComponent } from "react";

export default class Parent extends PureComponent {
  state = { count: 0 };

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState({});
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state);
  //     console.log(nextProps, nextState);
  //     if (this.state.count === nextState.count) return false;
  //     else return true;
  //   }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h3>Parent组件</h3>
        <div>当前值为{this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
        <Child count={this.state.count} />
      </div>
    );
  }
}

class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state);
  //     console.log(nextProps, nextState);
  //     // if (this.props.count === nextProps.count) return false;
  //     // else return true;
  //     return !this.props.count === nextProps.count;
  //   }

  render() {
    console.log("Child render");
    return (
      <div>
        <h3>Child组件</h3>
        <div>当前值为{this.props.count}</div>
      </div>
    );
  }
}
