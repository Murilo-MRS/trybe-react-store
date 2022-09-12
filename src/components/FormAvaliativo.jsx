import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class FormAvaliativo extends Component {
  render() {
    return (
      <div>
        <input type="email" placeholder="Email" />

        <label htmlFor="star-1">
          1
          <input name="rating" id="star-1" value="1" type="radio" />
        </label>
        <label htmlFor="star-2">
          2
          <input name="rating" id="star-2" value="2" type="radio" />
        </label>
        <label htmlFor="star-3">
          3
          <input name="rating" id="star-3" value="3" type="radio" />
        </label>
        <label htmlFor="star-4">
          4
          <input name="rating" id="star-4" value="4" type="radio" />
        </label>
        <label htmlFor="star-5">
          5
          <input name="rating" id="star-5" value="5" type="radio" />
        </label>

        <textarea name="comments" id="comments" cols="30" rows="10" />
        <button type="button">Avaliar</button>
      </div>
    );
  }
}
