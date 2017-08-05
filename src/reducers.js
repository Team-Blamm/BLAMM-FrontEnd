import { combineReducers } from 'redux';

import * as types from "./actionTypes";

const initialProductsState = {
  fetching: false,
  fetched: false,
  products: [],
  error: null
}

const productsReducer = (state=initialProductsState, action) => {
  switch (action.type) {
    case types.REQUEST_PRODUCTS:
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    case types.FETCH_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      }
    case types.RECEIVE_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        payload: action.payload
      }
      break;
    }
  return state;
}

{/* }// const initialProductState = {
//   fetching: false,
//   fetched: false,
//   product: [],
//   error: null
// }
//
// const productReducer = (state=initialProductState, action) => {
//   switch (action.type) {
//       case types.REQUEST_ONE_PRODUCT:
//         return {
//           ...state,
//           fetching: true,
//           fetched: false
//         }
//       case types.FETCH_ONE_PRODUCT:
//         return {
//           ...state,
//           fetching: false,
//           fetched: true,
//           product: action.payload
//         }
//       case types.RECEIVE_ONE_PRODUCT:
//         return {
//           ...state,
//           fetching: false,
//           fetched: true,
//           product: action.payload
//         }
//       break;
//     }
//   return state;
// } */}


const rootReducer = combineReducers({products: productsReducer})

export default rootReducer;
