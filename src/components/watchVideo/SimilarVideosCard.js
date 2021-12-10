import React, { useEffect, useState } from "react";
import "./SimilarVideosCard.css";
import moment from "moment";
import numeral from "numeral";
import { useHistory } from "react-router-dom";
import request from "../../api";
import { stringFormatter } from "../home/VideoCard";

function SimilarVideosCard({video}) {
    const [similarVideoViews, setSimilarVideoViews] = useState(null);
    const [duration, setDuration] = useState(null);

    const history = useHistory();

    const {
        id,
        snippet: {
            publishedAt,
            title,
            channelTitle,
            thumbnails,
        }
    } = video;

    

    useEffect(() => {
        const get_video_details = async () => {
            const {data: {items}} = await request("/videos", {
                params: {
                    part: "contentDetails, statistics",
                    id: id.videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setSimilarVideoViews(items[0].statistics.viewCount);
        }

        get_video_details()
    }, [id]);

    const videoTimeInSec = moment.duration(duration).asSeconds();
    const _duration = moment.utc(videoTimeInSec * 1000).format("mm:ss");

    const handleClick = () => {
        history.push(`/video/${id.videoId}`)
    }

    
    
    return (
        <div className="SimilarVideosCard" onClick={handleClick}>
            <div className="sv__video">
                <img src={
                    thumbnails.maxres
                        ? thumbnails.maxres.url
                        : thumbnails.default.url
                } alt="" />
                <span className="vid__duration">{_duration}</span>
            </div>
            <div className="sv__video__details">
                <h3 className="video__title" title={title}>
                    {stringFormatter(title, 50)}
                </h3>
                <div className="channel__name">
                    <h4>{stringFormatter(channelTitle)}</h4>
                </div>
                <div className="views__and__timestamp">
                    <span className="views">
                        {numeral(similarVideoViews).format("0.a")} views ▪
                    </span>
                    <span className="timestamp">
                        {moment(publishedAt).fromNow()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SimilarVideosCard;
