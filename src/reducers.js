// const counterReducer = (state = {
//   result: 1,
//   lastValues: []
// }, action) => {
//
//   switch (action.type) {
//     case "INC":
//       state = {
//         ...state,
//         result: state.result + action.payload,
//         lastValues: [...state.lastValues, action.payload]
//       };
//       break;
//     case "DEC":
//       state = {
//         ...state,
//         result: state.result - action.payload,
//         lastValues: [...state.lastValues, action.payload]
//       };
//   }
//   return state;
// }
import { FETCH_PRODUCTS } from "./actions"

export const productsReducer = (state={
  fetching: false,
  fetched: false,
  products: [],
  error: null
}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_FULFILLED" : {
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      }
      break;
    }
  }
  return state;
}
