import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductCard from "../components/ProductCard.js";

class ProductList extends Component {

  componentWillMount() {
    console.log(this.props)
    this.props.fetchProducts();
  }

  render() {
    let productList = null;
    if (this.props.fetched === false) {
      return false
    } else if (this.props.fetched) {
      console.log(this.props.products);
      productList = this.props.products.map((product) => {
        return (
        <div key={product.title}>
            <div className="productBorder">
              <div>
                <div>
                  <img className="" src={product.img_src} alt={product.title}/>
                </div>
                <div>
                  <p>
                    {product.title}
                  </p>
                  <p>
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
        </div>
      )
    })
    console.log(productList)
  }
    return (
      <div>
        <div>
          <h1>Product Cards</h1>
          <div className="productListGrid">
            {productList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products.products,
    fetched: state.products.fetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
