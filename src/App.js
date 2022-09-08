import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Carrinho from './pages/Carrinho';
import Categoria from './pages/Categoria';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Carrinho } />
        </Switch>
        <Categoria />
      </BrowserRouter>
    );
  }
}

export default App;
