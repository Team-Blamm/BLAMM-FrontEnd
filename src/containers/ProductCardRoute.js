import React, { Component } from "react";

//import Components
import Product from "./ProdDetails.js";
// import productList from './ProductList.js'

//create the class ActorInfo
class ProdTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      jsx: ""
    };
  }

  componentDidMount() {
    let match = this.props.match.params.product;
    console.log(match);
    console.log("'Product List' did mount");
    fetch(
      `https://blamm-store-backend.herokuapp.com/api/v1/products/name/${match}`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          product: data,
          jsx: Product(data)
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.jsx}
      </div>
    );
  }
}

export default ProdTest;
