import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { editProduct } from '../actions/productActions';

class EditProdForm extends Component {
  render() {
    const {
      handleSubmit
    } = this.props
    const product = this.props.product;

    // let services = product.services.map(servicesString => {
    //   return servicesString.split(", ").map(service => {
    //     return (
    //       <li>
    //         <label htmlFor="service" className="serviceLabel">Update or Delete Service</label>
    //         <Field name="service" className="serviceInput" placeholder={service} component="input" type="text" />
    //       </li>
    //   )})
    // });

    return (
        <form onSubmit={handleSubmit}>
          <div className="formContainer" key={product.title}>
            <label htmlFor="title" className="titleLabel">Name</label>
            <Field name="title" className="titleInput" placeholder="your name" component="input" type="text" value={product.title} disabled />
            <div className="formImage">
              <img className="thumbnailImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
              <label htmlFor="imgSrc" className="imageLabel">Please choose a new image for your product</label>
              <Field name="imgSrc" className="imageInput" placeholder={product.imgSrc} component="input" type="text" value={product.imgSrc} />
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
          <Field name="submit" className="submitButton" component="button" type="submit">Submit</Field>
        </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      'product': ownProps.product.title
    }
  }
}

  EditProdForm = reduxForm({
    form: 'editProdForm',
    onSubmit(values, dispatch) {
      dispatch(editProduct(values))
    }
  }, mapStateToProps)(EditProdForm)

  const selector = formValueSelector('editProdForm');
  EditProdForm = connect(state => {
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
  })(EditProdForm);

export default connect(mapStateToProps)(EditProdForm);
