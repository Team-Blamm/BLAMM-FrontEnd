import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartItem from '../components/cart/CartItem';

class CartContainer extends Component {

  render() {
    const product = this.props.product;
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
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // userType: state.authed.userType,
    cart: state.cart.cartProducts,
    hours: state.counter.hours
  }
};

export default connect(mapStateToProps)(CartContainer);
