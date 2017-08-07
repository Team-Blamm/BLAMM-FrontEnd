import React, {Component} from "react";
import ProductContainer from "../containers/ProductContainer"

class test extends Component {
  render() {
    return (
      <div>
        <ProductContainer {...this.props}/>
      </div>
    )
  }
}


export default test;
