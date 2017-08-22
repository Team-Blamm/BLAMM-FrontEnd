
import React, { Component } from 'react';
import CartContainer from '../../containers/CartContainer';
// import component

// const CartPage = (props) => {
//
//     return(
//       <CartContainer {...props} />
//     );
//   }


class CartPage extends Component {

  render() {
    console.log("CartPage props");
      console.log(this.props);
    return (
      <div>
        <CartContainer {...this.props}/>
      </div>
    )
  }
}

export default CartPage;
