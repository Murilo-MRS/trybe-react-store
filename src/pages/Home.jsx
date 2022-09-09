import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    productSearch: '',
    searchFail: false,
    productsList: [],
  };

  handleClick = async (product) => {
    const responseSearch = await getProductsFromCategoryAndQuery(product);
    const { results } = responseSearch;
    // console.log(results);
    // console.log(responseSearch.error);
    console.log(product);
    // console.log(results.some((element) => element.title.includes(product)));
    // this.setState({ searchFail: true });
    if (results.length === 0) this.setState({ searchFail: true });
    this.setState({ productsList: results });
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({ productSearch: value });
  };

  render() {
    const { productSearch, searchFail, productsList } = this.state;
    return (
      <div>
        <input data-testid="query-input" onChange={ this.handleInput } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.handleClick(productSearch) }
        >
          Buscar
        </button>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          Carrinho
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          {searchFail ? (
            <h2>Nenhum produto foi encontrado</h2>
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}
export default Home;
