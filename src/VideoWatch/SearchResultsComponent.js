import React from "react";
import "./SearchResultsComponent.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { IconButton } from "@material-ui/core";

function SearchResultsComponent({
    img,
    title,
    views,
    timestamp,
    avatarImage,
    channelName,
    description,
}) {
    return (
        <div className="SearchResultsComponent">
            <div className="image__div">
                <img className="video__image" src={img} alt="videoImage"></img>
            </div>

            <div className="component__details">
                <div className="component__header">
                    <h2 className="component__title">{title}</h2>
                    <IconButton className="more__icon__button">
                        <MoreVertIcon className="more__icon" />
                    </IconButton>
                </div>

                <div className="component__views__and__timestamp">
                    <span>
                        {views} ▪ {timestamp}
                    </span>
                </div>

                <div className="component__avatar__and__channelInfor">
                    <Avatar
                        className="component__avatar"
                        src={avatarImage}
                        alt=""
                    />
                    <h4 className="channel__name">{channelName}</h4>
                    <VerifiedUserIcon className="verified__icon" />
                </div>

                <span className="component__description">{description}</span>
            </div>
        </div>
    );
}

export default SearchResultsComponent;
