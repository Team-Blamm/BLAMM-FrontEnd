import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/ProdDetail/Product';
import { incrementHours, decrementHours } from '../actions/selectActions';


class ProductContainer extends Component {
  render() {
    const match = this.props.match.params.product;
    const products = this.props.products;
    var product = null;
    console.log(this.props);
    const fetched = this.props.fetched;

      switch (fetched) {
        case false:
          return false
        case true:
        product = products.map(product => {
          switch (product.title == match) {
            case true:
              return (
                <div className="productBody" key="product.title">
                  <Product {...this.props} />
                </div>
              )
            break;
            case false:
              return false
            break;
          }
      }
    )};
    return (
      <div className="productContainer">
        <img className="productImage" src={product.imgSrc} alt={"portrait of " + product.title} />
        {product}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    fetched: state.products.fetched,
    hours: state.hours
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    incrementHours: incrementHours,
    decrementHours: decrementHours
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
