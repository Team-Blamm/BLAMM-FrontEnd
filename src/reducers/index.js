import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';
// import cart from './cart';

const rootReducer = combineReducers({
  authed,
  products,
  counter,
  // cart
});

export default rootReducer;
