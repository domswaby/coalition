import React from "react";
import { Link } from "react-router-dom";

const Card = ({data, url}) => {
    return (
        <div className="card">
            <img src={url}/>     
        </div>
        
    )
}

export default Card;