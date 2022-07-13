import React from "react"; 
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo-link">
            <div className="logo-wrap">
                <div className="logo"></div>
                <div className="logo-title">
                    <p>los angeles</p>
                    <p>mountains</p>
                </div>    
            </div>
        </Link>
    )
}

export default Logo;