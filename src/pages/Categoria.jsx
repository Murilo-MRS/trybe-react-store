import React, { Component } from 'react';

class Categoria extends Component {
  render() {
    return (
      <div>
        <label htmlFor="categoria1" data-testid="category">
          Acessórios para Veículos
          <input type="radio" value="acessorio_veiculo" name="categoria" />
        </label>
        <label htmlFor="categoria2" data-testid="category">
          Agro
          <input type="radio" value="agro" name="categoria" />
        </label>
        <label htmlFor="categoria3" data-testid="category">
          Alimentos e Bebidas
          <input type="radio" value="alimentos_bebidas" name="categoria" />
        </label>
      </div>
    );
  }
}
export default Categoria;
