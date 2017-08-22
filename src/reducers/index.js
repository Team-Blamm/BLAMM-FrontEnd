import { combineReducers } from 'redux';

import authed from './authed';
import products from './products';
import counter from './counter';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  authed,
  products,
  counter,
  formReducer
});

export default rootReducer;
