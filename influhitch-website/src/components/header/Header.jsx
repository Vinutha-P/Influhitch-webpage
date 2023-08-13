import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className="name">
      <h1>InfluHitch</h1>
      </div>
      <div className="navlinks">
      <Link to="/">Home</Link>
      </div>
      <div className="navlinks"> 
      <Link to="/faq">FAQ</Link>
      </div>
      <div className="navlinks">
      <Link to="/privacy">Privacy Policy</Link>
      </div>
     <div className="btn">
     <a href="https://www.influhitch.in/form.html" >Partner with Influhitch</a>  
     </div>
      </div>
    </header>
  );
};

export default Header;
