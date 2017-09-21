import React, { Component } from 'react';



class Reviews extends Component {

  render() {
  const userType = this.props.userType;
  const reviews = this.props.product.reviews;
  let renderReview = null;

  renderReview = reviews.map(review => {
    return (
      <div className="b-review" key={review.review}>
        <div className="b-review__text">{review.rating} / 5 stars</div>
        <div className="b-review__text">By {review.username}</div>
        <div className="b-review__text">{review.review}</div>

        </div>)}
    )
    return (
      <div className="l-reviews">
        <div className="b-forms__label">Reviews</div>
        {renderReview}
        {userType === "user" ? <button className="b-forms__submit" onClick={this.addReview}>Add Review</button>
        : null}
      </div>

    )
  }
}

export default Reviews;
