import base64 from 'base-64';
import { SubmissionError } from 'redux-form';

import * as types from "../static/actionTypes"
import users from "../defaultUsers"

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
      method: "GET"
    })
      .then(resp => resp.json())
      .then(json => {
        let products = json.results
        dispatch({type: types.FETCH_PRODUCTS, payload: products});
        dispatch(receiveProducts(products))
    })
  }
};

export function reqForm() {
  return {
    type: types.REQ_FORM
  };
};

export const addProduct = (values) => {
  return (dispatch) => {
    console.log('add request initiated');
    console.log('values:', values);
    let newProd = {
      "title": "",
      "tagline": "",
      "type": "",
      "description": "",
      "rate": 0,
      "imgSrc": "",
      "bgImg": "",
      "services": []
    };
    for (let key of Object.keys(values)) {
      if (key === "services") {
        newProd[key].push(values[key]);
      } else {
        newProd[key] = values[key]
      }
    }
    console.log('newProd', JSON.stringify(newProd));
    let userpass = users.admin.username + ":" + users.admin.password;
    return (
      fetch(`https://blamm-store-backend.herokuapp.com/api/v2/products/add`, {
        method: 'POST',
  	    headers: new Headers({
          'Authorization': 'Basic '+ base64.encode(userpass),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newProd)
      })
      .then((resp) => {
        console.log('new product post complete', resp);
        dispatch({ type: types.CREATE_PRODUCT })
      })
      .catch((err) => {
        console.log('err posting new product', err);
      })
    )
  }
}

export const editProduct = (values) => {
  return (dispatch) => {
    console.log('edit request initiated');
    console.log(values);
    let title = encodeURIComponent(values.product);
    console.log(title);
    console.log(`https://blamm-store-backend.herokuapp.com/api/v2/products/${title}/update`);
    let userpass = users.admin.username + ":" + users.admin.password;
    return (
      fetch(`https://blamm-store-backend.herokuapp.com/api/v2/products/${title}/update`, {
        method: 'PUT',
        headers: new Headers({
          'Authorization': 'Basic '+ base64.encode(userpass),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(values)
      })
      .then(() =>
        dispatch({ type: types.UPDATE_PRODUCT})
      )
    )
  }
}

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
