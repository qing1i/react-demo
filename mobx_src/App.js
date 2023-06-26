// 1. 导入store实例
// import { counterStore } from "./store/counter.Store";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";

function App() {
  // const rootStore = useStore();
  const { countStore, listStore } = useStore();

  return (
    <div className="App">
      {/* 2. 使用store中的数据 */}
      {/* <h3>当前值为{counterStore.count}</h3> */}
      {/* 3. 修改store中的数据 */}
      {/* <button onClick={counterStore.addCount}>click</button> */}
      {/* 使用计算属性 */}
      {/* <h3>{counterStore.filterList.join("-")}</h3> */}
      {/* <button onClick={counterStore.addList}>修改数组</button> */}

      <h3>当前值为{countStore.count}</h3>
      <button onClick={countStore.addCount}>click</button>
    </div>
  );
}

// 4. 让组件视图响应数据变化
export default observer(App);
