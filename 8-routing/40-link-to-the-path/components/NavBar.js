import { Link } from "react-router-dom";
import "../styles.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/1986">The Legend of Zelda</Link>
      <Link to="/1992">A Link to the Past</Link>
      <Link to="/2006">Twilight Princess</Link>
      <Link to="/2013">A Link Between Worlds</Link>
      <Link to="/2017">Breath of the Wild</Link>
    </div>
  );
}
