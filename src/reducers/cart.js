import * as types from "../static/actionTypes";
import update from 'immutability-helper';

const initialState = {
  cart: []
}

const cart = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ... state,
        product: action.payload,
        // hours: action.payload
      }

  }
  return state
}




export default cart;
