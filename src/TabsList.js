import React from "react";
import "./TabsList.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function TabsList() {
    return (
        <div className="tabsList">
            <div className="tabsList__textBar">
                <div className="tabsList__div first">
                    <h3 className="tabsList__text">All</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Work outs</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Celebrities</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Stand Up comedy</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Chill-out music</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Leo Messi</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Kenyan Politics</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Life hack</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">World cup</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Live</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Documentaries</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Mysteries</h3>
                </div>
                <div className="tabsList__div">
                    <h3 className="tabsList__text">Science</h3>
                </div>
            </div>
            <div className="right__arrow">
                <div className="right__arrow--fadeleft"></div>
                <div className="arrow__div">
                    <ArrowForwardIosIcon className="arrow" />
                </div>
            </div>
        </div>
    );
}

export default TabsList;
