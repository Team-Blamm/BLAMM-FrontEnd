import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductCard from "../components/ProductCard.js";

class ProductList extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.products.results);
    let productList = (this.props.products || []).map((product) => {
      return (
        <div className="productListGrid">
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
        </div>
      )
    })
    return (
      <div>
        <div>
          <h1>Product Cards</h1>
          {productList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products || []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: function() {
      dispatch(fetchProducts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
