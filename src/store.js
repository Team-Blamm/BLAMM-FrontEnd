import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

import rootReducer from "./reducers/index"


const middleware = [ thunk, createLogger()];

export default createStore(rootReducer, {}, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
