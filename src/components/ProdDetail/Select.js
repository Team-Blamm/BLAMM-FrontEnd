import React, { Component } from "react";

import AddToCart from './AddToCart';

import { incrementHours, decrementHours } from '../../actions/selectActions'

// import { addToCart } from '../actions/cartActions';
// import { deleteService, addService, editService } from '../actions/productActions';


class Select extends Component {

  increment = e => {
    console.log("increment hours hit in Select");
    this.props.dispatch(incrementHours());
    return incrementHours();
  };

  decrement = e => {
    this.props.dispatch(decrementHours());
    return decrementHours();
  };

  addToCart = e => {
    this.props.addToCart();
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
          return (
            selector =
              <div>
                <select name="services" className="servicesSelect">
                  {userServices}
                </select>

                <button onClick={this.decrement}>-</button>
                <input name="for" className="hoursCounter" placeholder={"Hours: " + this.props.hours} />
                <button onClick={this.increment}>+</button>
                {/* <AddToCart {...this.props}/> */}
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

export default Select;
