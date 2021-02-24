import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../client/reducers";

export default (initialState) => {
  const store = createStore(reducers, initialState || {}, applyMiddleware(thunk));

  return store;
}