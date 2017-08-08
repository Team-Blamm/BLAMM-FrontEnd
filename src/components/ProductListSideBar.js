import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
      type: {}
    };
  }
  // componentWillMount() {
  //   this.changeLocation();
  //   window.addEventListener("popstate", this.changeLocation.bind(this));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("popstate", this.changeLocation.bind(this));
  // }

  // update state based on the URL
  // changeLocation() {
  //   this.setState({ currentView });
  // }

  // update state and update react-router route
  // navigateToRoute(route) {
  //   let match = this.props.match
  //   <Redirect to={`${match.url}/productlist/${product.type}`}/>
  // }

  // give correct tab the 'active' bootstrap class
  // getClasses(link) {
  //   let classes = 'btn btn-primary-outline flex-button'
  //   if (this.state.currentView === link) {
  //     classes += ' active'
  //   }
  //   return classes
  // }
  render() {
    let typeList = [];
    let typeFilter = this.props.productList.results.filter(type => {
      if (typeList.includes(type.type)) {
        return false;
      } else {
        typeList.push(type.type);
        return true;
      }
    });
    let type = typeFilter.map(type => {
      return (
        <div key={type.title}>
          <li>
            {type.type}
          </li>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h5>Type</h5>
          <div>
            <label onClick={() => this.navigateToRoute("allProducts")}>
              <input
                type="radio"
                name="allProducts"
                id="allProducts"
                autoComplete="off"
                defaultChecked
              /> All People
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="options"
                id="hero"
                autoComplete="off"
              /> Heros
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="options"
                id="villain"
                autoComplete="off"
              /> Villains
            </label>
          </div>
          <ul>
            {type}
          </ul>
        </div>
        <div>
          <h5>Price</h5>
          <ul>
            <li>Highest</li>
            <li>Lowest</li>
          </ul>
        </div>
        <div>
          <h5>Review</h5>
          <ul>
            <li>4 Star +</li>
            <li>3 Star +</li>
            <li>2 Star +</li>
            <li>1 Star +</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;

// let sideBar = this.props.productList.results.map(product => {
