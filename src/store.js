import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory'

import rootReducer from "./reducers/index"

const history = createHistory()

const middleware = [ thunk, createLogger(), routerMiddleware(history) ];

export default createStore(rootReducer, {}, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
