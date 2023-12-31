import React from "react";
import "../Styles/Resturaunts.css";
import ResturauntList from "./ResturauntList";
import Card from "./Card";

export default function Resturaunts() {
  const map = ResturauntList.map((place) => {
    return <Card key={place.id} place={place} className="card" />;
  });

  return (
    <div className="resturaunt-container">
      <h1 className="resturaunt-header">Restaurant's</h1>
      <div className="resturaunt-items">{map}</div>
    </div>
  );
}