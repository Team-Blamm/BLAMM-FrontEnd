import React, {Component} from 'react';
import CartItem from '../components/cart/CartItem';

class CartContainer extends Component {

  render() {

    return(
      <div>
        <div>
          <h2>My cart</h2>
        </div>
        {/* left: wrapper for CartItems */}
        <div className="cartItems">
          <CartItem />
        </div>
        {/* right: wrapper for totals & checkout */}
        <div className="cartTotals">
          <div>
            Individual subtotals [passed from CartCards]
          </div>
          <div>
            Total [sum of sums]
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }

}

export default CartContainer;
