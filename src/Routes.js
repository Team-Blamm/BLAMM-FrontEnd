import React from 'react'

import App from "./App";
import Admin from "./components/Admin.js";
import ProductList from "./containers/ProductList.js";
import ProdDetails from "./containers/ProdDetails.js";
import BaseLayout from "./components/base_layout.js";
import ProdDetail from "./containers/ProductCardRoute.js"
import CartPage from "./components/cart/CartPage.js";

const Routes = [
    { path: '/', component: <App /> },
    { path: '/Admin', component: <Admin /> },
    { path: '/productlist', component: <ProductList />},
    { path: '/productlist/name/:product', component: <ProdDetails />}
  ];

export default Routes
