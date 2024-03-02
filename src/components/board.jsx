import React from "react";
import "./board.css";

export const Board = ({imgSrc, title, desc, buttonText, website}) => {
  return (
   <div className="card-container">
    <img src={imgSrc} alt="Card Image" className="card-img"/>
    
    <h1 className="card-title">{title}</h1>
    <p className="card-description">{desc}</p>
    <a href={website}className="card-btn">{buttonText}</a>
  </div>
    
        )
}

