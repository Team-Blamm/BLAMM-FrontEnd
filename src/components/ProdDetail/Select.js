import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValues, formValueSelector } from 'redux-form';
import { Link } from "react-router-dom";
import { incrementHours, decrementHours } from '../../actions/selectActions';
import { addToCart } from '../../actions/cartActions';

// import { addToCart } from '../actions/cartActions';
// import { deleteService, addService, editService } from '../actions/productActions';

class Select extends Component {

  deleteService = e => {
    this.props.deleteSelect();
  }

  addService = e => {
    this.props.addService();
  }

  render() {
    const {increment, decrement, AddToCart} = this.props;
    let hours = this.props.hours;
    const product = this.props.product;
    const userType = this.props.userType;
    let selector = null;

    let services = product.services.map(servicesString => {
      return servicesString.split(" ").map(service => {
        return <option>{service}</option>
      })
    });

    return (
      <div>
        <form onSubmit={AddToCart(product, this.props.servicesSelect)}>
          <Field name="services" className="servicesSelect" component="select">
            {services}
          </Field>

          <button onClick={decrement}>-</button>
          <Field name="hours" className="hoursCounter" placeholder={"Hours: " + this.props.hours} component="input" type="text" readOnly value={this.hours} />
          <button onClick={increment}>+</button>

          <button type="submit">Add to Cart</button>
        </form>
        <Link to={`/user/shoppingCart`}>Go to Cart</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: ownProps.product,
  }
}

Select = reduxForm({
  form: 'select'
})(Select)

const selectorForm = formValueSelector('select');

Select = connect(
  state => {
    const servicesSelect = selectorForm(state, 'services')
    return {
      servicesSelect
    }
  }
)(Select)

export default Select;
