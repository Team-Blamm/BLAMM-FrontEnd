import React, {Component} from 'react';
import CartItem from '../components/cart/CartItem';

class CartContainer extends Component {

  render() {
    console.log("CartContainer props");
    console.log(this.props);
    return(
      <div>
        <div>
          <h2>My cart</h2>
        </div>
        {/* left: wrapper for CartItems */}
        <div className="cartItems">
          <CartItem {...this.props} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    // userType: state.authed.userType,
    product: state.cart.product,
    // hours: state.counter.hours
  }
};

export default CartContainer;
