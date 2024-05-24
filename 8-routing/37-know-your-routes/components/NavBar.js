import { Link } from "react-router-dom"; 
import "../styles.css";

export default function NavBar() {

  return (
    <nav className="navbar"> 
      <Link to="/owala" >  Owala  </Link> 
      <Link to="/stanley" >  Stanley </Link> 
      <Link to="/yeti" >  Yeti  </Link> 
    </nav> 
  );
}
