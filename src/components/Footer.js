import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="support">
          <span className="help">Need help? </span><span> Call our award-winning support team 24/7 at (800) GO-BLAMM</span>
        </div>
        <div className="nav" >
          <NavLink to="/productlist">Catalog</NavLink>
        </div>
        <div className="about">
          <h3>About BLAMM!</h3>
          <p>Saving or destroying humanity doesn't pay the bills! That's why we here at BLAMM! recruit and retain the best superheroes and villains to meet your specific needs above your level of satisfaction.</p>
          <p>&copy;Copyright 2017 / All Rights Reserved</p>
          <p>This site is practice for developing in react and redux as a group learning project.  All third party content is used under fair use as learning and satire.</p>
        </div>
        <div className="socialMedia">
          <NavLink to="/"><i className="fa fa-2x fa-twitter fa-fw" aria-hidden="true"></i></NavLink>
          <NavLink to="/"><i className="fa fa-2x fa-facebook fa-fw" aria-hidden="true"></i></NavLink>
          <NavLink to="/"><i className="fa fa-2x fa-linkedin fa-fw" aria-hidden="true"></i></NavLink>
        </div>
      </footer>
    )}
  }

export default Footer;
