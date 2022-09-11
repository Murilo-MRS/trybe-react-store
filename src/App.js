import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/detalhes/:id" component={ Detalhes } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
