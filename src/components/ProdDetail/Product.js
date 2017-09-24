import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import { deleteProduct, requestForm } from '../../actions/productActions';
import { clearButtons } from '../../actions/cartActions';

import SelectContainer from '../../containers/SelectContainer';
import Description from './Description';
import Reviews from './Reviews';

class Product extends Component {

  DeleteProduct = (product) => {
    return (e) => {
      e.preventDefault();
      this.props.deleteProduct(product);
    }
  }

  ReqForm = () => {
    return (e) => {
      e.preventDefault();
      this.props.requestForm();
    }
  }

  ClearButtons = (e) => {
    e.preventDefault();
    this.props.clearButtons();
  }

  render() {
    console.log(true);
    console.log("^ showButtons in Product")
    const userType = this.props.userType;
    const product = this.props.product;
    const productEncoded = encodeURIComponent(product.title);
    let productPage = null;
    switch (userType) {
      case "user":
        productPage =
          <div className="l-product" key={product.title}>
            <div className="l-image">
              <img className="b-image" src={product.imgSrc} alt={"portrait of " + product.title}/>
            </div>
            <div className="l-info">
                <header className="b-header">
                  <div className="b-header__title">
                    <span className="b-info__h1">{product.title}</span>
                    <span className="b-info__h3">{product.type}</span>
                  </div>
                  <div className="b-info__h2">"{product.tagline}"</div>
                  <Description {...this.props} />
                </header>
                <SelectContainer {...this.props}/>
                {!this.props.showButtons ? (
                  <div></div>
                ) : (
                  <div className="b-itemAdded">
                    <div style={{ display:"block" }}>
                    <div className="b-forms__label">You've saved this item to your cart</div>
                    </div>
                    <div style={{ display:"inline-block" }}>
                    <button onClick={this.ClearButtons} className="b-itemAdded__nav">
                      <Link className="b-forms__submitLink" to='/productlist'>Back to All Products</Link>
                    </button>
                    </div>
                    <div style={{ display:"inline-block" }}>
                    <button onClick={this.ClearButtons} className="b-itemAdded__nav">
                      <Link className="b-forms__submitLink" to={`/productlist/${productEncoded}`}>Purchase more services from {product.title}</Link>
                    </button>
                    </div>
                    <div style={{ display:"inline-block" }}>
                    <button onClick={this.ClearButtons} className="b-itemAdded__nav">
                      <Link className="b-forms__submitLink" to='/shoppingCart'>Proceed to Checkout</Link>
                    </button>
                    </div>
                  </div>
                )}
                <Reviews {...this.props} />

            </div>
          </div>
        break;
      case "admin":
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
        break;
      default:
        break;
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
    hours: state.counter.hours,
    itemAdded: state.cart.itemAdded,
    showButtons: state.cart.showButtons
  }
}

const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        clearButtons: clearButtons,
        requestForm: requestForm
    }, dispatch)
}

Product = reduxForm({
  form: 'product'
})(Product)

export default connect(mapStateToProps, mapDispatchToProps)(Product);
