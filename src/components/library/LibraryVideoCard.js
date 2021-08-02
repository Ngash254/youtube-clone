import React from "react";
import "./LibraryVideoCard.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function LibraryVideoCard({ img, title, channel, views, timestamp }) {
    function truncate(str, n) {
        if (str.length > n) {
            str = str.substring(0, n - 1) + "...";
            return str;
        } else {
            return str;
        }
    }
    return (
        <div className="libraryVideoCard">
            <div className="libraryVideoCard__image">
                <img
                    className="libraryVideoCard__picture"
                    src={img}
                    alt={img}
                />
            </div>
            <div className="libraryVideoCard__otherDetails">
                <div className="libraryVideoCard__channel">
                    <div className="libraryVideoCard__channel__title">
                        <h4 className="lib__channel__title">
                            {truncate(title, 50)}
                        </h4>
                        <h4 className="lib__channel__name">
                            {channel}
                            <span>
                                <VerifiedUserIcon className="ver__icon" />
                            </span>
                        </h4>
                    </div>

                    <div className="libraryChannel__views__timestamp">
                        <p className="views">{views} views</p>
                        <p className="the-dot"> • </p>
                        <p className="timestamp">{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LibraryVideoCard;
