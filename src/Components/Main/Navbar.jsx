import { Link } from "react-router-dom";
import './Navbar.css'


export default function Navbar(){
  

  
  return(
    
    <nav className="navbar">
    
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </nav>

   
    
    
    
    )
  }
    
    
    