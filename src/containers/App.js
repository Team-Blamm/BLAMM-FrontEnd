import React, { Component } from "react";

class App extends Component {

  render() {
    return (
      <div className="productsContainer">
        <header>
          <h2>Welcome to Blamm, { this.props.userType }</h2>
          <h3>Cool Logo</h3>
        </header>
      </div>
    )
  }
}

export default App;
