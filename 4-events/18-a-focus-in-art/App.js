// A Focus In Art 🎨
// Codédex

import ZoomableImage from "./ZoomableImage.js";

export default function App() {
  const url = "https://i.imgur.com/ZIBbN09.jpeg";
  return <div><ZoomableImage imageURL={url} zoomFactor={2} /></div>
}
