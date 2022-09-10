import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categoria extends Component {
  render() {
    const { nome, id, handleInputRadio } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { nome }
          <input
            data-testid="category"
            id={ nome }
            type="radio"
            value={ id }
            name="categoryList"
            onChange={ handleInputRadio }
          />
        </label>
      </div>
    );
  }
}

Categoria.propTypes = {
  handleInputRadio: PropTypes.func,
  id: PropTypes.string,
  nome: PropTypes.string,
}.isRequired;
export default Categoria;
