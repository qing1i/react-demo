import { INCREMENT, DECREMENT } from "./constant";

// function createIncrementAction(data) {
//   return { type: "increment", data: data };
// }

// function createDecrementAction(data) {
//   return { type: "decrement", data };
// }

// 同步action 返回的是对象类型

export const createIncrementAction = (data) => ({
  //   type: "increment",
  type: INCREMENT,
  data,
});

export const createDecrementAction = (data) => ({
  //   type: "decrement",
  type: DECREMENT,
  data,
});

// 异步action，返回值是函数类型
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
