import { makeAutoObservable } from "mobx";

class TaskStore {
  list = [
    {
      id: 1,
      name: "Learn React",
      isDone: true,
    },
    {
      id: 2,
      name: "Learn Vuejs",
      isDone: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // 单选操作
  singleCheck(id, isDone) {
    const item = this.list.find((item) => item.id === id);
    item.isDone = isDone;
  }

  // 全选操作
  checkAll(checked) {
    this.list.forEach((item) => (item.isDone = checked));
  }

  // 计算属性
  // 只有所有子项都是选中的时候，才是选中的状态
  get isAll() {
    return this.list.every((item) => item.isDone);
  }

  get isDoneNum() {
    return this.list.filter((item) => item.isDone).length;
  }

  // 删除
  delTask = (id) => {
    this.list = this.list.filter((item) => item.id !== id);
  };

  // 新增
  addTask = (task) => {
    this.list.unshift(task);
  };
}

export default TaskStore;
