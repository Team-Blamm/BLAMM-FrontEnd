import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchProducts } from '../actions/productActions';

import ProductCard from "../components/ProductCard.js";

class ProductList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  renderContent() {
    const match = this.props.match;
    const { products } = this.props.products;
    let { fetched } = this.props.fetched;

    switch (fetched) {
      case false:
        return false
      case true:
        return (
          <ProductCard {...this.props} />
        )
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.props.product.type}</h3>
          <div className="productListGrid">
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList;
