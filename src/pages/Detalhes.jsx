import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getProductById } from '../services/api';
import FormAvaliativo from '../components/FormAvaliativo';

export default class Detalhes extends Component {
  state = {
    productId: '',
    productPrice: 0,
    addToCart: false,
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

  render() {
    const { productId, productPrice, addToCart } = this.state;
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
        <FormAvaliativo />
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
