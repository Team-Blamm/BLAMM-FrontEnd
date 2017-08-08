import React, { Component } from 'react';

import { deleteReview, addReview } from '../../actions/productActions';

// deleteReview = e => {
//   this.props.deleteReview();
// };

// addReview = e => {
//   this.props.deleteReview();
// };

class Reviews extends Component {
  render() {
  const userType = this.props.userType;
  const reviews = this.props.product.reviews;
  let renderReview = null;

  switch (reviews) {
    case false:
      switch (userType) {
        case "user":
          return
            renderReview =
              <div className="reviews">
                <p className="noReviews">No Reviews Yet</p>
                <button className="addReview" onClick={this.addReview}>Add Review</button>
              </div>
          break;
        case "admin":
          return
          renderReview =
              <div className="reviews">
                <p className="noReviews">No Reviews Yet</p>
              </div>
          break;
      }
    case true:
      switch (userType) {
        case "user":
          return
            renderReview = reviews.map(review =>
              <div className="reviews">
                <div className="rating">{review.rating}</div>
                <div className="reviewer">{review.username}</div>
                <div className="review">{review.review}</div>
                <button className="addReview" onClick={this.addReview}>Add Review</button>
              </div>)
          break;
        case "admin":
          return
            renderReview = reviews.map(review =>
              <div className="reviews">
                <div className="rating">{review.rating}</div>
                <div className="reviewer">{review.username}</div>
                <div className="review">{review.review}</div>
                <button className="deleteReview" onClick={this.deleteReview}>Delete</button>
              </div>)
          break;
      }
    }
    return (
      <div>
        {renderReview}
      </div>
    )
  }
}

export default Reviews;
