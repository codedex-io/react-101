import { Link } from "react-router-dom";
import "../styles.css";

export default function Map() {
  return (
    <div className="map-container">
      <br />
      <h2>Welcome to ReactTown!</h2>
      <div className="map">
        <Link to="/" className="map-link house">
          🏡
        </Link>
        <Link to="/garden" className="map-link garden">
          🪴
        </Link>
        <Link to="/school" className="map-link school">
          🏫
        </Link>
        <Link to="/museum" className="map-link museum">
          🏛️
        </Link>
      </div>
    </div>
  );
}
