import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/history">History</Link>
            <Link to="/team">Team</Link>
        </>
    )
}

export default Home; 