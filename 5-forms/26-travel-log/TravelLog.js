// Travel Log 🗺️
// Codédex

import React, { useState } from "react";

export default function TravelLog() {
  const [activities, setActivities] = useState([]);
  const [inputData, setInputData] = useState({
    destination: "",
    dates: "",
    groupSize: 0,
    travelPreferences: ""
  });

  function handleActivitiesChange(e) {
    const selectedActivities = Array.from(e.target.selectedOptions, (option) => option.value);
    setActivities(selectedActivities);
  };

  function handleInputDataChange(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Reset form fields after submission
    setActivities([]);
    setInputData({
      destination: "",
      dates: "",
      groupSize: "",
      travelPreferences: ""
    })
  };

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination:</label>
        <input type="text" name="destination" id="destination" value={inputData.destination} onChange={handleInputDataChange} />

        <label htmlFor="activities">Activities:</label>
        <select id="activities" multiple value={activities} onChange={handleActivitiesChange}>
          <option value="hiking">Hiking</option>
          <option value="safari">Safari</option>
          <option value="scuba-diving">Scuba Diving</option>
        </select>

        <label htmlFor="dates">Dates:</label>
        <input type="date" id="dates" name="date" value={inputData.dates} onChange={handleInputDataChange} />

        <label htmlFor="group-size">Group Size:</label>
        <input type="number" name="groupSize" id="group-size" value={inputData.groupSize} onChange={handleInputDataChange} />

        <label htmlFor="travel-preferences">Travel Preferences:</label>
        <textarea id="travel-preferences" name="travelPreferences" value={inputData.travelPreferences} onChange={handleInputDataChange} />

        <button type="submit">Book Adventure</button>
      </form>
    </div>
  );
};
