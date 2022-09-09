import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categoria extends Component {
  render() {
    const { nome } = this.props;
    return (
      <div>
        <label htmlFor={ nome } data-testid="category">
          { nome }
          <input id={ nome } type="radio" value={ nome } name="categoryList" />
        </label>
      </div>
    );
  }
}
export default Categoria;
Categoria.propTypes = { nome: PropTypes.string.isRequired };
