import React from "react";


const BigNum = ({title, num}) => {
    return (
        <div className="bignum-wrap">
            <div className="bignum-number">{num}</div>
            <div className="bignum-title-wrap">
                <div className="bignum-title">{title}</div>
                <div className="square"></div>
            </div>
        </div>
        
    )
}

export default BigNum;