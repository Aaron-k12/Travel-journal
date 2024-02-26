import React from "react"


function Body(props) {
   
    return (
        
          <div className="main-section">
            {/* photo  */}
            <img src={`${props.item.imageUrl}`} className="location-photo"  alt={`photo of ${props.item.title}`} />
            <div className="location-details">
                <div className="location-title">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="title">{props.item.location}</span>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                    <h1>{props.item.title}</h1>
                </div>
    
                <div className="date-description">
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p>{props.item.description}</p>
                </div>
               
            </div>
        
        </div>
        
        
    )
}

export default Body