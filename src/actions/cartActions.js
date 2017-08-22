import * as types from "../static/actionTypes"



export function addToCart(product) {
  console.log(product);
  return {
    product: product,
    type: types.ADD_TO_CART
  }
}
