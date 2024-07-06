import React from "react";
import { FaLocationDot } from "react-icons/fa6";
export default function Card(props){
    return(
        <div className="card-details">   
            <img className="card-img" src={props.img} />
            <div className="dest-details">
                <div className="location-detail">
                    <FaLocationDot className="location-logo" />
                    <span className="location">{props.location}</span>
                    <span className="google-maps">View on Google Maps</span>
                </div>
                <h1 className="destination">{props.destination}</h1>
                <p className="bold">{props.dates}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}