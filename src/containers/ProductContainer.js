import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Product from '../components/ProdDetail/Product';
import { fetchProducts } from '../actions/productActions';
import { incrementHours, decrementHours } from '../actions/selectActions';

class ProductContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    let match = this.props.match.params.product;
    const products = this.props.products;
    var oneProduct = null;

    const fetched = this.props.fetched;

      switch (fetched) {
        case false:
          return false
        case true:
          oneProduct = products.filter(product => {
            return product.title == match;
          });
            return (
              <div className="productBody" key="oneProduct[0].title">
                <div className="productContainer">
                  <Product product={oneProduct[0]} {...this.props}/>
                </div>
              </div>
            )
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    products: state.products.products,
    fetched: state.products.fetched,
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
