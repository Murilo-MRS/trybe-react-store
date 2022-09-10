import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
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
