import React from "react";
import "./index.css";

export default class Item extends React.Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm("确认删除吗？")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleCheck(this.props.id)}
          />
          <span>{this.props.title}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
          onClick={() => this.handleDelete(this.props.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
