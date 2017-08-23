import * as types from "../static/actionTypes"



export function addToCart(product, hours, service) {
  return {
    product: product,
    hours: hours,
    service: service,
    type: types.ADD_TO_CART
  }
}
