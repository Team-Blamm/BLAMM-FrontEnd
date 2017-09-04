import React, {Component} from 'react';
import Select from '../ProdDetail/Select';

class CartItem extends Component {
  render() {

    const cart = this.props.cart;

    let cartTotals = 0;
    // let getTotals = cart.map(product => {
    //   return cartTotals += product.subtotal;
    // });
    let cartProducts = cart.map(product => {
      let itemTotal = product.subtotal;
      let cartItemKey = product.title + "_" + Math.floor(Math.random()*10000);
      return (
        <div key={cartItemKey}>
          <div className="cartCardStyle">
            <div className="cartImageStyle">
              <img className="thumbnailImage" src={product.product.imgSrc} alt={"portrait of " + product.product.title}/>
            </div>
            <div className="cartItemInfo">
              <header>
                <h2>{product.product.title}</h2>
                {/* <h4>{product.type}</h4>
                <h3>{product.tagline}</h3> */}
              </header>
              <Select {...this.props}/>
              <div>
                Service: {product.service}
              </div>
              <div className="cartCardHours">
                {/* <button value="-" onClick={this.decrementHours}>-</button> */}
                Hours: {product.hours}
                {/* <button value="+" onClick={this.incrementHours}>+</button> */}
              </div>
              <div className="cartCardTotal">
                Item Total: {itemTotal}
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
        <div className="cartTotals">
          <div>
            Total {cartTotals}
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
