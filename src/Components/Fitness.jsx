import React from "react";

export default function Fitness(){

    return(
        <div className="fitness-container">
            <h1>Fitness</h1>
            <p>Join Our Premier Health Club</p>
            <a href="https://offers.inletfitness.com/virginia-beach-greatneck/?gclid=CjwKCAiA0syqBhBxEiwAeNx9N9KIc9-B0E4q63cvJebTPnb2-erQM1fXaaPvUdr3KRErKNK4G8xxqxoCl4cQAvD_BwE">
             <img className="fitness-photo" src="data:image/png;base64,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" />
            </a> 
       </div>

    )
}