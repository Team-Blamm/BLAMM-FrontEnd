import React, {Component} from "react";
import ProductsContainer from '../containers/ProductsContainer';

class Listings extends Component {
  render() {
    return (
      <div>
        <ProductsContainer {...this.props}/>
      </div>
    )
  }
}


export default Listings;
