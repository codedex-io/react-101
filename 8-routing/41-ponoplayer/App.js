import React from "react";
import "./styles.css";

import Home from "./components/Home"
import NavBar from "./components/NavBar";
import About from "./components/About"
import Customers from "./components/Customers";
import Gallery from "./components/Gallery"


import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/customers" exact element={<Customers />} />
      </Routes>
    </div>
  );
}
