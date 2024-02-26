import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  let giveYouUp = true;
  let letYouDown = true;

  return (
    <div>
      {
        giveYouUp || letYouDown ? "I'm searching for the meaning of life." : <p>Search no further and <a href="https://bit.ly/3I1Osb1" target="_blank">check this out</a>!</p>
      }
    </div>
  )
}

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
