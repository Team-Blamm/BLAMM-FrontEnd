import React, { Component } from 'react';

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

  render() {
    const description = this.props.product.description;
    const userType = this.props.userType;
    let renderDescription = null;

    switch (userType) {
      case "user":
        renderDescription =
          <div className="b-description">
            <span className="b-info__text">{description}</span>
          </div>
        break;
      case "admin":
        switch (description) {
          case true:
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
          break;
          case false:
            renderDescription =
              <form className="addDescription">
                <textarea for="description" className="description">Description</textarea>
                <button type="submit" name="description">Add</button>
              </form>
            break;
          default:
            break;
          }
          break;
        default:
          break;
      }
      return (
        <div>
          {renderDescription}
        </div>
      )
    }
  }

export default Description;
