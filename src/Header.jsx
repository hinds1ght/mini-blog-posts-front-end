import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";
 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">Mini Blog Post App</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
