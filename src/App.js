import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Carrinho from './pages/Carrinho';
import Categoria from './pages/Categoria';
import { getCategories } from './services/api';

class App extends Component {
  state = {
    categoryList: [],
  };

  componentDidMount() {
    this.handleCategory();
  }

  handleCategory = async () => {
    const response = await getCategories();
    this.setState({ categoryList: response });
  };

  render() {
    const { categoryList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Carrinho } />
        </Switch>
        {categoryList.map((e) => (
          <Categoria key={ e.id } nome={ e.name } />
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
