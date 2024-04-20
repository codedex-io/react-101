// High Score II 🕹️
// Codédex

import React, { useState } from "react";

export default function HighScore() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 3) {
      alert("Name must be 3 characters or less.");
    } else {
      setName("");
    }
  };

  return (
    <div className="arcade-container">
      <form className="arcade-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name<br/><br />(3 characters max)</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
          className="arcade-input"
        />
        <br />
        <button type="submit" className="arcade-button">Submit</button>
      </form>
      <p>Top Score: <strong>{name}</strong> </p>
    </div>
  );
}
