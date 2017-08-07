import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/ProdDetail/Product';
import { fetchProducts } from '../actions/productActions';
import { incrementHours, decrementHours } from '../actions/selectActions';


class ProductContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    let match = this.props.match.params.product;
    console.log(match);
    const products = this.props.products;
    var oneProduct = null;
    console.log(this.props);

    const fetched = this.props.fetched;

      switch (fetched) {
        case false:
          return false
        case true:
          console.log(fetched);
          oneProduct = products.filter(product => {
            return product.title == match;
          });
          console.log(oneProduct[0]);
            return (
              <div className="productBody" key="oneProduct[0].title">
                <div className="productContainer">
                  <Product {...this.props} />
                </div>
              </div>
            )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.authed.userType,
    products: state.products.products,
    fetched: state.products.fetched,
    hours: state.hours
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    incrementHours: incrementHours,
    decrementHours: decrementHours,
    fetchProducts: fetchProducts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
