import React from "react";
import { useState } from "react";
import Cookie from "./cookie.png";

export default function Cookie() {
  const [click, setClick] = useState(0);

  const increment = () => {
    setClick(click + 1); 
  };

  return (
    <div>
      <p>{click} Cookies</p>
      <img onClick={increment} src={Cookie} alt="Chocolate chip cookie" />
    </div>
  );
}

