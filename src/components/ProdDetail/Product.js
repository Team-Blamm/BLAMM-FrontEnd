import React, { Component } from "react";
import { connect } from 'react-redux';

import Select from './Select';
// import AddToCart from './AddToCart';
import Description from './Description';
import Reviews from './Reviews';

class Product extends Component {
  render() {
    const userType = this.props.userType;
    const product = this.props.product;
    console.log(product)
    let productPage = null;

    switch (userType) {
      case "user":
        return (
          productPage =
            <div key="product">
              <div className="imageContainer">
                <img className="productImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
              </div>
              <div className="textContainer">
                <header className="header">
                  <h2>{product.title}</h2>
                  <h4>{product.type}</h4>
                  <h3>{product.tagline}</h3>
                </header>
                <Select {...this.props} />
                {/* <AddToCart {...this.props} /> */}
                <Description {...this.props} />
                <Reviews {...this.props} />
              </div>
            </div>
        )
      break;
      case "admin":
        return (
          productPage =
            <div key="product">
              <div className="imageContainer">
                <img className="productImage"src={product.img_src} alt={"portrait of " + product.title}/>
              </div>
              <div className="textContainer">
                <header className="header">
                  <h2>{product.title}</h2>
                  <h4>{product.type}</h4>
                  <h3>{product.tagline}</h3>
                </header>
              <Select {...this.props} />
              <Reviews {...this.props} />
              <Description {...this.props} />
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

export default connect(mapStateToProps)(Product);
