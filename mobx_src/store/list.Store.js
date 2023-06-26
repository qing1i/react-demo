import { makeAutoObservable } from "mobx";

class ListStore {
  // 1. 定义数据状态（state）
  list = [1, 2, 3, 4, 5, 6];

  constructor() {
    // 2. 数据响应式处理
    makeAutoObservable(this);
  }

  // 定义计算属性
  get filterList() {
    return this.list.filter((item) => item > 2);
  }

  // 3. 定义action函数（修改数据）
  addList = () => {
    this.list.push(7, 8, 9);
  };
}

// 4. 导出
export { ListStore };
