import React from "react";
import "./CommentsBar.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function CommentsBar({
    avatarImage,
    userName,
    commentTimestamp,
    comment,
    commentLikes,
    commentDislikes,
}) {
    return (
        <div className="CommentsBar">
            <div className="userAvatar">
                <Avatar
                    className="comments__avatar"
                    src={avatarImage}
                    alt="A"
                />
            </div>
            <div className="comments__details">
                <div className="name__and__timestamp">
                    <span className="user__name">{userName}</span>
                    <span className="timestamp">{commentTimestamp}</span>
                </div>
                <div className="comment__space">
                    <span className="user__comment">{comment}</span>
                </div>
                <div className="comments__section__icons">
                    <p>
                        <ThumbUpIcon className="thumbUp__icon" /> {commentLikes}{" "}
                    </p>
                    <p>
                        <ThumbDownIcon className="thumbDown__icon" />{" "}
                        {commentDislikes}{" "}
                    </p>
                    <span>REPLY</span>
                </div>
                <div className="reply__section">
                    <ArrowDropDownIcon className="arrow__icon" />
                    <span>View all replies</span>
                </div>
            </div>
        </div>
    );
}

export default CommentsBar;
