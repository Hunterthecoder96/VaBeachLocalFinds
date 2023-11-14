import React from "react";
import "../Styles/Home.css"
import Oceanfront from "../assets/Oceanfront.png"

export default function Home(){


    return(
        < div className="home-container">
            <div className="hero">
            <h1 className="home-intro">Welcome to Virginia Beach</h1>
            <h2>we love our people</h2>
            <h2>Come enjoy our community!</h2>
       
        <img  className="home-photo"src={"https://res.cloudinary.com/simpleview/image/upload/v1646762440/clients/virginia/HR20042403V_006_06906a3b-b2bd-482f-9832-c3ad5d26222f.jpg"} />
        
        </div>
        <div className="about">
            <h1>About Virginia Beach</h1>
            <p>
Virginia Beach is a vibrant coastal city located in southeastern Virginia, renowned for its beautiful beaches, rich history, and diverse attractions. Stretching along the Atlantic Ocean, it boasts over 35 miles of sandy shores, making it a popular destination for beachgoers, surfers, and water sports enthusiasts.

The city is a blend of bustling tourist areas and quieter residential neighborhoods. The Oceanfront is the heart of Virginia Beach, featuring the iconic three-mile-long boardwalk lined with hotels, restaurants, shops, and entertainment venues. The boardwalk is perfect for strolling, biking, or simply enjoying the ocean views.

Beyond the beaches, Virginia Beach offers a range of activities and attractions. First Landing State Park provides opportunities for hiking, camping, and exploring nature trails. The Virginia Aquarium & Marine Science Center is a must-visit, showcasing marine life and offering interactive exhibits. Additionally, the Military Aviation Museum and Cape Henry Lighthouse provide insights into the area's history.

The city hosts various events and festivals throughout the year, from music concerts to sporting events, catering to diverse interests. Its dining scene features fresh seafood and a mix of international cuisines, and there are plenty of opportunities for outdoor recreation, including kayaking, fishing, and dolphin-watching tours.

Overall, Virginia Beach combines the relaxation of a beach town with the excitement of a dynamic city, making it a fantastic destination for visitors seeking both leisure and adventure.</p>

        </div>
        <div className="seashore-container">
            <h1>Nature</h1>
            <p>First Landing State Park, nestled along the coastline of Virginia, is a captivating natural oasis that beautifully merges land and sea. Spanning over 2,800 acres, this park is steeped in history, being the site where English colonists first landed in 1607 before continuing their journey to establish Jamestown.</p>
            <img className="seashore-photo" src={"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_50,w_740/v1/clients/virginiabeachva/144_3_2283_jpeg_2af5fb02-5a69-4104-8670-15a4bbfaee3d.jpg"} />
        </div>

        </div>
    )
}