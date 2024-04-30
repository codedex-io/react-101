// Cookie Clicker 🍪
// Codédex

import React from "react";
import { useState } from "react";
import Cookie from "./cookie.png";

export default function App() {
  const [click, setClick] = useState(0);

  function increment() {
    setClick(click + 1); 
  };

  return (
    <div id="cookie">
      <p>{click} Cookies</p>
      <img onClick={increment} src={"https://i.imgur.com/VMWZ9bM.png"} alt="Chocolate chip cookie" />
    </div>
  );
}

