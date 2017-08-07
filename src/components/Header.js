import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import UserTypeDropdown from './UserTypeDropdown';

class Header extends Component {
  render() {
    console.log(this.props);
    const authed = this.props.authed;
    const userType = this.props.userType;
    switch (authed) {
      case false:
        return (
          <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
            <div className="branding">
              <img src="https://gallery.mailchimp.com/8fe3233563a12b9c886595f8f/images/03d41d7e-d26a-4c53-b25b-4df580f8b8ae.png" width="125" height="125" style={{borderRadius: '75px', marginLeft: '20px', marginTop: '15px'}}/>
            </div>
            <UserTypeDropdown />
          </header>
        )
      break;
      case true:
        switch (userType) {
          case "user":
            return (
              <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
               <div className="branding">
                  <img src="https://gallery.mailchimp.com/8fe3233563a12b9c886595f8f/images/03d41d7e-d26a-4c53-b25b-4df580f8b8ae.png" width="125" height="125" style={{borderRadius: '75px', marginLeft: '20px', marginTop: '15px'}}/>
               </div>
               <nav className="top-nav" >
                 <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                   <li className="menu-item"><NavLink to="/user/productlist" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Main</NavLink></li>
                   <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                   <li className="menu-item"><NavLink to="/user/productlist/:type" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                 </ul>
               </nav>
               <nav className="user-menu">
                 <ul id="user-main-menu" className="menu-ul"style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}} >
                   <li className="menu-item"><NavLink to="/"><i className="fa fa-user" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
                   <li className="menu-item"><NavLink to="/"><i className="fa fa-shopping-cart" aria-hidden="true" style={{marginRight:"2px", color: "black"}}></i></NavLink></li>
                   <span class="amount" style={{fontFamily: "Roboto", fontSize: 18, padding: "8px", marginLeft: "0px"}}><span class="currencySymbol">$</span>0.00</span>
                 </ul>
               </nav>
             </header>
            )
          break;
          case "admin":
            return (
              <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>
                <div className="branding">
                  <img src="https://gallery.mailchimp.com/8fe3233563a12b9c886595f8f/images/03d41d7e-d26a-4c53-b25b-4df580f8b8ae.png" width="125" height="125" style={{borderRadius: '75px', marginLeft: '20px', marginTop: '15px'}}/>
                </div>
                <nav className="top-nav" >
                  <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                    <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
                    <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                    <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                  </ul>
                </nav>
              </header>
            )
          // break;
        }
    }
  }
}

export default Header;
