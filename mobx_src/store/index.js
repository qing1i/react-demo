import React from "react";
import { CounterStore } from "./counter.Store";
import { ListStore } from "./list.Store";

// 1. 声明一个rootStore
class RootStore {
  constructor() {
    // 2. 对子模块进行实例化操作
    this.countStore = new CounterStore();
    this.listStore = new ListStore();
  }
}

// 3. 实例化根store，注入context
const rootStore = new RootStore();
const context = React.createContext(rootStore);

// 4. 导出useStore方法，供组件通过调用该方法使用根实例
const useStore = () => React.useContext(context);

export { useStore };
