import React, { Component } from "react";

import ProductCard from "../components/ProductCard.js";

class ProductsContainer extends Component {
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

export default ProductsContainer;
