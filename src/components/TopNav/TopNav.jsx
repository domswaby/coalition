import React from "react"; 
import Logo from "../Logo/logo";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div className="topnav-wrap">
            <nav>
                <Logo />
                <div className="navlinks-wrap">
                    <Link to="/">01. Home</Link>
                    <Link to="/team">02. Team</Link>
                </div>
            </nav>
        </div>
    )
}

export default TopNav;