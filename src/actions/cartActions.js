import * as types from "../static/actionTypes"



export function addToCart(product, hours) {
  return {
    product: product,
    hours: hours,
    type: types.ADD_TO_CART
  }
}
