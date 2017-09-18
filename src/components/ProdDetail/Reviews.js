import React, { Component } from 'react';



class Reviews extends Component {

  render() {
  const userType = this.props.userType;
  const reviews = this.props.product.reviews;
  let renderReview = null;

  renderReview = reviews.map(review => {
    return (
      <div className="reviews" key={review.review}>
        <div className="rating">{review.rating} / 5 stars</div>
        <div className="reviewer">{review.username}</div>
        <div className="review">{review.review}</div>

        </div>)}
    )
    return (
      <div className="l-reviews">
        {renderReview}
        {userType === "user" ? <button className=".b-forms__submit" onClick={this.addReview}>Add Review</button>
        : null}
      </div>

    )
  }
}

export default Reviews;
