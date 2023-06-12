import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import Result from "./components/Result";
import "./App.css";

export default class App extends React.Component {
  // 状态在哪里，操作状态的方法就在哪里

  state = {
    todos: [
      { id: "001", title: "吃饭", done: true },
      { id: "002", title: "睡觉", done: true },
      { id: "003", title: "唱歌", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const newTodos = [todoObj, ...this.state.todos];
    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    const newTodos = this.state.todos.map((obj) => {
      if (obj.id === id) return { ...obj, done };
      else return obj;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((obj) => obj.id !== id);
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (done) => {
    const newTodos = this.state.todos.map((obj) => {
      return { ...obj, done };
    });
    this.setState({ todos: newTodos });
  };

  clearDone = () => {
    const newTodos = this.state.todos.filter((obj) => obj.done === false);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Input addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Result
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearDone={this.clearDone}
          />
        </div>
      </div>
    );
  }
}
