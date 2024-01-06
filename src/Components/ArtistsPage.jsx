import React from "react";
import "../Styles/Artists.css"
import ArtData from "../Components/ArtData"



export default function ArtistsPage(){
    const map = ArtData.map((art)=>{
        return <ArtCard key={art.id} Art={art} />
    })

    return(
        <div className="art-container">
        <h2>Local Art</h2>
        <div className="art-map">{map}</div>
        

        </div>
        
    )
}

 function ArtCard(props){
    return(
    < div className="art-card">
        <h2 >{props.Art.name}</h2>
        <img className="art-img"src={props.Art.image} alt="Art"/>
        <p>by: Fletcher Bryant</p>
        
    </div>
)
}
