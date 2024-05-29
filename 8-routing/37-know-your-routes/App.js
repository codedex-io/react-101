import React from "react";
import "./styles.css";

import NavBar from "./components/NavBar";
import Owala from "./components/Owala";
import Stanley from "./components/Stanley";
import Yeti from "./components/Yeti";

import { Routes, Route } from "react-router-dom";

export default function App() {
  function Home() {
    return (
      <div className="waterbottle">
        <h1>which waterbottle are you?</h1>
        <p>
          🌟 Navigate the page to find out what watterbottle you are! 🌟
        </p>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/owala" exact element={<Owala />} />
        <Route path="/stanley" exact element={<Stanley />} />
        <Route path="/yeti" exact element={<Yeti />} />
      </Routes>
    </div>
  );
}
