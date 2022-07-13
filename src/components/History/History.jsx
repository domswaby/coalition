import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Card/Card";
import TopNav from "./TopNav/TopNav";
import BigNum from "../BigNum/BigNum";

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
        {id: 4, url: "images/another_mountain.jpeg"},
        {id: 5, url: "images/man_on_mountain.jpeg"},
        {id: 6, url: "images/another_mountain.jpeg"},
        {id: 7, url: "images/man_on_mountain.jpeg"},
        {id: 8, url: "images/another_mountain.jpeg"},
    ]

    return (
        <>
            <div className="history-wrap">
                <TopNav />
                <div className="history-bignum">
                    <BigNum title="history" num="01"/>
                </div>
                <p className="history-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, delectus rem. Molestiae veniam minima atque labore vero asperiores praesentium, ab accusantium optio nihil unde magnam amet soluta, deserunt sint et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis debitis eveniet, rerum quisquam quas exercitationem nulla dolor fuga autem accusantium a alias, laudantium adipisci beatae quaerat asperiores, nemo nisi.</p>
                <div className="carousel-wrap">
                    <Carousel breakPoints={breakPoints}>
                        {imageData.map((item) => <Card url={item.url} />)}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default History;