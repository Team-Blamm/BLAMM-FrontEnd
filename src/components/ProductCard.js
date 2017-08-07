import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  render() {
    let productList = null;
    const userType = this.props.userType;
    const match = this.props.match;
    const products = this.props.products;
    console.log(userType);
    console.log(products);

    switch (userType) {
      case "user":

          productList = products.map(product => {
            return (
            <div className="productGridItem" key={product.title}>
              <div className="productBorder">
                <div>
                  <img className="" src={product.imgSrc} alt={product.title}/>
                </div>
                <div>
                  <Link to={`user/productlist/name/${product.title}`}>{product.title}
                  </Link>
                </div>
                <div>
                  <p>{product.title}</p>
                  <p>{product.rate}</p>
                </div>
              </div>
            </div>
            )
          })

        break;

        case "admin":

            productList = products.map(product => {
              return (
              <div className="productGridItem" key={product.title}>
                <div className="productBorder">
                  <div>
                    <img className="" src={product.imgSrc} alt={product.title}/>
                  </div>
                  <div>
                    <Link to={`admin/productlist/name/${product.title}`}>{product.title}
                    </Link>
                  </div>
                  <div>
                    <p>{product.title}</p>
                    <p>{product.rate}</p>
                  </div>
                </div>
              </div>
              )
            });

        // break;
      }
      return (
        <div>{productList}</div>
      );
    }
  }

export default ProductCard;
