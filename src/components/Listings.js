import React, {Component} from "react";
import ProductsContainer from '../containers/ProductsContainer';

class Listings extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ProductsContainer location={this.props.location} {...this.props}/>
      </div>
    )
  }
}


export default Listings;
