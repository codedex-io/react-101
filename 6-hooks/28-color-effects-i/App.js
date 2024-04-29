import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
  const [color, setColor] = useState('#ffffff'); 

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const generateColor = function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div id="button">
      <button onClick={generateColor}>ZAP!!</button>
    </div>
  );
}
