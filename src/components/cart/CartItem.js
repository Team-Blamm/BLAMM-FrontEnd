import React, {Component} from 'react';
import Select from '../ProdDetail/Select';


class CartItem extends Component {
  render() {

    const product = this.props.product;
    console.log("CartItem props");
    console.log(this.props);
    return (

      <div>
        <div key={product.title}>
          <div className="imageContainer">
            <img className="thumbnailImage" src={product.imgSrc} alt={"portrait of " + product.title}/>
          </div>
          <div className="textContainer">
            <header className="header">
              <h2>{product.title}</h2>
              {/* <h4>{product.type}</h4>
              <h3>{product.tagline}</h3> */}
            </header>
            <Select {...this.props}/>
          </div>
        </div>
        <div>
          {/* <button value="-" onClick={this.decrementHours}>-</button> */}
          Hours: {this.props.hours} {/* <button value="+" onClick={this.incrementHours}>+</button> */}
        </div>
        <div>
          Total:
        </div>
      </div>
    );
  }
}



export default CartItem;
