import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/ProdDetail/Product';
import { incrementHours, decrementHours } from '../actions/selectActions';


class ProductContainer extends Component {
  render() {
    const match = this.props.match.params.product;
    const { products } = this.props.products;
    const { fetched } = this.props.fetched;

    const product = products.map(product => {
      switch (fetched) {
        case false:
          return false
        case true:
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
    })
    return (
      <div className="productContainer">
        <img className="productImage" src={this.props.product.imgSrc} alt={"portrait of " + this.props.product.title} />
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
