import React from "react";
import "./SubscriptionsVideoCard.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function SubscriptionsVideoCard({ img, title, channel, views, timestamp }) {
    return (
        <div className="subscriptionsVideoCard">
            <div className="subscriptionsVideoCard__image">
                <img
                    className="subscriptionsVideoCard__picture"
                    src={img}
                    alt={img}
                />
            </div>
            <div className="subscriptionsVideoCard__otherDetails">
                <div className="subscriptionsVideoCard__channel">
                    <div className="subscriptionsVideoCard__channel__title">
                        <h4 className="sub__channel__title">{title}</h4>
                        <h4 className="sub__channel__name">
                            {channel}
                            <span>
                                <VerifiedUserIcon className="ver__icon" />
                            </span>
                        </h4>
                    </div>

                    <div className="subscriptionsChannel__views__timestamp">
                        <p className="views">{views} views</p>
                        <p className="the-dot"> • </p>
                        <p className="timestamp">{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionsVideoCard;
