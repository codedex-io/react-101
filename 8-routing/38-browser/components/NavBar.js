import { Link } from "react-router-dom";
import "../styles.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/one">version one</Link>
      <Link to="/two">version two</Link>
      <Link to="/three">version three</Link>
    </div>
  );
}
