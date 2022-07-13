import React from "react";
import { Link } from "react-router-dom";
import BigNum from "../BigNum/BigNum";
import BottomNav from "./BottomNav/BottomNav";
import Schedule from "./Schedule/Schedule";

const Team = () => {
    return (
        <>
            <div className="team-bignum-wrap">
                <div>
                    <div className="team-bignum">
                        <BigNum title="climb" num="02"/>
                    </div>
                    <p className="team-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum nam, ipsam corrupti quidem quod fugiat quia, quas, et quam ad laudantium dicta veritatis! Praesentium amet accusantium sit dolorem cumque.</p>
                </div>
            </div>
            <div className="mountains-wrap">
                <div>
                    <Link to="#">Mountain 1</Link>
                    <Link to="#">Mountain 2</Link>
                </div>
            </div>
            <div className="team-content-wrap">
                <Schedule />
            </div>
            
            <BottomNav />
          
            {/* <Link to="/">Home</Link>
            <Link to="/history">History</Link> */}
        </>
    )
}

export default Team;