import React, { Component } from "react";

export default class A extends Component {
  render() {
    return (
      <div>
        <h3>A组件</h3>
        <B render={(count) => <C count={count} />} />
      </div>
    );
  }
}

class B extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h3>B组件</h3>
        {this.props.render(this.state.count)}
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      <div>
        <h3>C组件</h3>
        {this.props.count}
      </div>
    );
  }
}
