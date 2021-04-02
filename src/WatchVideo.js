import React from "react";
import "./WatchVideo.css";
import SelectedVideoSection from "./SelectedVideoSection";

function WatchVideo() {
    return (
        <div className="watchVideo">
            <div className="primary">
                <SelectedVideoSection
                    videoSrc="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGphdmFzY3JpcHQlMjBjb2RlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    videoTitle="The Beauty of writing Javascript code."
                    views="10M"
                    timestamp="5 months ago"
                    likes="125K"
                    dislikes="301"
                    channelName="Javascript Community"
                    channelAvatarImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19QDnx_YmNeezO7-VTLMFH7i0VZXyQop9hg&usqp=CAU"
                    subscribers="1.2M"
                    videoDescription="Javascript is not only the most popular language, but also one of the most eye-pleasing to write."
                    comments="678K"
                />
            </div>
        </div>
    );
}

export default WatchVideo;
