import React from "react";
import "../Styles/NewAttractions.css"
import Wavepool from "./Wavepool";
import Vibe from "./Vibe";

export default function NewAttractions(){

    return(
        <div >
            <h1 className="text-center">New Attractions</h1>
            <Wavepool/>
            <Vibe />
        </div>
    )
}