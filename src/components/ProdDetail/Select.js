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
        // let userServices = product.services.map(servicesString => {
        // return servicesString.split(", ").map(service => {
        //     return <option value={service}>{service}</option>
        //   })
        // });


        let userServicesRadio = product.services.map(servicesString => {
          return servicesString.split(", ").map(service => {
            let serviceName = `service_${service}`;
            console.log(service);
            console.log(serviceName);
              return (
                <label className="b-services__label" for={`service${service}`}>
                <Field
                  id={`service${service}`}
                  label={`service${service}`}
                  name="services"
                  component="input"
                  type="radio"
                  value={service}
                  className="b-services__input"
                />
                <span>{service}</span>
              </label>
              )
            })
          });
        selector =
          <div className="l-forms">
            <form  onSubmit={this.addToCart(product, this.props.servicesSelect)}>
              {/* <Field name="services" className="b-select" component="select">
                <option value="No service selected">Please choose a service</option>
                {userServices}
              </Field> */}
              <div className="b-formGroup">
                <div className="b-forms__label">
                  <label>Select Service</label>
                </div>
                <div className="b-services__options">
                  {userServicesRadio}
                </div>
              </div>
              <div className="b-formGroup">
                <span className="b-forms__label">Select Hours</span>
                <div className="b-hours">
                  <button onClick={this.decrement} disabled={ this.state.hoursCounter > 1 ? false : true } className="b-hours__button">-</button>
                  <Field name="hours" className="b-hours__counter" placeholder={ this.state.hoursCounter} component="input" type="text" readOnly value={this.hours} />
                  <button onClick={this.increment} className="b-hours__button">+</button>
                </div>
              </div>
              <div>
                <button type="submit" className="b-forms__submit">Add to Cart</button>
              </div>
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
