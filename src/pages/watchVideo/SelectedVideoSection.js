import React, { useState, useEffect } from "react";
import "./SelectedVideoSection.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import CommentsBar from "./CommentsBar";
import SimilarVideosCard from "../../Components/watchVideo/SimilarVideosCard";
import MinorTabsList from "../../Components/tabsList/MinorTabsList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarVideos, getVideoById } from "../../redux/actions/videosAction";
import moment from "moment";
import numeral from "numeral";
import { checkUserSubscriptionStatus, getChannelDetails } from "../../redux/actions/channelAction";
import ShowMore from 'react-show-more';
import { getCommentThreads, insertComment } from "../../redux/actions/commentsAction";


function SelectedVideoSection() {
    
    //initial comment state;
    const [commentText, setCommentText] = useState("");

    const {id} = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getCommentThreads(id))
    }, [dispatch, id]);

    const { 
        video, loading 
    } = useSelector(state => state.selectedVideo);

    const { 
        publishedAt, 
        description, 
        channelTitle, 
        channelId 
    } = video ? video.snippet : {};
    
    const { 
        viewCount, 
        likeCount, 
        commentCount
    } = video ? video.statistics : {};

    const { 
        snippet: channelSnippet, 
        statistics: channelStatistics 
    } = useSelector(state=>state.channelDetails);

    useEffect(() => {
        dispatch(getChannelDetails(channelId));
        dispatch(checkUserSubscriptionStatus(channelId));
    }, [dispatch, channelId]);

    const subscriptionStatus = useSelector(
            state=>state.channelDetails.subscriptionStatus
        );

    const commentsArray = useSelector(
        state=>state.comments.commentsArray
    );

    const commentItem = commentsArray?.map(
        item => item.snippet.topLevelComment.snippet
    )

    //submit function on the add comment section
    const handleCommentFormSubmission = (e) => {
        e.preventDefault();
        if (commentText.length === 0) return;
        dispatch(insertComment(id, commentText))
        setCommentText("");
    }

    //dispatch similar videos action and all activities involved

    useEffect(() => {
        dispatch(getSimilarVideos(id));
    }, [dispatch, id]);

    const { 
        videos: similarVideos,
        loading: similarVideosLoading
    } = useSelector(state => state.similarVideos);

    
    return (
        
        <div className="SelectedVideoSection">
        
            <div className="video__and__comments">
                <div className="video__box">
                    <iframe 
                        allowFullScreen
                        title="."
                        src={`https://www.youtube.com/embed/${id}`}
                        style={{height: "100%", width: "101%", border: "none"}}
                    />
                    
                </div>

                <div className="selected__video__title__div">
                    <span className="selected__vid__title">{video?.snippet.title}</span>
                </div>
                {!loading ? 
                    <div className="video__stats">
                        <div className="video__views__and__timestamp">
                            <span>
                                {numeral(viewCount).format("0.a")} views • {moment(publishedAt).fromNow()}
                            </span>
                        </div>
                        <div className="video__views__and__timestamp__short">
                            <span>
                                {numeral(viewCount).format("0.a")} <span className="word__views">views</span>
                            </span>
                        </div>
                        <div className="video__user__actions">
                            <p>
                                <ThumbUpIcon className="mat__icon" />{" "}
                                <span>{numeral(likeCount).format("0.a")}</span>
                            </p>
                            <p>
                                <ScreenShareIcon className="mat__icon" />{" "}
                                <span>SHARE</span>
                            </p>
                            <p>
                                <SaveAltIcon className="mat__icon" />{" "}
                                <span>SAVE</span>
                            </p>
                            <MoreHorizIcon className="more__horiz__icon" />
                        </div>
                    </div>
                : ""}
                <div className="channel__infor">
                    <div className="channel__avatar__div">
                        <Avatar
                            className="channel__avatar"
                            src={channelSnippet?.thumbnails?.default?.url}
                            
                            alt=""
                        />
                    </div>
                    <div className="channel__and__video__details">
                        <div className="channel__and__video__details__top">
                            <div className="channel__details">
                                <span>{channelTitle ? channelTitle : ""}</span>
                                
                                <h6>{numeral(channelStatistics?.subscriberCount).format("0.a")} subscribers</h6>
                            </div>
                            <div className="sub__note__buttons">
                                <Button
                                    variant="contained"
                                    className={subscriptionStatus
                                        ? "subscription__button button__subscribed"
                                        : "subscription__button"
                                    }
                                >
                                    {subscriptionStatus ? "SUBSCRIBED" : "SUBSCRIBE"}
                                </Button>
                            </div>
                        </div>

                        <div className="channel__and__video__details__bottom">
                            <p className="video__description">
                            
                                <ShowMore
                                    className="content-show-more"
                                    lines={3}
                                    expanded={false}
                                    more="SHOW MORE"
                                    less="SHOW LESS"
                                    anchorClass="show__more__anchor"
                                >
                                    {!loading ? description : "no-description"}
                                </ShowMore>
                                
                                
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div className="adds__and__similarVideos__two">
                    <div className="similarVideos">
                        <div className="sec-tablist-div">
                            <MinorTabsList className="tabslist0"/>
                        </div>

                        {!similarVideosLoading && 
                            similarVideos?.filter(item => item.id.videoId)
                                .map((item) => (
                                    
                                    <SimilarVideosCard
                                        video={item}
                                        key={item.id ? item.id : item.id.videoId}
                                    />
                                    
                        ))}
                    </div>
                </div>

                <div className="comments__section">
                    <div className="comments__header">
                        <h3 className="number__of__comments">
                            {!loading ? numeral(commentCount).format("0.a") : 0} Comments
                        </h3>
                        <div className="sort__div">
                            <SortIcon />
                            <span>SORT BY</span>
                        </div>
                    </div>
                    <div className="add__comment">
                        <Avatar className="user__avatar__comments">S</Avatar>
                        <div className="add__comment__form">
                            {/*<div className="form">
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
                                </div>*/}
                            <form onSubmit={handleCommentFormSubmission}>
                                <div className="form">
                                    <input
                                        type="text"
                                        placeholder="Add a public comment..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                </div>
                                <div className="form__submission__actions">
                                    <h4>CANCEL</h4>
                                    <Button type="submit" variant="contained">COMMENT</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="posted__comments">
                        {commentItem?.map((item, index) => (
                            <CommentsBar
                                avatarImage={item.authorProfileImageUrl}
                                userName={item.authorDisplayName}
                                commentTimestamp={item.publishedAt}
                                comment={item.textDisplay}
                                commentLikes={item.likeCount}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                
            </div>

            
            <div className="adds__and__similarVideos">
                <div className="similarVideos">
                    <div className="sec-tablist-div">
                        <MinorTabsList />
                    </div>

                    {!similarVideosLoading && 
                        similarVideos?.filter(item => item.id.videoId)
                            .map((item) => (
                                
                                
                                <SimilarVideosCard
                                    video={item}
                                    key={item.id ? item.id : item.id.videoId}
                                />
                                
                    ))}
                </div>
            </div>
        
        </div>
        
    );
}

export default SelectedVideoSection;
