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
      <div className="l-total">
        <div>
          <h2>Checkout</h2>
        </div>
        <span className="b-forms__label">Total cost: </span>
        <span className="b-info__h2"> ${cartTotal} </span>
        <form onSubmit={this.checkOut()}>
          <Field name="submit" className="b-forms__submit" component="button" type="submit">Checkout</Field>
        </form>
      </div>
    )
  }
}

CartTotal = reduxForm({
  form: 'total'
})(CartTotal)

export default CartTotal;
