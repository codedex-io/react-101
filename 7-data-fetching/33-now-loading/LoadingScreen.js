// Now Loading ⏳
// Codédex

import React, { useState, useEffect } from "react";
import "./styles.css";

export default function LoadingScreen() {
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    setIsLoading(true);
    setLoadingMessage("Loading...")
    const timer = setTimeout(function() {
      setLoadingMessage("Done Loading!");
      setIsLoading(false);
    }, 3000);

    // Clear the timer to avoid memory leaks
    return function() {clearTimeout(timer)};
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation"></div>
        <div className="loading-message">{loadingMessage}</div>
      </div>
    )
  } else {
    return (
      <div className="loading-screen">
      <div className="done-loading-animation"></div>
      <div className="loading-message">{loadingMessage}</div>
      </div>
    );
  }
};
