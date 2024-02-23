import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const barcelonaImage = "https://bit.ly/3HNBfm9";
  const tokyoImage = "https://bit.ly/3uqeiSM";
  const ohioImage = "https://bit.ly/3whR81p";

  const imageGallery = [
    <li><img src={barcelonaImage} alt="" /></li>,
    <li><img src={tokyoImage} alt="" /></li>,
    <li><img src={ohioImage} alt="" /></li>
  ]

  return (
    <div>
      <ul>
        {imageGallery}
      </ul>
    </div>
  )
}

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
