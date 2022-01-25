import React, {useState, useEffect} from "react";
import "./TrendingVideoCard.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import moment from "moment";
import request from "../../api";
import { stringFormatter } from "../home/VideoCard";
import numeral from "numeral";
import { useHistory } from "react-router-dom";

function TrendingVideoCard({video}) {
    const history = useHistory();
    //destructure video items for props
    const {
        id, 
        snippet: {
            channelTitle,
            description,
            title, 
            publishedAt, 
            thumbnails,}
        } = video;

        const [views, setViews] = useState(null);
        const [duration, setDuration] = useState(null);
    
        const videoTimeInSec = moment.duration(duration).asSeconds();
        const _duration = moment.utc(videoTimeInSec * 1000).format("mm:ss");

        /*
        I found out that the youtube data api sometimes returns the id as
        an object instead of just a single variable, so this line here checks 
        for the type of the returned id.
        */
        const everFunctionalId = id?.videoId || id          //if the id is an object, grab the videoId, else just the given value

    function truncate(str, n) {
        return str.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    useEffect(() => {
        const get_video_details = async () => {
            const {data: {items}} = await request("/videos", {
                params: {
                    part: "contentDetails, statistics",
                    id: everFunctionalId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }

        get_video_details()
    }, [everFunctionalId])

    //redirect user to selected watch video page
    const handleClick = () => {
        history.push(`/video/${everFunctionalId}`)
    }

    return (
        <div className="trendingVideoCard" onClick={handleClick}>
            <div className="video__image__div">
                <img
                    className="video__image__src"
                    src={
                        thumbnails.maxres
                        ? thumbnails.maxres.url
                        : thumbnails.medium.url
                    } 
                    alt="videoImage"
                ></img>
                <span className="vid__duration">{_duration}</span>
            </div>

            <div className="component__details__div">
                <div className="component__header">
                    <h2 className="component__title" title={title}>{stringFormatter(title, 50)}</h2>
                    <IconButton className="more__icon__button">
                        <MoreVertIcon className="more__icon" />
                    </IconButton>
                </div>

                <div className="component__views__and__timestamp">
                    <h4 className="channel__name">{stringFormatter(channelTitle, 20)}</h4>
                    <span className="video__timestamp">
                        <span className="some__dot">▪</span> {numeral(views).format("0.a")} ▪ {moment(publishedAt).fromNow()}
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
