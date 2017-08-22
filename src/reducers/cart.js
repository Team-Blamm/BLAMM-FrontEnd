import * as types from "../static/actionTypes";
import update from 'immutability-helper';

const initialState = {
  cartProducts: []
}

const cart = (state = initialState, action) => {
  console.log(action.product);
  console.log(action.hours);
  switch (action.type) {
    case types.ADD_TO_CART:
      return update(state, {
        cartProducts: {
          $push: [
            {
              "product": action.product,
              "hours": action.hours
            }
          ]
        }
      });

  }
  return state
}

export default cart;
