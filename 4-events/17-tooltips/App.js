// Tooltips 🪛
// Codédex

import { useState } from "react";

export function App() {
 // State to track tooltip visibility
 const [showTooltip, setShowTooltip] = useState(false);

 function handleMouseEnter() {
  setShowTooltip(true);
 }

 function handleMouseLeave() {
  setShowTooltip(false);
 }

 return (
   <div className="App">
     <div
       className="element-with-tooltip"
       /* add events here 💖 */
     >
       Hover over me
       {showTooltip && <div className="tooltip">This is a tooltip</div>}
     </div>
   </div>
 )
}