import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productActions';

import ProductCard from "../components/ProductCard.js";

class ProductsContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    let fetched = this.props.fetched;

    switch (fetched) {
      case false:
        return false
      case true:
        return (
          <div>
              <ProductCard {...this.props}/>
          </div>
        )
      default:
        return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    products: state.products.products,
    fetched: state.products.fetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProducts: fetchProducts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
