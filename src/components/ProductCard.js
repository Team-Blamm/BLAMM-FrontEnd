import React, { Component } from "react";
import { Link } from "react-router-dom";



class ProductCard extends Component {
  render() {
    let productList = null;
    const products = this.props.products;

     productList = products.map(product => {

        return (
          <div className="b-productListing" key={product.title}>
            <div className="productBorder">
              <div>
                <img className="thumbnailImage" src={product.imgSrc} alt={product.title}/>
              </div>
              <div>
                <Link to={`productlist/${product.title}`}>{product.title}
               </Link>
                </div>
                <div>
                  <p>{product.type}</p>
                  <p>{product.rate}</p>
                </div>
              </div>
            </div>
            )
          })

    return (
      <div>{productList}</div>
    );
  }
}

export default ProductCard;
