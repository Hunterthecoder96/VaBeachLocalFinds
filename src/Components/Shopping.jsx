import React from "react";
import "../Styles/Shopping.css"
import ShoppingList from "./ShoppingList"
import Card from "./Card"

const map =ShoppingList.map(place=>{
    return <Card key={place.id} place={place}/>
})
export default function Shopping(){

    return(
        <div className="Shopping-container">
            <h1 className="Title">Shopping</h1>
            <div className="cards">{map}</div>
        </div>
    )
}