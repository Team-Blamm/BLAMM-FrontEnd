import React, { Component } from "react";
import { connect } from 'react-redux';

import Product from '../components/ProdDetail/Product';
import { incrementHours, decrementHours } from '../actions/selectActions';


class ProductContainer extends Component {
  renderContent() {
    const match = this.props.match.params.product;
    const { products } = this.props.products;
    const { fetched } = this.props.fetched;

    const product = products.map(product => {
    switch (fetched) {
      case false:
        return false
      case true:
        switch (product.title) {
          case (product.title == match):
            return (
              <div className="productBody" key="product.title">
                <Product {...this.props}/>
              </div>
            )
          }
        break;
      }
    })
  }

  render() {
    return (
      <div className="productContainer">
        <img className="productImage" src={this.props.product.imgSrc} alt={"portrait of " + this.props.product.title} />
        {this.renderContent()}
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
  return {
    incrementHours: (hours) => {
      return dispatch(incrementHours(hours));
    },
    decrementHours: (hours) => {
      return dispatch(decrementHours(hours));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
