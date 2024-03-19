// Stopwatch ⏱️
// Codédex

import React from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  setTimeout(function() {
    setSeconds(seconds + 1);
  }, 1000);
  
  return (
    <div>
      <h2>Time Starts Now!</h2>
      {seconds} seconds
    </div>
  )
}
