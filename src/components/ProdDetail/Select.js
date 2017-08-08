import React, { Component } from "react";

import AddToCart from './AddToCart';

// import { addToCart } from '../actions/cartActions';
// import { deleteService, addService, editService } from '../actions/productActions';


class Select extends Component {

  incrementHours = e => {
    console.log("incrementHours triggered by onChange");
    this.props.incrementHours();
  };

  decrementHours = e => {
    this.props.decrementHours();
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
    console.log(hours);

    switch (userType) {
      case "user":
        let userServices = product.services.map(servicesString => {
        return servicesString.split(" ").map(service => {
            return <option>{service}</option>
          })
        });
          return (
            selector =
              <form>
                <select name="services" className="servicesSelect">
                  {userServices}
                </select>
                <button htmlFor="hours" onClick={this.decrementHours}>-</button>
                <input name="for" className="hoursCounter" placeholder={"Hours: " + this.props.hours} />
                <button htmlFor="hours" onClick={this.incrementHours}>+</button>
                {/* <AddToCart {...this.props}/> */}
              </form>
          )
      break;
      case "admin":
        let adminServices = product.services.map(servicesString => {
          return servicesString.split(" ").map(service => {
            return
              <option>
                {service}
                <button className="deleteServiceButton" onClick={this.deleteService}>Delete</button>
                <button className="addServiceButton" onClick={this.addService}>Add</button>
                <button className="editServiceButton" onClick={this.deleteReview}>Edit</button>
              </option>
          })
        });
          return (
            selector =
              <select name="services" className="servicesSelect">
                {adminServices}
              </select>
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
