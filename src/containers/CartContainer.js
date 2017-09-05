import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/cart/CartItem';

class CartContainer extends Component {

  render() {
    return(
      <div className="cartStyle">
        <div>
          <h2>My cart</h2>
        </div>
        {/* left: wrapper for CartItems */}
        <div>
          <CartItem {...this.props} />
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
