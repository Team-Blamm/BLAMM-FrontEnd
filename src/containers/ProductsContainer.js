import React, {Component} from "react";

import ProductCard from "../components/ProductCard.js";

class ProductsContainer extends Component {
  render() {
    const match = this.props.match;
    const products = this.props.products;
    let fetched = this.props.fetched;

    switch (fetched) {
      case false:
        return false
      case true:
        return (
          <div>
            <div>
              <div className="productListGrid">
                <ProductCard {...this.props}/>
              </div>
            </div>
          </div>
        )
    }
  }
}

export default ProductsContainer;
