import React from "react";
import { createRoot } from "react-dom/client.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
