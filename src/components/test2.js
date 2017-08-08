import React, {Component} from "react";
import ProductsContainer from '../containers/ProductsContainer';

class test2 extends Component {
  render() {
    return (
      <div>
        <ProductsContainer {...this.props}/>
      </div>
    )
  }
}


export default test2;
