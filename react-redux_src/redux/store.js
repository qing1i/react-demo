import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import countReducer from "./count_reducer";
// import countReducer from "./reducers/count";
// import personReducer from "./reducers/person";
import reducer from "./reducers";

// const allReducer = combineReducers({
//   count: countReducer,
//   person: personReducer,
// });

// export default legacy_createStore(countReducer, applyMiddleware(thunk));
// export default legacy_createStore(allReducer, applyMiddleware(thunk));
export default legacy_createStore(reducer, applyMiddleware(thunk));
