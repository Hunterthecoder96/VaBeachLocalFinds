import React from "react";
import {Link} from "react-router-dom"



export default function Fitness(){

    return(
        <div className="fitness-container">
            <h1>Local Art</h1>
            <p>Amazing Local Artist's Wall</p>
            <Link to="/artist">
             <img className="fitness-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNoAWwisOspEoUwz0LYB7X7LUAqLV4Jv9uQ&s"/>
        </Link>     
       </div>

    )
}