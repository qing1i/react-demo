import { makeAutoObservable } from "mobx";

class CounterStore {
  // 1. 定义数据状态（state）
  count = 0;

  constructor() {
    // 2. 数据响应式处理
    makeAutoObservable(this);
  }

  // 3. 定义action函数（修改数据）
  addCount = () => {
    this.count++;
  };
}

// 4. 实例化并导出实例
// const counterStore = new CounterStore();
// export { counterStore };
export { CounterStore };
