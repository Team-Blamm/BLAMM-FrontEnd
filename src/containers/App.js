import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts /*deleteProduct*/ } from '../actions/productActions';
import ProductsContainer from "./ProductsContainer";

class App extends Component {

  render() {
    const userType = this.props.userType;
    return (
      <div className="productsContainer">
        <header>
          <h2>Welcome to Blamm, { this.props.userType }</h2>
          <h3>Cool Logo</h3>
        </header>
      </div>
    )
  }
}

export default App;
