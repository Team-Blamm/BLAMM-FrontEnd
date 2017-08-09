import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';
import { formReducer as reducer } from 'redux-form';

const rootReducer = combineReducers({
  authed,
  products,
  counter,
  reducer
});

export default rootReducer;
