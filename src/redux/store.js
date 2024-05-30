import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
