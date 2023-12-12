<<<<<<< HEAD
import React from 'react';
import cart from './imagenes/cart-outline.svg';
import '../CardWidget/card-widget.css'
=======
import cart from './imagenes/file.jpg'
>>>>>>> a53aefb34bcf74024bd937d38fe8c2cc3be18355

const CartWidget = ({ itemCount }) => {
    return (
<<<<<<< HEAD
      <div className="cart-widget">
        <img src={cart} alt="cart-widget" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget;
=======
        <div>
            <img src={cart} alt="cart-widget"/>
            0
        </div> 
    )
}

export default CartWidget
>>>>>>> a53aefb34bcf74024bd937d38fe8c2cc3be18355
