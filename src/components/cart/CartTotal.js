import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class CartTotal extends Component {

  checkOut = () => {
      return (e) => {
      e.preventDefault();
      this.props.checkOut();
    }
  }

  render() {
    const cart = this.props.cart;
    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      cartTotal += cart[i].subtotal;
    }

    return (
      <div className="cartTotals">
        <div>
          Total: ${cartTotal}
        </div>
        <form onSubmit={this.checkOut()}>
          <Field name="submit" className="submitButton" component="button" type="submit">Checkout</Field>
        </form>
      </div>
    )
  }
}

CartTotal = reduxForm({
  form: 'total'
})(CartTotal)

export default CartTotal;
