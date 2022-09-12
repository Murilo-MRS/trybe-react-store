import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getProductById } from '../services/api';
import FormAvaliativo from '../components/FormAvaliativo';
import ReviewCard from '../components/ReviewCard';

export default class Detalhes extends Component {
  state = {
    productId: '',
    productPrice: 0,
    addToCart: false,
    email: '',
    text: '',
    rating: '',
    invalidField: false,
    reviews: [],
  };

  componentDidMount() {
    this.handleDetailsMatch();
  }

  handleDetailsMatch = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(id);
    const responseProductId = await getProductById(id);
    this.setState({
      productId: responseProductId,
      productPrice: responseProductId.price,
    });
  };

  handleButtonAddToCart = () => {
    this.setState({ addToCart: true });
  };

  handleInputReview = ({ target }) => {
    // const { value } = target;
    const { name, value } = target;
    console.log(value);
    this.setState({
      [name]: value,
      // email,
      // text,
      // rating,
    });
  };

  handleButtonReview = () => {
    const { email, text, rating, reviews } = this.state;

    const reviewObject = {
      email,
      text,
      rating,
    };
    const arrReviews = [...reviews, reviewObject];
    this.setState(
      {
        email: '',
        text: '',
        rating: '',
      },
      () => {
        // const
        if (email.length > 0 && text.length > 0 && rating) {
          this.setState({
            reviews: arrReviews,
            email: '',
            text: '',
            rating: '',
          });
        } else {
          this.setState({ invalidField: true });
        }
      },
    );
  };

  render() {
    const {
      productId,
      productPrice,
      addToCart,
      email,
      text,
      rating,
      invalidField,
      reviews,
    } = this.state;
    const { title, thumbnail } = productId;
    return (
      <div>
        <div>
          <span data-testid="product-detail-name">{title}</span>
          {' - '}
          <span data-testid="product-detail-price">
            {productPrice}
            {/* .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) */}
          </span>
          <div className="image-product">
            <img
              data-testid="product-detail-image"
              src={ thumbnail }
              alt={ title }
            />
          </div>
          <button
            data-testid="shopping-cart-button"
            type="button"
            onClick={ this.handleButtonAddToCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div />
        {addToCart && <Redirect to="/carrinho" />}
        <FormAvaliativo
          handleInputReview={ this.handleInputReview }
          handleButtonReview={ this.handleButtonReview }
          email={ email }
          text={ text }
          rating={ rating }
        />
        {invalidField && <p data-testid="error-msg">Campos inválidos</p>}
        <div className="reviews-container">
          <ReviewCard reviews={ reviews } />
        </div>
      </div>
    );
  }
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
