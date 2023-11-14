
import React from "react";
import Logo from "../assets/logo.png"


export default function Hero() {
  return (
    <div className="hero">
      <h1 className="home-intro">Welcome to Virginia Beach</h1>
      <div className="h2-container">
        <img className="hero-logo"src={Logo}/>
        <h2>we love our people</h2>
        <h2>Come enjoy our community!</h2>
      </div>
    </div>
  );
}