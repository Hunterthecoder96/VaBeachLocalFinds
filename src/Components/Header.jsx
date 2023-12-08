// import React from "react";
// import {Link} from "react-router-dom"
// import Logo from "/src/assets/Logo-removed.png"
// import "../Styles/Header.css"
// import { TiSocialInstagram } from "react-icons/ti";


// export default function Header(){

//     return(
//     <div className="Header-container">
//         <Link className="link" to="/">
//         Home
//         </Link>
//         <Link className="link" to="/resturaunts">
//         Restaurants
//         </Link>
//         <img className="Logo"src={Logo} alt="Logo"/>
//         <Link className="link" to="/shopping">
//             Shopping
//         </Link>
//         <Link className="link" to="/NewAttractions">
//             New Attractions
//         </Link>

//         <a  className="insta-container"href="https://www.instagram.com/vabeachlocalfinds/">
//         <TiSocialInstagram/>
//         <p>@vabeachlocalfinds</p>
//         </a>
    

//     </div>
//     )
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo-removed.png";
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
        <img className="Logo" src={Logo} alt="Logo" />
        <Link className="link" to="/shopping">
          Shopping
        </Link>
        <Link className="link" to="/NewAttractions">
          New Attractions
        </Link>
        <a className="insta-container" href="https://www.instagram.com/vabeachlocalfinds/">
          <TiSocialInstagram />
          <p>@vabeachlocalfinds</p>
        </a>
      </div>
    </div>
  );
}
