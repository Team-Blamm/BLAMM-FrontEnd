import React, {Component} from 'react';
import Select from '../ProdDetail/Select';

class CartItem extends Component {
  render() {

    const cart = this.props.cart;
    console.log("CartItem props");
    console.log(this.props.cart);
    let cartTotals = 0;
    let getTotals = cart.map(product => {
      return cartTotals += (product.product.rate * product.hours);
    });
    let cartProducts = cart.map(product => {
      let itemTotal = (product.product.rate * product.hours);

      return <div>
        <div key={product.product.title}>
          <div className="imageContainer">
            <img className="thumbnailImage" src={product.product.imgSrc} alt={"portrait of " + product.product.title}/>
          </div>
          <div className="textContainer">
            <header className="header">
              <h2>{product.product.title}</h2>
              {/* <h4>{product.type}</h4>
              <h3>{product.tagline}</h3> */}
            </header>
            <Select {...this.props}/>
          </div>
        </div>
        <div>
          {/* <button value="-" onClick={this.decrementHours}>-</button> */}
          Hours: {product.hours}
          {/* <button value="+" onClick={this.incrementHours}>+</button> */}
        </div>
        <div>
          Item Total: {itemTotal}
        </div>
      </div>
    })

    return (
      <div>
        <div className="cartProducts">
          {cartProducts}
        </div>
        <div className="cartTotals">
          Total: {cartTotals}
        </div>
      </div>
    );
  }
}

export default CartItem;
