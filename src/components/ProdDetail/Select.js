import React, { Component } from "react";
import { Field, reduxForm, formValues } from 'redux-form';
import { Link } from "react-router-dom";


import { incrementHours, decrementHours } from '../../actions/selectActions';
import { addToCart } from '../../actions/cartActions';


// import { addToCart } from '../actions/cartActions';
// import { deleteService, addService, editService } from '../actions/productActions';


class Select extends Component {

  increment = e => {
    this.props.dispatch(incrementHours());
    e.preventDefault();
    return incrementHours();
  };

  decrement = e => {
    this.props.dispatch(decrementHours());
    e.preventDefault();
    return decrementHours();
  };

  AddToCart = (product) => {
    console.log("AddToCart action hit in Select.js");
    console.log(product);
    return (e) => {
      e.preventDefault();
      this.props.dispatch(addToCart(product));
      addToCart(product);
    }
  }

  deleteService = e => {
    this.props.deleteSelect();
  }

  addService = e => {
    this.props.addService();
  }

  render() {

    let hours = this.props.hours;
    const product = this.props.product;
    const userType = this.props.userType;
    let selector = null;
    switch (userType) {
      case "user":
        let userServices = product.services.map(servicesString => {
        return servicesString.split(" ").map(service => {
            return <option>{service}</option>
          })
        });
          console.log("Select props")
          console.log(this.props);
          return (
            selector =
            <div>
              <form onSubmit={this.AddToCart(product)} >
                <Field name="services" className="servicesSelect" component="select">
                  {userServices}
                </Field>

                <button onClick={this.decrement}>-</button>
                <Field name="hours" className="hoursCounter" placeholder={"Hours: " + this.props.hours} component="input" type="text" readOnly value={this.hours} />
                <button onClick={this.increment}>+</button>

                <button type="submit">Add to Cart</button>
              </form>
              <Link to={`/user/shoppingCart`}>Go to Cart</Link>
            </div>
          )
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
          return (
            selector =
              <ul name="services" className="servicesSelect">
                {adminServices}
              </ul>
          )
      break;
    }
    return (
      <div>
        {selector}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    product: ownProps.product,
    // hours: state.counter.hours
  }
}


Select = reduxForm({
  form: 'select'
})(Select)

export default Select;
