import React from "react";
import "../style/Navbar.css"



function Navbar() {
  return (
    <div className="navbar_container">
      <nav class="navbar">
        <div class="nav-items left">
            <a href="#home">Tutorial</a>
            <a href="#about">Pricing</a>
        </div>
        <div class="nav-title">
            <a href="#home">Pdf Signature</a>
        </div>
        <div class="nav-items right">
            <a href="#services">Servizi</a>
            <a href="#contact">Chi siamo</a>
        </div>
    </nav>
    </div>
  );
}


export default Navbar;