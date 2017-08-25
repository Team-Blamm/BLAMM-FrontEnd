import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValues, formValueSelector } from 'redux-form';

import { editProduct, addProduct } from '../actions/productActions';

import SelectContainer from '../containers/SelectContainer';
import Description from './ProdDetail/Description';
import Reviews from './ProdDetail/Reviews';

class ProductForm extends Component {

  render() {
    const {
      EditProduct,
      handleSubmit,
      AddProduct,
      values,
      pristine,
      submitting
    } = this.props
    const product = this.props.product;

    if (this.props.product) {
      let services = product.services.map(servicesString => {
        return servicesString.split(", ").map(service => {
          return (
            <li>
              <label htmlFor="service" className="serviceLabel">Update or Delete Service</label>
              <Field name="service" className="serviceInput" placeholder={service} component="input" type="text" />
            </li>
        )})
      });
    }

    return (
      <div>
        {console.log('productForm product', this.props.product)}
        { this.props.product ? (
        <form onSubmit={handleSubmit}>
          <div className="formContainer" key={product.title}>
            <div className="formImage">
              <img className="thumbnailImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
              <label htmlFor="imageURL" className="imageLabel">Please choose a new image for your product</label>
              <Field name="imageURL" className="imageInput" placeholder={product.imgSrc} component="input" type="text" value={product.imgSrc} />
            </div>
            <div className="formText">
              <h2>{product.title}</h2>
              <label htmlFor="type" className="typeLabel">Please choose a new type</label>
              <Field name="type" className="typeSelect" component="select" value={product.type}>
                <option value="hero">Hero</option>
                <option value="villain">Villain</option>
                <option value="antihero">Anti-Hero</option>
              </Field>
              <label htmlFor="tagline" className="taglineLabel">Please enter a new tagline</label>
              <Field name="tagline" className="taglineInput" placeholder={product.tagline} component="input" type="text" value={product.tagline} />
            </div>
            <label htmlFor="services" className="serviceLabel">Add New Service</label>
            <Field name="services" className="serviceInput" placeholder="Please enter a new service" component="input" type="text" value={product.services} />
            <label htmlFor="rate" className="rateLabel">Add a new Rate</label>
            <Field name="rate" className="rateInput" placeholder="Please enter a rate" component="input" type="number" step=".01" value={product.services} />
            <label htmlFor="description" className="descriptionLabel">Please enter a new description</label>
            <Field name="description" className="descriptionInput" placeholder={product.description} component="textarea" value={product.description} />
          </div>
          <Field name="submit" className="submitButton" disabled={pristine || submitting} component="button" type="submit">Submit</Field>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <label htmlFor="title" className="titleLabel">Please enter a name</label>
            <Field name="title" className="titleInput" placeholder="your name" component="input" type="text" value=""/>
            <div className="formImage">
              <label htmlFor="image" className="imageLabel">Please choose a new image for your product</label>
              <Field name="image" className="imageInput" placeholder="image url" component="input" type="text" value=""/>
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

  ProductForm = reduxForm({
    form: 'productForm',
    onSubmit(values, dispatch) {
      dispatch(addProduct(values))
    }
  })(ProductForm)

  const selector = formValueSelector('productForm');
  ProductForm = connect(state => {
    const { title, image, type, tagline, description, services, rate } = selector(state, 'title', 'image', 'type', 'tagline', 'description', 'services', 'rate');

    return {
      title,
      image,
      type,
      tagline,
      description,
      services,
      rate
    }
  })(ProductForm);

export default ProductForm;
