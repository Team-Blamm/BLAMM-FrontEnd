import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from "react-router-dom";

class Select extends Component {

  deleteService = e => {
    this.props.deleteSelect();
  }

  addService = e => {
    this.props.addService();
  }

  render() {
    const {increment, decrement, AddToCart} = this.props;
    const product = this.props.product;
    const userType = this.props.userType;
    let selector = null;
    switch (userType) {
      case "user":
        let userServices = product.services.map(servicesString => {
        return servicesString.split(", ").map(service => {
            return <option value={service}>{service}</option>
          })
        });
        selector =
          <div>
            <form onSubmit={AddToCart(product, this.props.servicesSelect)}>
              <Field name="services" className="servicesSelect" component="select">
                <option value="No service selected">Please choose a service</option>
                {userServices}
              </Field>

              <button onClick={decrement}>-</button>
              <Field name="hours" className="hoursCounter" placeholder={"Hours: " + this.props.hours} component="input" type="text" readOnly value={this.hours} />
              <button onClick={increment}>+</button>

              <button type="submit">Add to Cart</button>
            </form>
            <Link to={`/shoppingCart`}>Go to Cart</Link>
          </div>
        break;
      case "admin":
        let adminServices = product.services.map(servicesString => {
          return servicesString.split(", ").map(service => {
            return (
              <li>
                {service}
                <button className="deleteServiceButton" onClick={this.deleteService}>Delete</button>
                <button className="addServiceButton" onClick={this.addService}>Add</button>
                <button className="editServiceButton" onClick={this.deleteReview}>Edit</button>
              </li>
          )})
        });
        selector =
          <ul name="services" className="servicesSelect">
            {adminServices}
          </ul>
        break;
      default:
        return null;
    }
    return (
      <div>
        {selector}
      </div>
    )
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
