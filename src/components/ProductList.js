import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import SideBar from './ProductListSideBar.js';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      match: this.props.match,
      allProducts:[]
    };
  }
  componentDidMount() {
    console.log("'Product List' did mount");
    fetch("https://blamm-store-backend.herokuapp.com/api/v1/products")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ productList: data, allProducts: data });
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
              <div className="productListContainer">
              <div className="sideBarContainer">
                <SideBar productList={this.state.productList} match={this.state.match}/>
              </div>
              <div className="productCardsContainer">
                <ProductCard
                  productList={this.state.productList}
                  match={this.state.match}
                />
              </div>
              </div>
            </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default ProductList;
