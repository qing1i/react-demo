// import { INCREMENT, DECREMENT } from "./constant";
import { INCREMENT, DECREMENT } from "../constant";

const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    // case "increment":
    case INCREMENT:
      return preState + data;
    // case "decrement":
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
