import React, { Component } from "react";

import logo from '../styles/images/BLAMM_Logo.png';

class App extends Component {

  render() {
    return (
      <div className="productsContainer">
        <header />
        <div className="splashBody" style={{backgroundImage:`url(${logo})`}}></div>
      </div>
    )
  }
}

export default App;
