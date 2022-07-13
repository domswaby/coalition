import React from "react"; 
import Logo from "../../Logo/logo";
import { Link } from "react-router-dom";

const HomeNav = () => {
    return (
        <div className="topnav-wrap" style={{background: "transparent"}}>
            <nav>
                <div className="logo"></div>
                <div className="navlinks-wrap" >
                    <Link to="/history" style={{color: "white"}}>01. History</Link>
                    <Link to="/team" style={{color: "white"}}>02. Team</Link>
                </div>
            </nav>
        </div>
    )
}

export default HomeNav;