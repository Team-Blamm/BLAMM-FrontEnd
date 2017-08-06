import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';

const rootReducer = combineReducers({
  authed,
  products,
  counter
});

export default rootReducer;
