import React, { Component } from 'react';
import { getCartList } from '../services/api';

class Carrinho extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    this.reviewCartList();
  }

  reviewCartList = () => {
    const cartListFromStorage = getCartList();
    this.setState({ cartList: cartListFromStorage }, () => {
      if (cartListFromStorage.length > 0) {
        this.setState({ cartList: cartListFromStorage });
      }
      console.log(cartListFromStorage);
    });
  };

  render() {
    const { cartList } = this.state;
    console.log(cartList);
    return (
      <div>
        {cartList.length > 0 ? (
          cartList.map((e) => (
            <div key={ e.id }>
              <p data-testid="shopping-cart-product-name">
                {e.title}
              </p>
              <p data-testid="shopping-cart-product-quantity">{e.qtd}</p>
              <p>
                { e.price }
              </p>
            </div>
          ))
        ) : (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        )}
      </div>
    );
  }
}
export default Carrinho;
