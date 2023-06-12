import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./count_reducer";

export default legacy_createStore(countReducer, applyMiddleware(thunk));
