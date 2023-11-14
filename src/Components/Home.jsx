import React from "react";
import "../Styles/Home.css"
import About from "./About";
import Nature from "./Nature";
import Hero from "./Hero";
import Fitness from "./Fitness";

export default function Home(){


    return(
        < div className="home-container">
            <Hero/>
        <About/>
        {/* <img className="seashore-background" src={"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_50,w_1400/v1/clients/virginiabeachva/144_3_2283_jpeg_2af5fb02-5a69-4104-8670-15a4bbfaee3d.jpg"} /> */}
       <Nature/>
        <Fitness/>

        </div>
    )
}