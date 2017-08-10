import React, { Component } from "react";
import { Field, reduxForm, formValues } from 'redux-form';
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
              <form onSubmit={AddToCart(product)}>
                <Field name="services" className="servicesSelect" component="select">
                  {userServices}
                </Field>

                <button onClick={decrement}>-</button>
                <Field name="hours" className="hoursCounter" placeholder={"Hours: " + this.props.hours} component="input" type="text" readOnly value={this.hours} />
                <button onClick={increment}>+</button>

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
  console.log("Select file mapStateToProps");
  console.log(state);
  console.log(ownProps);
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
