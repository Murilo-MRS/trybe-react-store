import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <input />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}
export default Home;
