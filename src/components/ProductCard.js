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
                  <img className="thumbnailImage" src={product.imgSrc} alt={product.title}/>
                </div>
                <div>
                  <Link to={`productlist/${product.title}`}>{product.title}
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
            console.log("admin productList");
            console.log(products);
            productList = products.map(product => {
              return (
              <div className="productGridItem" key={product.title}>
                <div className="productBorder">
                  <div>
                    <img className="thumbnailImage" src={product.imgSrc} alt={product.title}/>
                  </div>
                  <div>
                    <Link to={`productlist/${product.title}`}>{product.title}
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
