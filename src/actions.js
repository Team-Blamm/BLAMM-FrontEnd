export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const GET_PROD_DETAILS = "GET_PROD_DETAILS";
export const ADD_TO_CART = "ADD_TO_CART";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CALC_TOTAL = "CALC_TOTAL";

export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_SERVICE = "FILTER_BY_SERVICE";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";


export const fetchProducts = (products) => {
  return (dispatch) => {
    fetch("https://blamm-store-backend.herokuapp.com/api/v1/products")
      .then(resp => {
      console.log(resp);
      dispatch({type: FETCH_PRODUCTS, payload: resp.json()});
    })
  }
}
