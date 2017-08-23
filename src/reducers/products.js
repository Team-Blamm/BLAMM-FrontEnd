import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  products: []
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
    }
  return state;
}

export default products;
