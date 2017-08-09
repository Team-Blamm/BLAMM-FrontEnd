import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form'

const addProductForm = props => {
  const { addProduct } = props;
    return (
        <form onSubmit={ addProduct }>
          <label>Title</label>
            <Field className="" component="input" type="text" name="name" placeholder="Title" />
          <br />
          <label>Type</label>
          <Field component="select">
            <option>Hero</option>
            <option>Anti-Hero</option>
            <option>Villain</option>
          </Field>
          <br />
          <label>Description</label>
            <Field className="" component="input" type="text" placeholder="Product Description" />
          <br />
          <label>Rate</label>
            <Field className="" component="input" type="text" placeholder="Rate" />
          <br />
          <div className="">
            <Field className="" component="input" type="submit" value="Submit" />
          </div>
        </form>
    )
  }

addProductForm = reduxForm({
  form: 'addProductForm'
})(ContactForm);

export default addProductForm;
