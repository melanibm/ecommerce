import React from 'react';
import cart from './imagenes/cart-outline.svg';
import '../CardWidget/card-widget.css'

const CartWidget = ({ itemCount }) => {
    return (
      <div className="cart-widget">
        <img src={cart} alt="cart-widget" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget;