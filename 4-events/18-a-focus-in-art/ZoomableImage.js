// A Focus In Art 🎨
// Codédex

import { useState } from "react";

export default function ZoomableImage(props) {
  const [isZoomed, setIsZoomed] = useState(false);

  function handleZoomIn() {
    setIsZoomed(true);
  }

  function handleZoomOut() {
    setIsZoomed(false);
  }

  return (
    <div className="image-div">
      <img
        className="picture-frame"
        tabIndex="0"
        src={props.imageURL}
        alt="Zoomable"
        style={{
          width: isZoomed ? `${props.zoomFactor * 100}%` : "100%",
          transition: "width 0.5s",
          cursor: "pointer",
        }}
        onFocus={handleZoomIn}
        onBlur={handleZoomOut}
      />
    </div>
  );
}
