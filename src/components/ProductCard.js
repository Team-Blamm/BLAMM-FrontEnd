import React, {Component} from "react";
import {Link} from "react-router-dom";

class ProductCard extends Component {
  render() {
    let productList = null;
    const products = this.props.products;

    productList = products.map(product => {

      return (
        <div className="l-productListing" key={product.title}>
        <Link to={`productlist/${encodeURIComponent(product.title)}`} style={{ textDecoration:"none" }} >

          <div className="b-productListing">
            <img className="b-productListing__image" src={product.imgSrc} alt={product.title}/>
            <div className="l-productListing__info">
              <div className="b-productListing__title">
                <Link to={`productlist/${encodeURIComponent(product.title)}`}>{product.title}
                </Link>
              </div>

              <div className="b-productListing__info">
                <p className="b-productListing__subheader">Type &nbsp;&nbsp;</p>
                <p className="b-productListing__text">{product.type}</p>
              </div>
              <div className="b-productListing__info">
                <p className="b-productListing__subheader">Rate &nbsp;&nbsp;</p>
                <p className="b-productListing__text">$ {product.rate}</p>
              </div>
            </div>
          </div>
        </Link>
        </div>
      )
    });

    return (
      <div className="productListGrid">{productList}</div>
    );
  }
}

export default ProductCard;
