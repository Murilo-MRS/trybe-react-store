import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Categoria from './Categoria';

class Home extends Component {
  state = {
    productSearch: '',
    productsList: [],
    categoryList: [],
    // selectedCategory: '',
    searchFail: false,
    inputCategoryList: [],
  };

  componentDidMount() {
    this.handleCategory();
  }

  handleClick = async (product, category) => {
    const responseSearch = await getProductsFromCategoryAndQuery(
      product,
      category,
    );
    const { results } = responseSearch;

    if (results.length === 0) {
      this.setState({ searchFail: true });
    }
    if (results.length > 0) {
      this.setState({ searchFail: false });
    }
    this.setState({ productsList: results });
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({ productSearch: value });
  };

  handleInputRadio = async ({ target: { value } }) => {
    // const { value } = target;
    const responseSelectedCategory = await getProductsFromCategoryAndQuery('', value);
    const { results } = responseSelectedCategory;
    console.log(results);
    this.setState({
      // selectedCategory: value,
      inputCategoryList: results,
    });
  };

  handleCategory = async () => {
    const response = await getCategories();
    this.setState({ categoryList: response });
  };

  render() {
    const {
      productSearch,
      searchFail,
      productsList,
      // selectedCategory,
      categoryList,
      inputCategoryList,
    } = this.state;
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
        {categoryList.map((e) => (
          <Categoria
            key={ e.id }
            nome={ e.name }
            id={ e.id }
            handleInputRadio={ this.handleInputRadio }
          />
        ))}
        <div>
          {(!searchFail)
            ? <ProductList searchFail={ searchFail } productsList={ productsList } />
            : (<h2>Nenhum produto foi encontrado</h2>)}
          <ProductList
            productsList={ inputCategoryList }
          />
        </div>
      </div>
    );
  }
}
export default Home;
