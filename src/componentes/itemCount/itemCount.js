import React, { useState } from "react";
import "../itemCount/itemcount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button
          className="Button"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>

        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock || quantity === 0}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
