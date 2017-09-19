import React, {Component} from 'react';

class CartItem extends Component {
  render() {

    const cart = this.props.cart;
    let cartTotals = 0;
    console.log(cart);
    let cartProducts = cart.map(product => {
    let itemTotal = product.subtotal;
    let cartItemKey = product.title + "_" + Math.floor(Math.random()*10000);
      return (
        <div key={cartItemKey} className="b-cartItem">
          <div>
            <img className="b-productListing__image" src={product.product.imgSrc} alt={"portrait of " + product.product.title} />
          </div>
          <div className="b-cartItem__info">
            <header>
              <h2>{product.product.title}</h2>
            </header>
            <div>
              Service: {product.service}
            </div>
            <div className="cartCardHours">
              Hours: {product.hours}
            </div>
            <div className="cartCardTotal">
              Item Total: {itemTotal}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="l-subtotals">
        <div>
          <h2>My cart</h2>
        </div>
        <div>
          {cartProducts}
        </div>
      </div>
    );
  }
}

export default CartItem;
