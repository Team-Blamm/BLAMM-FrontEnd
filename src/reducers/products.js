import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  products: [],
  deleted: false,
}

const products = (state=initialState, action) => {
  switch (action.type) {
    case types.REQUEST_PRODUCTS:
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    case types.FETCH_PRODUCTS:
      // console.log(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      }
    case types.RECEIVE_PRODUCTS:
      // console.log(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        payload: action.payload
      }
    case types.DELETE_PRODUCT:
      console.log("delete successful")
      console.log(action.payload);
      return {
        ...state,
        products: state.products.filter(product => action.payload !== product.title),
        deleted: true,
      }
    }
  return state;
}

export default products;
