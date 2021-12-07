import React from "react";
import "./SimilarVideosCard.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import moment from "moment";
import numeral from "numeral";

function SimilarVideosCard({
    similarVideosCardVidSrc,
    similarVideosCardVidTitle,
    similarVideosCardChannelName,
    similarVideosCardviews,
    similarVideosCardtimestamp,
    similarVideosCardDuration,
}) {

    const videoTimeInSec = moment.duration(similarVideosCardDuration).asSeconds();
    const _duration = moment.utc(videoTimeInSec * 1000).format("mm:ss");
    
    return (
        <div className="SimilarVideosCard">
            <div className="sv__video">
                <img src={similarVideosCardVidSrc} alt="" />
                <span className="vid__duration">{_duration}</span>
            </div>
            <div className="sv__video__details">
                <h3 className="video__title" title={similarVideosCardVidTitle}>
                    {similarVideosCardVidTitle}
                </h3>
                <div className="channel__name">
                    <h4>{similarVideosCardChannelName}</h4>
                    {/*<VerifiedUserIcon className="verification__icon" />*/}
                </div>
                <div className="views__and__timestamp">
                    <span className="views">
                        {numeral(similarVideosCardviews).format("0.a")} views ▪
                    </span>
                    <span className="timestamp">
                        {moment(similarVideosCardtimestamp).fromNow()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SimilarVideosCard;
