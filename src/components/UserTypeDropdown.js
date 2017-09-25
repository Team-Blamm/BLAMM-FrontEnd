import React, {Component} from "react";
import {Link} from "react-router-dom";

class UserTypeDropdown extends Component {

  authedAsAdmin = e => {
    this.props.authedAsAdmin()
  }

  authedAsUser = e => {
    this.props.authedAsUser()
  }

  render() {
    return (
      <div className="header-button-container">
        <Link className="header-button-link" to={"productlist"}><button className="header-button" onClick={this.authedAsAdmin}>Admin</button></Link>
        <Link className="header-button-link" to={"productlist"}><button className="header-button" onClick={this.authedAsUser}>User</button></Link>
      </div>
    )
  }
};

export default UserTypeDropdown;
