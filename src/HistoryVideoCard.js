import React from "react";
import "./HistoryVideoCard.css";

function HistoryVideoCard({
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
        <div className="historyVideoCard">
            <div className="history__video__image__div">
                <img
                    className="history__video__image__src"
                    src={img}
                    alt="videoImage"
                ></img>
            </div>

            <div className="history__component__details">
                <div className="component__header">
                    <h2 className="history__component__title">
                        {truncate(title, 50)}
                    </h2>
                    {/*<IconButton className="more__icon__button">
                        <MoreVertIcon className="more__icon" />
    </IconButton>*/}
                </div>

                <div className="component__views__and__timestamp">
                    <h4 className="channel__name">{channelName}</h4>
                    <span>
                        ▪ {views} ▪ {timestamp}
                    </span>
                </div>

                <span className="component__description">
                    {truncate(description, 100)}
                </span>
            </div>
        </div>
    );
}

export default HistoryVideoCard;
