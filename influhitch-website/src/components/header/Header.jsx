import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className="name">
      <h1>InfluHitch</h1>
      </div>
      <div className="navlinks">
        <a  href="#header">Home</a>
      </div>
      <div className="navlinks"> 
      <a href="">FAQ</a>
      </div>
     <div className="btn">
     <a href="" >Partner with Influhitch</a>  
     </div>
      </div>
    </header>
  );
};

export default Header;
