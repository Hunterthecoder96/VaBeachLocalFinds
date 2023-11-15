import React from "react";
import "../Styles/Home.css"
import About from "./About";
import Nature from "./Nature";
import Hero from "./Hero";
import Fitness from "./Fitness";
import Concerts from "./Concerts";

export default function Home(){


    return(
        < div className="home-container">
        <Hero/>
        <About/>
       <Nature/>
        <Fitness/>
        <Concerts/>

        </div>
    )
}