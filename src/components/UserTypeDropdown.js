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
        <button className="header-button" onClick={this.authedAsAdmin}><Link className="header-button-link" to={"productlist"}>Admin</Link></button>
        <button className="header-button" onClick={this.authedAsUser}><Link className="header-button-link" to={"productlist"}>User</Link></button>
      </div>
    )
  }
};

export default UserTypeDropdown;
