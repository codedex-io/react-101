// WaterFest 🏝️
// Codédex

import React, { useState } from "react";
import "./index.css";

export default function EventInvitation() {
  const [interestedCount, setInterestedCount] = useState(0);
  const [goingCount, setGoingCount] = useState(0);
  const [interestedHovered, setInterestedHovered] = useState(false);
  const [goingHovered, setGoingHovered] = useState(false);

  function handleInterestedClick() {
    setInterestedCount(interestedCount + 1);
  }

  function handleInterestedKeyDown(e) {
    if (e.key === " " || e.key === "SpaceBar") {
      e.target.style.backgroundColor = "#000112";
      e.target.style.color = "white";
    }
  }

  function handleInterestedKeyUp(e) {
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
  }

  function handleGoingKeyDown(e) {
    if (e.key === " " || e.key === "SpaceBar") {
      e.target.style.backgroundColor = "#000112";
      e.target.style.color = "white";
    }
  }

  function handleGoingKeyUp(e) {
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
  }

  function handleGoingClick() {
    setGoingCount(goingCount + 1);
  }

  function handleInterestedMouseEnter() {
    setInterestedHovered(true);
  }

  function handleInterestedMouseLeave() {
    setInterestedHovered(false);
  }

  function handleGoingMouseEnter() {
    setGoingHovered(true);
  }

  function handleGoingMouseLeave() {
    setGoingHovered(false);
  }

  function handleInterestedFocus() {
    setInterestedHovered(true);
  }

  function handleGoingFocus() {
    setGoingHovered(true);
  }

  function handleInterestedBlur() {
    setInterestedHovered(false);
  }

  function handleGoingBlur() {
    setGoingHovered(false);
  }

  return (
    <div className="container">
      <div className="hero-image">
        <img src="src/waterfest.jpg" alt="Event" />
      </div>
      <div className="description">
        <h2>You're invited to WaterFest! 🏝️</h2>
        <p>The hardest part is showing up. After you're here, you've already won. Join other winners like you for a weekend of fun and relaxation!</p>
      </div>
      <div className="buttons-container">
        <button
          tabIndex="0"
          className={`interested-button ${interestedHovered ? "hovered" : ""}`}
          onClick={handleInterestedClick}
          onMouseEnter={handleInterestedMouseEnter}
          onMouseLeave={handleInterestedMouseLeave}
          onFocus={handleInterestedFocus}
          onBlur={handleInterestedBlur}
          onKeyDown={handleInterestedKeyDown}
          onKeyUp={handleInterestedKeyUp}
        >
          Interested ({interestedCount})
        </button>
        <button
          tabIndex="0"
          className={`going-button ${goingHovered ? "hovered" : ""}`}
          onClick={handleGoingClick}
          onMouseEnter={handleGoingMouseEnter}
          onMouseLeave={handleGoingMouseLeave}
          onFocus={handleGoingFocus}
          onBlur={handleGoingBlur}
          onKeyDown={handleGoingKeyDown}
          onKeyUp={handleGoingKeyUp}
        >
          Going ({goingCount})
        </button>
      </div>
    </div>
  );
}