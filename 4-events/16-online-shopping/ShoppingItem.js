// Online Shopping 🛒
// Codédex

import { useState } from "react";

export default function ShoppingItem(props) {
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity(function(prevQuantity) { return prevQuantity + 1});
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(function(prevQuantity) { return prevQuantity - 1});
    }
  }

  return (
    <div className="shopping-item">
      <p className="item-info">
        <strong>{props.name}</strong>
        <div className="buttons">
          <button className="btn-decrement" onClick={handleDecrement}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="btn-increment" onClick={handleIncrement}>
            +
          </button>
        </div>
      </p>
    </div>
  );
}