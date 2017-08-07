import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserTypeDropdown extends Component {

  render() {
    const match = this.props.match;
    return (
      <select>
        <Link to={"/admin/productsList"}>
        <option>
          Admin
        </option>
        </Link>
        <Link to={"/user/productsList"}>
        <option>
          User
        </option>
        </Link>
      </select>
    )
  }
};

export default UserTypeDropdown;
