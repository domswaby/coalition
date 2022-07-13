import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Card from "./Card/Card";

const History = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const imageData = [
        {id: 1, url: "images/man_on_mountain.jpeg"},
        {id: 2, url: "images/another_mountain.jpeg"},
        {id: 3, url: "images/man_on_mountain.jpeg"},
        {id: 4, url: "images/another_mountain.jpeg"}
    ]

    return (
        <>
            <div>History</div>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Carousel breakPoints={breakPoints}>
                {imageData.map((item) => <Card url={item.url} />)}
            </Carousel>
        </>
    )
}

export default History;