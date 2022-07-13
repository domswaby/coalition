import React from "react"; 
import Logo from "../../Logo/logo";
import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className="bottom-nav-wrap">
            <nav>
                <Logo />
                <div className="navlinks-wrap">
                    <Link to="/">01. Home</Link>
                    <Link to="/history">02. History</Link>
                </div>
            </nav>
        </div>
    )
}

export default BottomNav;