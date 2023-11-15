import React from "react";
import {Link} from "react-router-dom"
import Logo from "/src/assets/Logo-removed.png"
import "../Styles/Header.css"
import { TiSocialInstagram } from "react-icons/ti";


export default function Header(){

    return(
    <div className="Header-container">
        <Link className="link" to="/">
        Home
        </Link>
        <Link className="link" to="/resturaunts">
        Restaurants
        </Link>
        <img className="Logo"src={Logo} alt="Logo"/>
        <Link className="link" to="/shopping">
            Shopping
        </Link>
        <Link className="link" to="/NewAttractions">
            New Attractions
        </Link>

        <a  className="insta-container"href="https://www.instagram.com/vabeachlocalfinds/">
        <TiSocialInstagram/>
        <p>@vabeachlocalfinds</p>
        </a>
    

    </div>
    )
}