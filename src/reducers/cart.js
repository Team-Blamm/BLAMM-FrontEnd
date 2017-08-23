import * as types from "../static/actionTypes";
import update from 'immutability-helper';

const initialState = {
  cartProducts: [],
  cartTotals: []
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
              "title": action.product.title,
              "rate": action.product.rate,
              "imgSrc": action.product.imgSrc,
              "hours": action.hours,
              "subtotal": (action.hours * action.product.rate)

            }
          ]
        },
        // cartTotals: {
        //   $push:
        // }
      });

  }
  return state
}

export default cart;
