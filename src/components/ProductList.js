import React, { Component } from "react";
import ProductCard from "./ProductCard.js";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      match: this.props.match
    };
  }
  componentDidMount() {
    console.log("'Product List' did mount");
    fetch("https://blamm-store-backend.herokuapp.com/api/v1/products")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ productList: data });
        console.log(this.state.productList);
      });
  }

  render() {
    return (
      <div>
        {this.state.productList.count > 0
          ? <div>
              <div>
                <h1>Product Cards</h1>
              </div>
              <ProductCard
                productList={this.state.productList}
                match={this.state.match}
              />
            </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default ProductList;
