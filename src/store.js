import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers"

const middleware = [ thunk, createLogger()];

export default createStore(rootReducer, {}, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
