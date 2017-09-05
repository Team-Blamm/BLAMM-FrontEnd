import * as types from "../static/actionTypes";
import update from 'immutability-helper';

const initialState = {
  cartProducts: []
}

const cart = (state = initialState, action) => {
  console.log(action);
  console.log(action.service);
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
              "service": action.service,
              "subtotal": (action.hours * action.product.rate)
            }
          ]
        },
      });
    default:
      return state;
  }
}

export default cart;
