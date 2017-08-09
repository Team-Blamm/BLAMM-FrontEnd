import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';

import cart from './cart';


import { formReducer as reducer } from 'redux-form';

const rootReducer = combineReducers({
  authed,
  products,
  counter,

  cart,
  form: reducer,

});

export default rootReducer;
