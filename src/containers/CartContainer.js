import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { checkOut } from '../actions/cartActions';

import CartItem from '../components/cart/CartItem';
import CartTotal from '../components/cart/CartTotal';
import Receipt from '../components/cart/Receipt';

class CartContainer extends Component {

  render() {
    return(
        <div>
          {this.props.checkedOut ? (
            <Receipt cart={this.props.cart}
              cartTotal={this.props.cartTotal}
            />
          ) : (
            <div className="l-cart">
              <CartItem {...this.props} />
              <CartTotal cart={this.props.cart}
                cartTotal={this.props.cartTotal}
                checkOut={this.props.checkOut}
              />
            </div>
          )}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // userType: state.authed.userType,
    cart: state.cart.cartProducts,
    hours: state.counter.hours,
    cartTotal: state.cart.cartTotal,
    checkedOut: state.cart.checkedOut
  }
};

const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        checkOut: checkOut
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
