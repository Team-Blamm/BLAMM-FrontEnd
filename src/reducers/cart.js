import * as types from "../static/actionTypes";


const cart = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ... state,
        product: this.props.product,
        hours: null
      }

  }
  return state
}




export default cart;
