import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Redirect } from "react-router-dom";

import { addProduct } from '../actions/productActions';

class AddProdForm extends Component {

  render() {
    const {
      handleSubmit
    } = this.props
    const reqForm = this.props.reqForm;

    return (
      <div>
      { reqForm === false ? (
        <Redirect to='/productlist'></Redirect>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <label htmlFor="title" className="titleLabel">Please enter a name</label>
            <Field name="title" className="titleInput" placeholder="your name" component="input" type="text" value="" required />
            <div className="formImage">
              <label htmlFor="imgSrc" className="imageLabel">Please choose a new image for your product</label>
              <Field name="imgSrc" className="imageInput" placeholder="image url" component="input" type="text" value=""/>
            </div>
            <div className="formText">
              <label htmlFor="type" className="typeLabel">Please choose a new type</label>
              <Field name="type" className="typeSelect" component="select" value="">
                <option value="hero">Hero</option>
                <option value="villain">Villain</option>
                <option value="antihero">Anti-Hero</option>
              </Field>
              <label htmlFor="tagline" className="taglineLabel">Please enter a tagline</label>
              <Field name="tagline" className="taglineInput" placeholder="tagline" component="input" type="text" value="" />
            </div>
            <label htmlFor="services" className="serviceLabel">Add New Service</label>
            <Field name="services" className="serviceInput" placeholder="service" component="input" type="text" value="" />
            <label htmlFor="rate" className="rateLabel">Add a new Rate</label>
            <Field name="rate" className="rateInput" placeholder="Please enter a rate" component="input" type="number" step=".01" value="" />
            <label htmlFor="description" className="descriptionLabel">Please enter a description</label>
            <Field name="description" className="descriptionInput" placeholder="description" component="textarea" value="" />
          </div>
          <Field name="submit" className="submitButton" component="button" type="submit">Submit</Field>
        </form>
      )}
    </div>
    )
  }
}

AddProdForm = reduxForm({
  form: 'addProdForm',
  onSubmit(values, dispatch) {
    dispatch(addProduct(values))
  }
})(AddProdForm)

const selector = formValueSelector('addProdForm');
AddProdForm = connect(state => {
  const { title, imgSrc, type, tagline, description, services, rate } = selector(state, 'title', 'imgSrc', 'type', 'tagline', 'description', 'services', 'rate');

  return {
    title,
    imgSrc,
    type,
    tagline,
    description,
    services,
    rate
  }
})(AddProdForm);

export default AddProdForm;
