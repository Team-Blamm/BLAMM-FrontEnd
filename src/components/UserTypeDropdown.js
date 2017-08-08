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
    const match = this.props.match;
    return (
      <div>
        <button onClick={this.authedAsAdmin}><Link to={"admin/productlist"}>Admin</Link></button>
        <button onClick={this.authedAsUser}><Link to={"user/productlist"}>User</Link></button>
      </div>
    )
  }
};

export default UserTypeDropdown;
