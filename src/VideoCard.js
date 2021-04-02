import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

function VideoCard({ img, avatarImage, title, channel, views, timestamp }) {
    function truncate(str, n) {
        if (str.length > n) {
            str = str.substring(0, n - 1) + "...";
            return str;
        } else {
            return str;
        }
    }
    return (
        <div className="videoCard">
            <div className="videoCard__image">
                <img className="videoCard__picture" src={img} alt={img} />
            </div>
            <div className="videoCard__otherDetails">
                <Avatar
                    className="videoCard__avatar"
                    src={avatarImage}
                    alt=""
                />
                <div className="videoCard__channel">
                    <div className="videoCard__channel__title">
                        <h4 className="channel__title">
                            {truncate(title, 50)}
                        </h4>
                        <h4 className="channel__name">{channel}</h4>
                    </div>

                    <div className="channel__views__timestamp">
                        <p className="views">{views} views</p>
                        <p className="the-dot"> • </p>
                        <p className="timestamp">{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
