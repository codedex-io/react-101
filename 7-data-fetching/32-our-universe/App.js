// Our Universe 🌌
// Codédex

import React, { useState, useEffect } from "react";

export default function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(function () {
    async function fetchAPOD() {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
      const data = await response.json();
      setApodData(data);
    }
    fetchAPOD();
  }, []);

  // Conditional rendering to avoid accessing properties of null
  return (
    <div style={{ maxHeight: "90vh", overflowY: "auto"}}>
      <h1>NASA Astronomy Picture of the Day (APOD)</h1>
      {apodData && <div>
        <h3>{apodData.title}</h3>
        <img src={apodData.url} alt={apodData.title} style={{ maxWidth: "75%" }} />
        <p>{apodData.explanation}</p>
      </div>}
    </div>
  );
};
