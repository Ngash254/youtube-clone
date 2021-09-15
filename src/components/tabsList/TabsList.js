import React, { useState } from "react";
import "./TabsList.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TabsListData = [
    "All",
    "Python",
    "Full-stack",
    "work outs",
    "Celebrities",
    "Stand Up Comedy",
    "Chill-out Music",
    "Leo Messi",
    "React",
    "Redux",
    "Django tutorials",
    "Life hacks",
    "World Cup",
    "Nat Geo",
    "Documentaries",
    "Mysteries",
    "Science",
    "White hat hacking",
];

function TabsList() {
    const [activeDiv, setActiveDiv] = useState("All");

    const handleClick = (val) => {
        setActiveDiv(val)
    }

    return (
        <div className="tabsList">
            <div className="tabsList__textBar">
                {TabsListData.map((item) => (
                    <div 
                        className={activeDiv === item ? "tabsList__div active" : "tabsList__div"} 
                        title={item} 
                        onClick={() => handleClick(item)}
                    >
                        <h3 
                            key={item}
                            className="tabsList__text"
                        >
                            {item}
                        </h3>
                    </div>
                ))}
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
