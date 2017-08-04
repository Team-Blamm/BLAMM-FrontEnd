import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchProducts } from '../actions';
import ProductCard from "../components/ProductCard.js";

class ProductList extends Component {

  componentWillMount() {
    console.log(this.props)
    this.props.fetchProducts();
  }

  render() {
    let productList = null;
    let match = this.props.match;
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
                  <img className="" src={product.imgSrc} alt={product.title}/>
                </div>
                <div><Link to={`${match.url}/${product.title}`}>
                  {product.title}
                </Link></div>
                <div>
                  <p>
                    {product.title}
                  </p>
                  <p>#{product.type}</p>
                  <p>
                    {product.rate}
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
