import React from "react";
import "../Styles/Card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <a href={props.place.link} className="card-link">
        <div className="card-items">
          <img className="card-image" src={props.place.image} alt="Restaurant" />
          <div className="card-details">
            <h2 className="card-title">{props.place.name}</h2>
            <p className="card-description">{props.place.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}