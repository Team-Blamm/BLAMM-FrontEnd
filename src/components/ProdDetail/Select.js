import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from "react-router-dom";

// import { incrementHours, decrementHours } from "../../actions/selectActions";

class Select extends Component {
  constructor(props) {
    super(props)
      this.state = {
        hoursCounter: 1
      }
  }

  increment = e => {
    e.preventDefault();
    this.props.increment();
    this.setState({hoursCounter: this.state.hoursCounter + 1})
  };

  decrement = e => {
    e.preventDefault();
    this.props.decrement();
    this.setState({hoursCounter: this.state.hoursCounter - 1})
  };

  deleteService = e => {
    this.props.deleteSelect();
  }

  addService = e => {
    this.props.addService();
  }

  addToCart = (product, service) => {
      return (e) => {
      e.preventDefault();
      this.props.addToCart(product, this.props.hours, service);
      this.setState({hoursCounter: 1})
    }
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
            <form onSubmit={this.addToCart(product, this.props.servicesSelect)}>
              <Field name="services" className="servicesSelect" component="select">
                <option value="No service selected">Please choose a service</option>
                {userServices}
              </Field>

              <button onClick={this.decrement} disabled={ this.state.hoursCounter > 1 ? false : true }>-</button>
              <Field name="hours" className="hoursCounter" placeholder={"Hours: " + this.state.hoursCounter} component="input" type="text" readOnly value={this.hours} />
              <button onClick={this.increment}>+</button>

              <button type="submit">Add to Cart</button>
            </form>
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
