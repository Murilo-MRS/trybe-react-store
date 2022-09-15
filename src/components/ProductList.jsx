import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCartList } from '../services/api';

export default class ProductList extends Component {
  handleButtonAddToCart = (params) => {
    const { productsList } = this.props;
    const obj = productsList.find((e) => (e.id === params));
    console.log(obj);
    this.setState({}, () => {
      obj.qtd = 1;
      addCartList(obj);
    });
  };

  render() {
    const { productsList } = this.props;
    // const renderizar = productsList || categoryList
    // if(productsList) renderizar productsList
    // if(categoryList) renderizar categoryList

    return (
      <div>
        { productsList.map((e) => (
          <div data-testid="product" key={ e.id }>
            <img src={ e.thumbnail } alt={ e.title } />
            <Link
              data-testid="product-detail-link"
              to={ `/detalhes/${e.id}` }
            >
              <p>{e.title}</p>
            </Link>
            <button
              type="button"
              onClick={ () => this.handleButtonAddToCart(e.id) }
              data-testid="product-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
            <p>
              {e.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        )) }
        {/* {!searchFail ? (
          productsList.map((e) => (
            <div data-testid="product" key={ e.id }>
              <img src={ e.thumbnail } alt={ e.title } />
              <p>{e.title}</p>
              <p>
                {e.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
          ))
        ) : (
          <h2>Nenhum produto foi encontrado</h2>
        )} */}
      </div>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.object,
  searchFail: PropTypes.bool,
}.isRequired;
