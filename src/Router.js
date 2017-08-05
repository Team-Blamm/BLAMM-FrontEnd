import React from 'react'
import Home from './components/Home'
import About from './components/About'

const Routes = [
    { path: '/', component: <App /> },
    { path: '/Admin', component: <Admin /> },
    { path: '/productlist', component: <ProductList />},
  ];

export default Routes
