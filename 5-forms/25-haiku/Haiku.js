// Haiku 📜
// Codédex

import React, { useState } from "react";

export default function Haiku() {
  const [theme, setTheme] = useState("");

  function handleSelectChange(e) {
    setTheme(e.target.value);
  };

  const themes = {
    nature: ["A gentle breeze blows", "Leaves rustle in the soft wind", "Nature whispers peace"],
    love: ["Heartbeats softly sound", "Love's sweet melody resounds", "Together we're found"],
    seasons: ["Spring blooms with new life", "Summer's warmth and joy arrive", "Autumn leaves fall, sigh"],
  };

  function generateHaiku() {
    if(theme) {
      return themes[theme].map(function(line, index) {
        return <p key={index}>{line}</p>
      });
    }
  };

  return (
    <div className="container">
      <h2>Haiku Builder</h2>
      <select className="theme-select" value={theme} onChange={handleSelectChange}>
        <option value="">--Select a theme--</option>
        <option value="nature">🌲 Nature</option>
        <option value="love">❤️ Love</option>
        <option value="seasons">🍂 Seasons</option>
      </select>
      <div>
        {generateHaiku()}
      </div>
      <br></br>
      <textarea
        className="haiku-textarea"
        placeholder="Write your own haiku here..."
        rows={3}
        cols={10}
      ></textarea>
    </div>
  );
}
