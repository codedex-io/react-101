import { Link } from "react-router-dom"; 
import "../styles.css";

export default function NavBar() {
  return (
    <nav className="navbar"> 
      <Link to="/" >Home</Link> 
      <Link to="/about" >About</Link> 
      <Link to="/gallery" >Gallery</Link>
      <Link to="/customers" >Customers</Link> 
    </nav> 
  );
}
