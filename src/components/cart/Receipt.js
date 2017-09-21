import React, { Component } from 'react';

import CartTotal from "./CartTotal";

class Receipt extends Component {

  render() {
    const cart = this.props.cart;
    const cartTotal = this.props.cartTotal;

    let cartProducts = cart.map(product => {
    let itemTotal = product.subtotal;
    let cartItemKey = product.title + "_" + Math.floor(Math.random()*10000);
    return (
      <div key={cartItemKey} className="l-receipt">
        <div >
          <div className="cartCardStyle">
            <div className="b-productListing__image">
              <img className="thumbnailImage" src={product.product.imgSrc} alt={"portrait of " + product.product.title}/>
            </div>
            <div className="cartItemInfo">
              <header>
                <h2>{product.product.title}</h2>
              </header>
              <div className="cartCardHours">
                Hours: {product.hours}
              </div>
              <div className="cartCardTotal">
                Item Total: {itemTotal}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    })
    return (
      <div>
        <div className="cartItems">
          {cartProducts}
        </div>
        <div className="cart-total-container">
          <CartTotal cart={this.props.cart}
            cartTotal={this.props.cartTotal}
          />
        </div>
      </div>
    )
  }
}

export default Receipt;
