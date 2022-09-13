import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { addReview, getProductById, getReviews } from '../services/api';
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
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const localReviews = id;
    if (!JSON.parse(localStorage.getItem(localReviews))) {
      localStorage.setItem(localReviews, JSON.stringify([]));
    }
    this.handleDetailsMatch();
    this.reviewList();
  }

  reviewList = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const reviewsFromStorage = getReviews(id);
    this.setState({ reviews: reviewsFromStorage }, () => {
      if (reviewsFromStorage?.length > 0) this.setState({ reviews: reviewsFromStorage });
    });
  };

  handleDetailsMatch = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
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
    this.setState({
      [name]: value,
    }, () => {
      this.setState({ invalidField: false });
    });
  };

  handleButtonReview = () => {
    const { email, text, rating, reviews, productId } = this.state;

    const reviewObject = {
      email,
      text,
      rating,
      id: productId.id,
    };

    const {
      match: {
        params: { id },
      },
    } = this.props;
    const arrReviews = [...reviews, reviewObject];
    this.setState(
      {},
      () => {
        const testValidation = /\S+@\S+\.\S+/;
        const emailValidation = testValidation.test(email) && email.length > 0;
        if (emailValidation && rating) {
          addReview(arrReviews, id);
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
          <ReviewCard reviews={ reviews } productId={ productId } />
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
