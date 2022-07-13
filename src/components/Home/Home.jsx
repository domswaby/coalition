import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";


const Home = () => {
    return (
         <>
            <div className="history-wrap">
                <HomeNav />
                <div className="site-title-wrap">
                    <h1 className="site-title">
                        <div>Los Angeles</div>
                        <div>Mountains</div>
                    </h1>
                </div>
            </div>
        </>
      
    )
}

export default Home; 