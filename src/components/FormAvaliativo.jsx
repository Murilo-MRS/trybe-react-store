import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormAvaliativo extends Component {
  render() {
    const { handleInputReview, handleButtonReview, email, text, rating } = this.props;
    return (
      <form>
        <div className="email-rate-container">
          <div className="email-container">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={ email }
                placeholder="Email"
                data-testid="product-detail-email"
                onChange={ handleInputReview }
              />
            </label>
          </div>
          <div className="rate">
            <label htmlFor="star-1">
              1
              <input
                name="rating"
                id="star-1"
                value="1"
                type="radio"
                data-testid="1-rating"
                checked={ rating === '1' }
                onChange={ handleInputReview }
              />
            </label>
            <label htmlFor="star-2">
              2
              <input
                name="rating"
                id="star-2"
                value="2"
                type="radio"
                data-testid="2-rating"
                checked={ rating === '2' }
                onChange={ handleInputReview }
              />
            </label>
            <label htmlFor="star-3">
              3
              <input
                name="rating"
                id="star-3"
                value="3"
                type="radio"
                data-testid="3-rating"
                checked={ rating === '3' }
                onChange={ handleInputReview }
              />
            </label>
            <label htmlFor="star-4">
              4
              <input
                name="rating"
                id="star-4"
                value="4"
                type="radio"
                data-testid="4-rating"
                checked={ rating === '4' }
                onChange={ handleInputReview }
              />
            </label>
            <label htmlFor="star-5">
              5
              <input
                name="rating"
                id="star-5"
                value="5"
                type="radio"
                data-testid="5-rating"
                checked={ rating === '5' }
                onChange={ handleInputReview }
              />
            </label>
          </div>
        </div>
        <div>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="5"
            placeholder="Comentário"
            data-testid="product-detail-evaluation"
            value={ text }
            onChange={ handleInputReview }
          />
        </div>
        <button
          type="button"
          data-testid="submit-review-btn"
          onClick={ () => handleButtonReview() }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

FormAvaliativo.propTypes = {
  email: PropTypes.string,
  handleButtonReview: PropTypes.func,
  handleInputReview: PropTypes.func,
  rating: PropTypes.string,
  text: PropTypes.string,
}.isRequired;
