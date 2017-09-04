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
          <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
            <div className="branding" style={{backgroundImage:`url(${logo})`}}></div>
            <UserTypeDropdown {...this.props}/>
          </header>
        )
      case true:
        switch (userType) {
          case "user":
            return (
              <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
               <div className="branding"></div>
               <nav className="top-nav" >
                 <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                   <li className="menu-item"><NavLink to="/productlist" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Main</NavLink></li>
                   {/*
                     <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                     <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                   */}
                 </ul>
               </nav>
               <nav className="user-menu">
                 <ul id="user-main-menu" className="menu-ul"style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}} >
                   <li className="menu-item"><NavLink to="/"><i className="fa fa-user" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
                   <li className="menu-item"><NavLink to="/shoppingCart"><i className="fa fa-shopping-cart" aria-hidden="true" style={{marginRight:"2px", color: "black"}}></i></NavLink></li>
                   {/*
                     <span className="amount" style={{fontFamily: "Roboto", fontSize: 18, padding: "8px", marginLeft: "0px"}}><span className="currencySymbol">$</span>0.00</span>
                    */}
                 </ul>
               </nav>
             </header>
            )
          case "admin":
            return (
              <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
                <div className="branding"></div>
                <nav className="top-nav" >
                  <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                    <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
                    {/*
                      <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                      <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                    */}
                  </ul>
                </nav>
                <Field onClick={this.ReqForm(this.props.reqForm)}  name="addProduct" className="addProduct" component="button" value="adding"><Link to="/productlist/newProduct">Add Product</Link></Field>
              </header>
            )
          default:
            return null;
        }
      default:
        return null;
    }
  }
}

Header = reduxForm({
  form: 'userForm'
})(Header)

export default Header;
