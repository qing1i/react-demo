import React from "react";
import TaskStore from "./task.Store";

class RootStore {
  constructor() {
    this.taskStore = new TaskStore();
  }
}

const StoreContext = React.createContext(new RootStore());
export const useStore = () => React.useContext(StoreContext);
