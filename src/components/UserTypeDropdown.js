import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserTypeDropdown extends Component {

  render() {
    const match = this.props.match;
    return (
      <select>
        <option>
          <Link to={`${match.url}/admin/productsList`}>Admin</Link>
        </option>
        <option>
          <Link to={`${match.url}/user/productsList`}>User</Link>
        </option>
      </select>
    )
  }
};

export default UserTypeDropdown;
