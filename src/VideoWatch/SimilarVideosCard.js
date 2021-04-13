import React from "react";
import "./SimilarVideosCard.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function SimilarVideosCard({
    similarVideosCardVidSrc,
    similarVideosCardVidTitle,
    similarVideosCardChannelName,
    similarVideosCardviews,
    similarVideosCardtimestamp,
}) {
    return (
        <div className="SimilarVideosCard">
            <div className="sv__video">
                <img src={similarVideosCardVidSrc} alt="" />
            </div>
            <div className="sv__video__details">
                <h3 className="video__title" title={similarVideosCardVidTitle}>
                    {similarVideosCardVidTitle}
                </h3>
                <div className="channel__name">
                    <h4>{similarVideosCardChannelName}</h4>
                    <VerifiedUserIcon className="verification__icon" />
                </div>
                <div className="views__and__timestamp">
                    <span className="views">
                        {similarVideosCardviews} views ▪
                    </span>
                    <span className="timestamp">
                        {similarVideosCardtimestamp}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SimilarVideosCard;
