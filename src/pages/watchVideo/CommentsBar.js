import React from "react";
import "./CommentsBar.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import moment from "moment";
import numeral from "numeral";
import ShowMore from 'react-show-more';
import { getCommentReplies } from "../../redux/actions/commentsAction";
import { useDispatch } from "react-redux";

function CommentsBar({
    avatarImage,
    userName,
    commentTimestamp,
    comment,
    commentLikes,
    id
}) {

    const dispatch = useDispatch();

    const getReplies = (val) => {
        dispatch(getCommentReplies(val));
    }

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
                    <span className="timestamp">{moment(commentTimestamp).fromNow()}</span>
                </div>
                <div className="comment__space">
                    <ShowMore
                        className="content-show-more"
                        lines={2}
                        expanded={false}
                        more="Show More"
                        less="Show Less"
                        anchorClass="show__more__comments__anchor"
                    >
                        <span className="user__comment">{comment}</span>
                    </ShowMore>
                </div>
                <div className="comments__section__icons">
                    <p>
                        <ThumbUpIcon className="thumbUp__icon" /> {numeral(commentLikes).format("0.a")}{" "}
                    </p>
                    <span>REPLY</span>
                </div>
                <div className="reply__section">
                    <ArrowDropDownIcon className="arrow__icon" />
                    <span onClick={() => getReplies(id)}>View all replies</span>
                </div>
            </div>
        </div>
    );
}

export default CommentsBar;
