import * as types from "../static/actionTypes"



export function addToCart(product) {
  console.log(product);
  return {
    payload: product,
    type: types.ADD_TO_CART
  }
}
