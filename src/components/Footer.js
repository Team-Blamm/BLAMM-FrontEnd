import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Footer extends Component {
  render() {
    const authed = this.props.authed;
    const userType = this.props.userType;
    switch (authed) {
      case false:
        return (
          <footer id="footer" style={{width: '100%', fontFamily: 'Roboto'}}>
            <div className="footer-support" style={{height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
              <span>Need help? </span><span> Call our award-winning support team 24/7 at (800) GO-BLAMM</span>
            </div>
            <div className="footer-about-contact-socialmedia">
              <div className="about">
                <h3>About BLAMM!</h3>
                <p>Not everyone can be Bruce Wayne. Saving (or threatending) humanity doesn't pay the bills! That's why we here at BLAMM! recruit and retain the best superheroes and villains to meet your specific needs above your level of satisfaction.</p>
                <p><span>logo placeholder</span>&copy;Copyright 2017 / All Rights Reserved</p>
              </div>
            </div>
          </footer>
        )
      case true:
        switch (userType) {
          case "user":
            return (
              <footer id="footer" style={{width: '100%', fontFamily: 'Roboto'}}>
                <div className="footer-support" style={{height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                  <span>Need help? </span><span> Call our award-winning support team 24/7 at (800) GO-BLAMM</span>
                </div>
                <div className="footer-about-contact-socialmedia">
                  <div className="about">
                    <h3>About BLAMM!</h3>
                    <p>Not everyone is Bruce Wayne. Saving and destroying humanity doesn't pay the bills! That's why we here at BLAMM! recruit and retain the best superheroes and villains to meet your specific needs above your level of satisfaction.</p>
                    <p><span>logo-placeholder </span>&copy;Copyright 2017 / All Rights Reserved</p>
                  </div>
                  <div className="footer-contact">
                    <nav className="footer-nav" >
                      <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                        <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
                        <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                        <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="social-media">
                    <ul id="social-links" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                      <li className="menu-item"><NavLink to="/"><i className="fa fa-twitter fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
                      <li className="menu-item"><NavLink to="/"><i className="fa fa-facebook fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
            					<li className="menu-item"><NavLink to="/"><i className="fa fa-linkedin fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
                    </ul>
                  </div>
                </div>
              </footer>
            )
          case "admin":
            return (
              <footer id="footer" style={{width: '100%', fontFamily: 'Roboto'}}>
                <div className="about">
                  <h3>About BLAMM!</h3>
                  <p>Not everyone is Bruce Wayne. Saving and destroying humanity doesn't pay the bills! That's why we here at BLAMM! recruit and retain the best superheroes and villains to meet your specific needs above your level of satisfaction.</p>
                  <p><span>logo-placeholder </span>&copy;Copyright 2017 / All Rights Reserved</p>
                </div>
                <div className="footer-contact">
                  <nav className="footer-nav" >
                    <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                      <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
                      <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                      <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </footer>
            )
          default:
            return null;
        }
      default:
        return null;
      }
    }
  }

export default Footer;
