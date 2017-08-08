import React, { Component } from 'react';

import {
  deleteDescription,
  addDescription,
  editDescription,
  updateDescription,
} from '../../actions/productActions';

class Description extends Component {

/* Need to figure out a way to refresh Description
  Component when descriptions have been deleteDescription
  or updated */


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

  render() {
    const description = this.props.product.description;
    const userType = this.props.userType;
    let renderDescription = null;

    switch (userType) {
      case "user":
        return (
          renderDescription =
            <div className="description">
              {description}
            </div>
        )
      break;
      case "admin":
        switch (description) {
          case true:
            return (
              renderDescription =
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
              renderDescription =
                <form className="addDescription">
                  <textarea for="description" className="description">Description</textarea>
                  <button type="submit" name="description">Add</button>
                </form>
          break;
        }
      }
      return (
        <div>
          {renderDescription}
        </div>
      )
    }
  }

export default Description;
