import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LegendOfZelda from "./components/LegendOfZelda";
import LinkPast from "./components/LinkPast";
import TwilightPrincess from "./components/TwilightPrincess";
import LinkWorlds from "./components/LinkWorlds";
import BoTW from "./components/BoTW";
import "./styles.css";

export default function App() {
  function Home() {
    return (
      <div className="center">
        <p>Explore the pages above!</p>
      </div>
    );
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/1986" exact element={<LegendOfZelda />} />
        <Route path="/1992" exact element={<LinkPast />} />
        <Route path="/2006" exact element={<TwilightPrincess />} />
        <Route path="/2013" exact element={<LinkWorlds />} />
        <Route path="/2017" exact element={<BoTW />} />
      </Routes>
    </div>
  );
}
