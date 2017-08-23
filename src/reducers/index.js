import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';
import cart from './cart';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  authed,
  products,
  counter,
  cart,
  formReducer
});

export default rootReducer;
