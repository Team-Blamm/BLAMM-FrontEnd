import React, { Component } from 'react';

import {
  deleteDescription,
  addDescription,
  editDescription,
  updateDescription,
} from '../../actions/productActions';

export default class Description extends Component {

/* Need to figure out a way to refresh Description
  Component when descriptions have been deleteDescription
  or updated */

  componentWillMount() {

  }

  addDescription = e => {
    this.props.addDescription();
  }

  deleteDescription = e => {
    this.props.deleteDescription();
  }

  updateDescription = e => {
    this.props.updateDescription();
  }

  editDescription(e) {
    return
      const editableDescription = (e) => {
        <form className="updateDescription">
          <textarea className="newDescription">{this.props.product.description}</textarea>
        </form>
      }
  }

  renderDescription() {
    const { description } = this.props.product.description;
    const { userType } = this.props.userType;

    switch (userType) {
      case "user":
        return (
          <div className="description">
            {description}
          </div>
        )
      break;
      case "admin":
        switch (description) {
          case true:
            return (
              <div>
                <div className="description">
                  {description}
                </div>
                <form className="updateDescription">
                  <button className="editDescriptionButton" onClick={this.deleteDescription}>Delete</button>
                </form>
                <form className="deleteDescription">
                  <button className="deleteDescriptionButton" onClick={this.editService}>Edit</button>
                </form>
              </div>
            )
          break;
          case false:
            return
              <form className="addDescription">
                <textarea for="description" className="description">Description</textarea>
                <button type="submit" name="description">Add</button>
              </form>
          break;
        }
      }
    }
  }
