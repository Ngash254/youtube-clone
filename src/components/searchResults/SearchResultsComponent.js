import React, {useState, useEffect} from "react";
import "./SearchResultsComponent.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import {useHistory} from "react-router";
import moment from "moment";
import request from "../../api";
import numeral from "numeral";
import {stringFormatter} from "../home/VideoCard"

function SearchResultsComponent({video}) {
    const history = useHistory();
    //distructure properties from the video item prop
    const {
        id,
        snippet: {
            publishedAt,
            channelId,
            title,
            channelTitle,
            thumbnails,
            description
        }
    } = video;

    //format the times and the viewcounts
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelImg, setChannelImg] = useState("");

    const videoTimeInSec = moment.duration(duration).asSeconds();
    const _duration = moment.utc(videoTimeInSec * 1000).format("mm:ss");

    //to make sure we only get id in form of a string since api sometimes gives an object
    const stringFormatId = id?.videoId || id

    /*
        calls to separately get the video stats and channel avatars 
        since this endpoint from the api doesnt return those
    */
    useEffect(() => {
        const get_video_stats = async () => {
            const {data: {items}} = await request("/videos", {
                params: {
                    part: "contentDetails, statistics",
                    id: stringFormatId
                }
            })
            setViews(items[0].statistics.viewCount);
            setDuration(items[0].contentDetails.duration);
        }
        get_video_stats()
    }, [stringFormatId])

    useEffect(() => {
        const get_channel_details = async() => {
            const {data: {items}} = await request("/channels", {
                params: {
                    part: "snippet",
                    id: channelId
                }
            })

            setChannelImg(items[0].snippet.thumbnails.default);
        }

        get_channel_details()
    }, [channelId])

    //redirect the user to the watch page for the selected search item
    const handleClick = () => {
        history.push(`/video/${stringFormatId}`);
    }

    return (
        <div className="SearchResultsComponent" onClick={handleClick}>
            <div className="image__div">
                <img 
                    className="video__image" 
                    src={
                        thumbnails?.medium?.url
                    } 
                    alt="videoImage"
                ></img>
                <span className="vid__duration">{_duration}</span>
            </div>

            <div className="component__details">
                <div className="component__header">
                    <h2 className="component__title" title={stringFormatter(title)}>
                        {stringFormatter(title)}
                    </h2>
                    <IconButton className="more__icon__button">
                        <MoreVertIcon className="more__icon" />
                    </IconButton>
                </div>

                <div className="component__views__and__timestamp">
                    <span>
                        {numeral(views).format("0.a")} ▪ {moment(publishedAt).fromNow()}
                    </span>
                </div>

                <div className="component__avatar__and__channelInfor">
                    <Avatar
                        className="component__avatar"
                        src={channelImg}
                        alt=""
                    />
                    <h6 className="channel__name" title={channelTitle}>
                        {channelTitle}
                        {/*<VerifiedUserIcon className="verified__icon" />*/}
                    </h6>
                    
                </div>

                <span className="component__description">{description}</span>
            </div>
        </div>
    );
}

export default SearchResultsComponent;
