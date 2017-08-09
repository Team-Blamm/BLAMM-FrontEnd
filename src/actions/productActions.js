import * as types from "../static/actionTypes"
const base64 = require('base-64')

function requestProducts() {
  return {
    type: types.REQUEST_PRODUCTS,
  }
};

function receiveProducts(payload) {
  return {
    type: types.RECEIVE_PRODUCTS,
    payload
  }
};

export const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(requestProducts());
    return fetch("https://blamm-store-backend.herokuapp.com/api/v2/products")
      .then(resp => resp.json())
      .then(json => {
        let products = json.results
        dispatch({type: types.FETCH_PRODUCTS, payload: products});
        dispatch(receiveProducts(products))
    })
  }
};



export const addProduct = (product) => {
  return (dispatch) => {
    return fetch('https://blamm-store-backend.herokuapp.com/api/v2/products/add', {
      method: "POST",
      mode: 'cors',
	    redirect: 'follow',
	    headers: new Headers({
        'Authorization': 'Basic '+ base64.encode('username:password'),
        'Content-Type': 'application/json'
      }),
      body: {
        
        }
      })
  }
}
