import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts /*deleteProduct*/ } from '../actions/productActions';
import ProductsContainer from "./ProductContainer";

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProducts();
  }

  render() {
    const userType = this.props.userType;
    return (
      <div className="productsContainer">
        <header>
          <h2>Welcome to Blamm, { this.props.userType }</h2>
          <h3>Cool Logo</h3>
            <ProductsContainer {...this.props} />
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    fetched: state.products.fetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProducts: fetchProducts
  }, dispatch)
    // deleteProduct: () => {
    //   dispatch(deleteProduct())
    // }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
