import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartItem from '../components/cart/CartItem';

class CartContainer extends Component {

  render() {
    console.log("CartContainer props");
    console.log(this.props);
    // console.log(this.state.cart);
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // userType: state.authed.userType,
    product: state.cart.product,
    hours: state.counter.hours
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators
// }

export default connect(mapStateToProps)(CartContainer);
