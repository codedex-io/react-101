// Tooltips 🪛
// Codédex

import { useState } from "react";

export default function App() {
 // State to track tooltip visibility
 const [showTooltip, setShowTooltip] = useState(false);

 function handleMouseOver() {
  setShowTooltip(true);
 }

 function handleMouseLeave() {
  setShowTooltip(false);
 }

 return (
   <div className="App">
     <div
       className="element-with-tooltip"
       onMouseOver={handleMouseOver}
       onMouseLeave={handleMouseLeave}
     >
       Hover over me
       {showTooltip && <div className="tooltip">This is a tooltip</div>}
     </div>
   </div>
 )
}
