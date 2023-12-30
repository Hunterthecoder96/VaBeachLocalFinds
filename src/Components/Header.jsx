import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TiSocialInstagram } from "react-icons/ti";
import "../Styles/Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Header-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`links-container ${showMenu ? "show" : ""}`}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/resturaunts">
          Restaurants
        </Link>
        <img className="Logo" src="data:image/png;base64,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" alt="Logo" />
        <Link className="link" to="/shopping">
          Shopping
        </Link>
        <Link className="link" to="/NewAttractions">
          New Attractions
        </Link>
        <a className="insta-container" href="https://www.instagram.com/vabeachlocalfinds/">
          <TiSocialInstagram />
          <p>N/A</p>
        </a>
      </div>
    </div>
  );
}
