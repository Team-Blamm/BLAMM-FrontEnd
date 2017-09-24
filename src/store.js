import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index"

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const middleware = [ thunk, createLogger()];

export default createStore(rootReducer, {}, compose(applyMiddleware(...middleware), devTools));
