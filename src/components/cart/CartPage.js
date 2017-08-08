import React, {Component} from 'react';
import CartItem from './CartItem';

class CartPage extends Component {
  constructor() {
    super();

  }

  render() {

    return(
      <div>
        <div>
          <h2>My cart</h2>
        </div>
        {/* left: wrapper for CartItems */}
        <div>

        </div>
        {/* right: wrapper for totals & checkout */}
        <div>
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

export default CartPage;
