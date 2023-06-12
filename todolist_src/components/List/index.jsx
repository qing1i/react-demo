import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./index.css";

export default class List extends React.Component {
  PropTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };

  render() {
    console.log(this.props);
    return (
      <ul className="todo-main">
        {this.props.todos.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            updateTodo={this.props.updateTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
