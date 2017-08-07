import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/ProdDetail/Product';
import { incrementHours, decrementHours } from '../actions/selectActions';


class ProductContainer extends Component {
  render() {
    let match = this.params;
    console.log(match);
    const products = this.props.products;
    var product = null;
    console.log(this.props);

    const fetched = this.props.fetched;

      switch (fetched) {
        case false:
          return false
        case true:
            console.log(fetched);
            debugger;

        product = products.filter(product => {
          return product == match;

              return (
                <div className="productBody" key="product.title">
                  <div className="productContainer">
                    <img className="productImage" src={product.imgSrc} alt={"portrait of " + product.title} />
                    {product}
                  </div>
                  <p>Please</p>
                  <Product {...this.props} />
                </div>
              )
      }
    )};

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
