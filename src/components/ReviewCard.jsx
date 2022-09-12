import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewCard extends Component {
  render() {
    const { reviews, productId } = this.props;
    return (
      <div>
        {reviews.filter((e) => (
          e.id === productId.id
        )).map((e) => (
          <div className="review-card" key={ e.email }>
            <span data-testid="review-card-email">{e.email}</span>
            {' - Nota: '}
            <span data-testid="review-card-rating">{e.rating}</span>
            <p data-testid="review-card-evaluation">{e.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

ReviewCard.propTypes = {
  reviews: PropTypes.arrayOf(),
}.isRequired;
