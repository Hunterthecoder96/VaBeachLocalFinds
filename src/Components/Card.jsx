import React from "react";
import "../Styles/Card.css"

export default function Card(props){

    return(
        <div className="card-container">
            <a href={props.place.link}>
        
            <div className="card-items"> 
                <img className="card-image" src={props.place.image} alt=" image"/>
                <h2 className="card-items-text">{props.place.name}</h2>
                <p className="card-items-text">{props.place.description}</p>
            </div>
</a>
        </div>
    )
}