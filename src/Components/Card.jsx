import React from "react";
import "../Styles/Card.css"

export default function Card(props){

    return(
        <div className="card-container">
            <a href={props.link}>
            <div>
                <img className="card-image" src={props.image}/>
            </div>
            <div> 
                <img className="card-image" src={props.place.image} alt=" image"/>
                <h2>{props.place.name}</h2>
                <p>{props.place.description}</p>
            </div>
</a>
        </div>
    )
}