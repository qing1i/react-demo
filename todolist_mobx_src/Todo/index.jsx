import "./index.css";
import { useStore } from "../store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { nanoid } from "nanoid";

function Task() {
  const { taskStore } = useStore();

  // 单选
  function onChange(id, e) {
    taskStore.singleCheck(id, e.target.checked);
  }

  // 全选
  function allChange(e) {
    taskStore.checkAll(e.target.checked);
  }

  // 删除
  function delTask(id) {
    taskStore.delTask(id);
  }

  // 新增
  const [taskValue, setTaskValue] = useState("");
  function addTask(e) {
    console.log(e);
    if (e.keyCode === 13) {
      taskStore.addTask({
        id: nanoid(),
        name: taskValue,
        isDone: false,
      });
      setTaskValue("");
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          onKeyUp={addTask}
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={allChange}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {taskStore.list.map((item) => (
            <li
              className={item.isDone ? "todo completed" : "todo"}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.isDone}
                  onChange={(e) => onChange(item.id, e)}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => delTask(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          任务数：{taskStore.list.length} 已完成：{taskStore.isDoneNum}
        </span>
      </footer>
    </section>
  );
}

export default observer(Task);
