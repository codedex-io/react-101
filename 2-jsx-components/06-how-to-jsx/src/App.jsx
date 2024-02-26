import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <h1>NYC Stops</h1>
      <ul>
        <li>🗽 Manhattan - Washington Square Park</li>
        <li>🏟️ The Bronx - Yankee Stadium</li>
        <li>🎡 Brooklyn - Coney Island</li>
        <li>✈️ Queens - Astoria Park</li>
        <li>🌉 Staten Island - Historic Richmond Town</li>
      </ul>
    </div>
  )
}

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
