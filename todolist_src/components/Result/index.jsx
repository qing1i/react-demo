import React from "react";
import "./index.css";

export default class Result extends React.Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handelClearDone = () => {
    this.props.clearDone();
  };

  render() {
    const doneTotal = this.props.todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    const total = this.props.todos.length;

    return (
      <div className="todo-result">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneTotal}</span>/全部{total}
        </span>
        <button onClick={this.handelClearDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
