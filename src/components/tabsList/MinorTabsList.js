import React from "react";
import "./MinorTabsList.css";

const MinorTabsListData = [
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

function MinorTabsList() {
    return (
        <div className="minorTabsList">
            <div className="textBar">
                {MinorTabsListData.map((item) => (
                    <div className="list__div" title={item}>
                        <h3 className="text">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MinorTabsList;
