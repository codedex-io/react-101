// Online Shopping 🛒
// Codédex

import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function App() {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ShoppingItem name="🍌 bananas" />
      <ShoppingItem name="🍞 bread" />
      <ShoppingItem name="🥛 milk" />
    </div>
  );
}