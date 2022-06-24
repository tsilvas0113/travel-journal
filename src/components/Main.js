import React from "react";

function Main (props) {
    return (
        <section className="hero">
            <img className="hero-img" src={props.image} alt="location image" />
            <div className="hero-text">
                <div className="location">
                    <img className="map-icon" src="./images/marker-icon.png" alt="map marker" />
                    <span className="city">{props.location}</span>
                    <a href={props.mapsLink}>View on Google Maps</a>
                </div>
                <div className="location-name">{props.title}</div>
                <div className="date">{props.startDate} - {props.endDate}</div>
                <div className="description">{props.description}</div>
            </div>
        </section>
    )
}

export default Main