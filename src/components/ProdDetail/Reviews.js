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

  renderReview = reviews.map(review => {
    return (
      <div className="reviews" key="review.review">
        <div className="rating">{review.rating}</div>
        <div className="reviewer">{review.username}</div>
        <div className="review">{review.review}</div>
          {userType == "user" ? <button className="addReview" onClick={this.addReview}>Add Review</button>
          : null}
        </div>)}
    )
    return (
      <div>
        {renderReview}
      </div>
    )
  }
}

export default Reviews;
