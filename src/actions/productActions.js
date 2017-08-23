import * as types from "../static/actionTypes"
import users from "../defaultUsers"

import base64 from 'base-64';

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
    return fetch("https://blamm-store-backend.herokuapp.com/api/v2/products", {
      method: "GET",
      mode: "cors",
    })
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
	    redirect: 'follow',
	    headers: new Headers({
        'Authorization': 'Basic '+ base64.encode('username:password'),
        'Content-Type': 'application/json'
      }),
      body: {

        }
      })
  }
};

export const deleteProduct = (product) => {
  console.log(product.title);
  console.log(users.admin.username);
  console.log('Basic ' + base64.encode(users.admin.username + ':' + users.admin.password))
  return (dispatch) => {
    console.log('delete request initiated');
    let userpass = users.admin.username + ":" + users.admin.password
    return fetch(`https://blamm-store-backend.herokuapp.com/api/v2/products/${product.title}/delete`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': 'Basic '+ base64.encode(userpass),
      }),
    })
      .then(() =>
        dispatch({ type: types.DELETE_PRODUCT, payload: product.title})
      )
  }
}
