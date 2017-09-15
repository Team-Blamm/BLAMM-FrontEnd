import * as types from "../static/actionTypes";
import update from 'immutability-helper';

const initialState = {
  itemAdded: false,
  cartProducts: [],
  cartTotal: 0,
  showButtons: false,
  checkedOut: false
}

const cart = (state = initialState, action) => {
  console.log(action);
  console.log(action.service);
  switch (action.type) {
    case types.ADD_TO_CART:
      return update(state, {
        itemAdded: {$set: true},
        showButtons: {$set: true},
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
    case types.CHECK_OUT:
      return update(state, {
        checkedOut: {$set: true},
        itemAdded: {$set: false}
      });
    case types.CLEAR_BUTTONS:
      return update(state, {
        showButtons: {$set: false}
      })
    default:
      return state;
  }
}

export default cart;
