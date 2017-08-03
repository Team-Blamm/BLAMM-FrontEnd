import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { productsReducer } from "./reducers"

const middleware = [promise(), thunk, createLogger()];

export default createStore(productsReducer, {}, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
