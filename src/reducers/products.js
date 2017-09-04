import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  products: [],
  status: null,
  reqForm: false
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
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      }
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        reqForm: false,
        payload: action.payload
      }
    case types.DELETE_PRODUCT:
      console.log("delete successful");
      console.log(action.payload);
      return {
        ...state,
        status: "deleted"
      }
    case types.REQ_FORM:
      console.log("requested form page");
      return {
        ...state,
        reqForm: true
      }
    case types.CREATE_PRODUCT:
      console.log("create successful");
      return {
        ...state,
        status: "created"
      }
    case types.UPDATE_PRODUCT:
      console.log("update successful");
      return {
        ...state,
        status: "updated"
      }
    default:
      return state;
    }
}

export default products;
