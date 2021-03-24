import React from "react";
import "./info.css";
const Info = ({id,sprites,experience }) => (
  <div className="info-container">
    <img src={sprites["front_default"]} alt="Info"></img>
    <p>Id: <span>{id}</span> <span>Experience: {experience}</span></p>  
  </div>
)

export default Info;