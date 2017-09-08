import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

import UserTypeDropdown from './UserTypeDropdown';
import { reqForm } from '../actions/productActions';
import logo from '../styles/images/BLAMM_Logo.png';

class Header extends Component {

  ReqForm = () => {
    return (e) => {
      e.preventDefault();
      this.props.dispatch(reqForm(e.target.value));
    }
  }

  render() {
    const authed = this.props.authed;
    const userType = this.props.userType;
    switch (authed) {
      case false:
        return (
          <header id="header" className="header" >
            <div className="branding"></div>
            <UserTypeDropdown {...this.props}/>
          </header>
        )
      case true:
        return (
          <header id="header" className="header">
            <div className="branding" style={{backgroundImage:`url(${logo})`}}></div>
            <div className="nav" >
              <NavLink to="/productlist">Catalog</NavLink>
                {/*
                  <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                  <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                  */}
            </div>
            <div className="userNav">
              <NavLink to="/shoppingCart">
                <i className="fa fa-2x fa-shopping-cart" aria-hidden="true" />
              </NavLink>
              {/*
                <li className="menu-item"><NavLink to="/"><i className="fa fa-user" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
                <span className="amount" style={{fontFamily: "Roboto", fontSize: 18, padding: "8px", marginLeft: "0px"}}><span className="currencySymbol">$</span>0.00</span>
                */}
              { (userType === "admin") ? <Field onClick={this.ReqForm(this.props.reqForm)}  name="addProduct" className="addProduct" component="button" value="adding"><Link to="/productlist/newProduct">Add Product</Link></Field> : null }
            </div>
          </header>
        )
      default:
        return null;
    }
  }
}

Header = reduxForm({
  form: 'userForm'
})(Header)

export default Header;
