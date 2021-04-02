import React from "react";
import "./TrendingVideoCard.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";

function TrendingVideoCard({
    img,
    title,
    views,
    timestamp,
    channelName,
    description,
}) {
    function truncate(str, n) {
        return str.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <div className="trendingVideoCard">
            <div className="video__image__div">
                <img
                    className="video__image__src"
                    src={img}
                    alt="videoImage"
                ></img>
            </div>

            <div className="component__details__div">
                <div className="component__header">
                    <h2 className="component__title">{title}</h2>
                    <IconButton className="more__icon__button">
                        <MoreVertIcon className="more__icon" />
                    </IconButton>
                </div>

                <div className="component__views__and__timestamp">
                    <h4 className="channel__name">{channelName}</h4>
                    <span>
                        ▪ {views} ▪ {timestamp}
                    </span>
                </div>

                <span className="component__description">
                    {truncate(description, 150)}
                </span>
            </div>
        </div>
    );
}

export default TrendingVideoCard;
