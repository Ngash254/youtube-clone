import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";

function VideoCard({ video }) {
    function truncate(str, n) {
        if (str.length > n) {
            str = str.substring(0, n - 1) + "...";
            return str;
        } else {
            return str;
        }
    }

    const {
        id, 
        snippet: {
            channelId, 
            channelTitle,
            title, 
            publishedAt, 
            thumbnails: {
                medium}}
        } = video;

        const [views, setViews] = useState(null);
        const [duration, setDuration] = useState(null);
        const [channelIcon, setChannelIcon] = useState(null);
    
        const videoTimeInSec = moment.duration(duration).asSeconds();
        const _duration = moment.utc(videoTimeInSec * 1000).format("mm:ss");


    useEffect(() => {
        const get_video_details = async () => {
            const {data: {items}} = await request("/videos", {
                params: {
                    part: "contentDetails, statistics",
                    id: id
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }

        get_video_details()
    }, [id])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {data: {items}} = await request("/channels", {
                params: {
                    part: "snippet",
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }

        get_channel_icon()
    }, [channelId])


    return (
        <div className="videoCard">
            <div className="videoCard__image">
                <img className="videoCard__picture" src={medium.url} alt="" />
                <span className="vid__duration">{_duration}</span>
            </div>
            <div className="videoCard__otherDetails">
                <Avatar
                    className="videoCard__avatar"
                    src={channelIcon ? channelIcon.url : "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                    alt=""
                />
                <div className="videoCard__channel">
                    <div className="videoCard__channel__title">
                        <h4 className="channel__title" title={title}>
                            {truncate(title, 50)}
                        </h4>
                        <h4 className="channel__name">{channelTitle}</h4>
                    </div>

                    <div className="channel__views__timestamp">
                        <p className="views">{numeral(views).format("0.a")} views</p>
                        <span className="the-dot"> • </span>
                        <p className="timestamp">{moment(publishedAt).fromNow()}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
