import React from "react";
import fetch from "isomorphic-fetch";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as types from "./actionTypes"


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


{/*}// function requestOneProduct() {
//   return {
//     type: types.REQUEST_ONE_PRODUCT,
//   }
// };
//
// function receiveOneProduct(payload) {
//   return {
//     type: types.RECEIVE_ONE_PRODUCT,
//     payload
//   }
// };
//
//
// export const fetchOneProduct = (product) => {
//   let match = this.props.match.params.product;
//   return (dispatch) => {
//     dispatch(requestOneProduct());
//       return fetch('https://blamm-store-backend.herokuapp.com/api/v2/products/name/${match}')
//         .then(resp => resp.json())
//         .then(json => {
//           let product = json.results
//           dispatch({type: types.FETCH_ONE_PRODUCT, payload: product});
//           dispatch(receiveOneProduct(product))
//         })
//     }
// }; */}
