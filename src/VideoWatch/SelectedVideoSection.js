import React, { useState } from "react";
import "./SelectedVideoSection.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import CommentsBar from "./CommentsBar";
import SimilarVideosCard from "./SimilarVideosCard";
import TabsList from "../TabsList";

function SelectedVideoSection({
    videoSrc,
    videoTitle,
    views,
    timestamp,
    likes,
    dislikes,
    channelName,
    channelAvatarImg,
    subscribers,
    videoDescription,
    comments,
}) {
    const [input, setInput] = useState("");

    return (
        <div className="SelectedVideoSection">
            <div className="video__and__comments">
                <div className="video__box">
                    <img
                        className="video__img"
                        src={videoSrc}
                        alt="video"
                    ></img>
                </div>

                <div className="video__title">
                    <span>{videoTitle}</span>
                </div>
                <div className="video__stats">
                    <div className="video__views__and__timestamp">
                        <span>
                            {views} views • {timestamp}
                        </span>
                    </div>
                    <div className="video__user__actions">
                        <p>
                            <ThumbUpIcon className="mat__icon" />{" "}
                            <span>{likes}</span>
                        </p>
                        <p>
                            <ThumbDownIcon className="mat__icon" />{" "}
                            <span>{dislikes}</span>
                        </p>
                        <p>
                            <ScreenShareIcon className="mat__icon" />{" "}
                            <span>SHARE</span>
                        </p>
                        <p>
                            <SaveAltIcon className="mat__icon" />{" "}
                            <span>SAVE</span>
                        </p>
                        <MoreHorizIcon className="mat__icon" />
                    </div>
                </div>
                <div className="channel__infor">
                    <div className="channel__avatar__div">
                        <Avatar
                            className="channel__avatar"
                            src={channelAvatarImg}
                            alt=""
                        />
                    </div>
                    <div className="channel__and__video__details">
                        <div className="channel__and__video__details__top">
                            <div className="channel__details">
                                <span>{channelName}</span>
                                <h6>{subscribers} subscribers</h6>
                            </div>
                            <div className="sub__note__buttons">
                                <Button
                                    variant="contained"
                                    className="subscription__button"
                                >
                                    SUBSCRIBE
                                </Button>
                            </div>
                        </div>

                        <div className="channel__and__video__details__bottom">
                            <p className="video__description">
                                {videoDescription}
                            </p>
                            <h5>SHOW MORE</h5>
                        </div>
                    </div>
                </div>

                <div className="comments__section">
                    <div className="comments__header">
                        <h3 className="number__of__comments">
                            {comments} Comments
                        </h3>
                        <div className="sort__div">
                            <SortIcon />
                            <span>SORT BY</span>
                        </div>
                    </div>
                    <div className="add__comment">
                        <Avatar className="user__avatar__comments">S</Avatar>
                        <div className="add__comment__form">
                            <div className="form">
                                <input
                                    type="text"
                                    placeholder="Add a public comment..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </div>
                            <div className="form__submission__actions">
                                <h4>CANCEL</h4>
                                <Button variant="contained">COMMENT</Button>
                            </div>
                        </div>
                    </div>
                    <div className="posted__comments">
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt6uFattpRFTqU869c4ND-QleusUrFZCXJw&usqp=CAU"
                            userName="Johnny Walker"
                            commentTimestamp="2 days ago"
                            comment="Yes, yes, js rocks.🤙 Ever since I learnt how to code in Javascript, I have never looked back!🔥"
                            commentLikes="17"
                            commentDislikes="2"
                        />
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B8jkcYFODf4GBngmelxMrP58nRgPwXaP2g&usqp=CAU"
                            userName="Nina"
                            commentTimestamp="3 weeks ago"
                            comment="Javascript language can make you feel some level of goodness anything else has made you feel till now. I strongly advocate for it my people.💻"
                            commentLikes="251"
                            commentDislikes="1"
                        />
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQe5v0jTdtb4RHCBFwIeEnK-9MqFZAu9RRg&usqp=CAU"
                            userName="RandomQl"
                            commentTimestamp="2 hours ago"
                            comment="Lots of truth in this video guys."
                            commentLikes="2"
                            commentDislikes=""
                        />
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOXtBg1xcswtXUGRGoSMXDDKTclbM3qUd2Q&usqp=CAU"
                            userName="LiteNation"
                            commentTimestamp="2 months ago"
                            comment="Yoooo, js is one of the prettiest languages there is in the programming world. I am so proud to be one of the many coders who speak javascript to them computers.🔥🔥"
                            commentLikes="32"
                            commentDislikes="5"
                        />
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD9bUfWR_Q_UnGM-iOa7o10TFUH01h2g3EA&usqp=CAU"
                            userName="TheNinja"
                            commentTimestamp="1 month ago"
                            comment="Well, nothing can be termed as the most beautiful language. This video is utterly exxergerating on the prettiness of js. Not so cool mister and mistresses🏂"
                            commentLikes=""
                            commentDislikes="500"
                        />
                        <CommentsBar
                            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uu6BIOVgUBdUJ9hV2m-TZyX-7kCgEOKnRw&usqp=CAU"
                            userName="IndependentWoman"
                            commentTimestamp="17 hours ago"
                            comment="Very motivatinggg🤸‍♂️."
                            commentLikes="8"
                            commentDislikes=""
                        />
                    </div>
                </div>
            </div>

            <div className="adds__and__similarVideos">
                <div className="adds">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6N5aFuvC4KQxB9JRQBnlNFZ45IkgW6OwWA&usqp=CAU"
                        alt="advertisement"
                        className="adds__img"
                    />
                </div>
                <div className="similarVideos">
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1580894908361-967195033215?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="HOW TO WRITE CLEAN JAVASCRIPT CODE."
                        similarVideosCardChannelName="CleverProgrammer"
                        similarVideosCardviews="122K"
                        similarVideosCardtimestamp="20 hours ago"
                    />
                    <TabsList className="tabslist" />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Advantages of being a javascript pro in 2021."
                        similarVideosCardChannelName="PurpleNation"
                        similarVideosCardviews="255"
                        similarVideosCardtimestamp="2 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Why many beginners find it easy to learn js ."
                        similarVideosCardChannelName="CleverProgrammer"
                        similarVideosCardviews="500K"
                        similarVideosCardtimestamp="3 months ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzF8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="SIMPLE JS PROJECTS TO WORK ON OVER THE WEEKEND."
                        similarVideosCardChannelName="JavascriptCommunity"
                        similarVideosCardviews="1M"
                        similarVideosCardtimestamp="8 days ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Best coding setup for maximum efficiency."
                        similarVideosCardChannelName="The crowns"
                        similarVideosCardviews="160"
                        similarVideosCardtimestamp="2 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Javascript frameworks that can be a game changer."
                        similarVideosCardChannelName="RandomQL"
                        similarVideosCardviews="450K"
                        similarVideosCardtimestamp="1 month ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2RpbmclMjBqYXZhc2NyaXB0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Some of the best vs code themes to use."
                        similarVideosCardChannelName="The Loner"
                        similarVideosCardviews="25"
                        similarVideosCardtimestamp="5 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1580894908361-967195033215?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="HOW TO WRITE CLEAN JAVASCRIPT CODE."
                        similarVideosCardChannelName="CleverProgrammer"
                        similarVideosCardviews="122K"
                        similarVideosCardtimestamp="20 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Best coding setup for maximum efficiency."
                        similarVideosCardChannelName="The crowns"
                        similarVideosCardviews="160"
                        similarVideosCardtimestamp="2 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Advantages of being a javascript pro in 2021."
                        similarVideosCardChannelName="PurpleNation"
                        similarVideosCardviews="255"
                        similarVideosCardtimestamp="2 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2RpbmclMjBqYXZhc2NyaXB0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Some of the best vs code themes to use."
                        similarVideosCardChannelName="The Loner"
                        similarVideosCardviews="25"
                        similarVideosCardtimestamp="5 hours ago"
                    />
                    <SimilarVideosCard
                        similarVideosCardVidSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvZGluZyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        similarVideosCardVidTitle="Why many beginners find it easy to learn js ."
                        similarVideosCardChannelName="CleverProgrammer"
                        similarVideosCardviews="500K"
                        similarVideosCardtimestamp="3 months ago"
                    />
                </div>
            </div>
        </div>
    );
}

export default SelectedVideoSection;
