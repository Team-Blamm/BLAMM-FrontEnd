import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';


class ProdDetails extends Component {

  componentWillMount() {
    console.log(this.props)
    this.props.fetchProducts();
  }

  render() {
  let match = this.props.match.params.product;
  let oneProduct = this.props.products.map((product) => {

    if (product.title === match) {
      console.log(product);
      let services = product.services.map(services =>
        services.split(" ").map(oneService => <option>{oneService}</option>));

      // if (product.reviews) {
      //   let reviews = product.reviews.map(review =>
      //     <div className="reviews">
      //       <div className="rating">{review.rating}</div>
      //       <div className="reviewer">{review.username}</div>
      //       <div className="review">{review.review}</div>
      //     </div>)
      // }

      return (
        <div className="Body">
          <div className="mainContainer">
            <div className="imageContainer">
              <img
                className="productImage"
                src={product.imgSrc}
                alt={"portrait of " + product.title}
              />
            </div>
            <div className="textContainer">
              <header className="header">
                <h2>{product.title}</h2>
                <h4>{product.type}</h4>
                <h3>{product.tagline}</h3>
              </header>
              <select name="services" className="servicesSelect">
                {services}
              </select>
              <form className="hoursCounter">
                <label htmlFor="hours" className="hoursLabel">Hours</label>
                <button type="submit" name="hours" className="hoursUp" />
                <input type="text" name="hours" value="1" />
                <button type="submit" className="hoursDown" />
                <label htmlFor="total" className="totalLabel">
                  Total Price
                </label>
                <input type="text" name="total" className="totalInput" value="" />
                <button type="submit" name="add" className="cartButton">Add to Cart</button>
              </form>
              <div className="description">{product.description}</div>
              {/* {reviews} */}
            </div>
          </div>
        </div>
        )
      }
      console.log(oneProduct);
    })
    return (
      <div className="container">
        {oneProduct}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    fetched: state.products.fetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProdDetails);
