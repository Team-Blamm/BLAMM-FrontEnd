import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { deleteProduct, reqForm } from '../../actions/productActions';

import SelectContainer from '../../containers/SelectContainer';
import FormContainer from '../../containers/SelectContainer';
import Description from './Description';
import Reviews from './Reviews';

class Product extends Component {

  DeleteProduct = (product) => {
    return (e) => {
      e.preventDefault();
      this.props.dispatch(deleteProduct(product));
    }
  }

  ReqForm = () => {
    return (e) => {
      e.preventDefault();
      this.props.dispatch(reqForm());
    }
  }

  render() {
    const userType = this.props.userType;
    const product = this.props.product;
    let productPage = null;
    switch (userType) {
      case "user":
        return (
          productPage =
            <div key={product.title}>
              <div className="imageContainer">
                <img className="thumbnailImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
              </div>
              <div className="textContainer">
                <header className="header">
                  <h2>{product.title}</h2>
                  <h4>{product.type}</h4>
                  <h3>{product.tagline}</h3>
                </header>
                <SelectContainer {...this.props}/>
                <Description {...this.props} />
                <Reviews {...this.props} />
              </div>
            </div>
        )
      break;
      case "admin":
        return (
          productPage =
            <div key={product.title}>
              <div className="imageContainer">
                <img className="thumbnailImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
              </div>
              <div className="textContainer">
                <header className="header">
                  <h2>{product.title}</h2>
                  <h4>{product.type}</h4>
                  <h3>{product.tagline}</h3>
                </header>
                <SelectContainer {...this.props}/>
                <Description {...this.props} />
                <Reviews {...this.props} />
                <Field onClick={this.DeleteProduct(this.props.product)}  name="deleteProduct" className="deleteProduct" component="button" value={product.title}>Delete Product</Field>
                <Field onClick={this.ReqForm()}  name="editProduct" className="editProduct" component="button">Edit Product</Field>
              </div>
            </div>
        )
    }
    return (
      <div>
        {productPage}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    product: ownProps.product,
    hours: state.counter.hours
  }
}

Product = reduxForm({
  form: 'product'
})(Product)

export default connect(mapStateToProps)(Product);
