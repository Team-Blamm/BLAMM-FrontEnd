import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productActions';
import { incrementHours, decrementHours } from '../actions/selectActions';

import Product from '../components/ProdDetail/Product';
import FormContainer from './FormContainer';

class ProductContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    let match = this.props.match.params.product;
    const products = this.props.products;
    const fetched = this.props.fetched;
    const reqForm = this.props.reqForm;
    let oneProduct = null;


    switch (fetched) {
      case false:
        return false
      case true:
        oneProduct = products.filter(product => {
          return product.title === match;
        });
        return (
          <div className = "productContainer">
            { reqForm === true ? (
              <div className="productBody">
                <FormContainer product={oneProduct[0]} {...this.props} />
              </div>
            ) : (
              <div className="productFormBody">
                <Product product={oneProduct[0]} {...this.props} />
              </div>
            )}
          </div>
        )
      default:
        return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    products: state.products.products,
    fetched: state.products.fetched,
    status: state.products.status,
    reqForm: state.products.reqForm,
    hours: state.counter.hours
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
