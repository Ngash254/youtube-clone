import React from "react";
import "./WatchLater.css";
import LockIcon from "@material-ui/icons/Lock";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SortIcon from "@material-ui/icons/Sort";
import DragHandleIcon from "@material-ui/icons/DragHandle";

function WatchLater() {
    return (
        <div className="watchLater">
            <div className="summary">
                <div className="video__details">
                    <div className="image">
                        <div className="play__all">
                            <PlayArrowIcon className="play-icon" />
                            <span>PLAY ALL</span>
                        </div>
                    </div>
                    <h2>Watch later</h2>
                    <div className="metadata">
                        <p className="number__of__videos">
                            <span>2</span>videos •
                        </p>
                        <p className="views">
                            <span>No</span>views •
                        </p>
                        <p className="date__updated">
                            Updated<span className="time">yesterday</span>
                        </p>
                    </div>
                    <div className="privacy">
                        <LockIcon className="lock-icon" />
                        <span>private</span>
                    </div>
                    <div className="more__actions">
                        <ShuffleIcon className="shuffle-icon" />
                        <MoreHorizIcon className="more-icon" />
                    </div>
                </div>
                <div className="subscriber__infor">
                    <Avatar className="avatar-icon">
                        <span>S</span>
                    </Avatar>
                    <span className="subscriber__name">Samuel N. Wanyoike</span>
                </div>
            </div>
            <div className="summary__two">
                <div className="video__details">
                    <div className="image">
                        <div className="play__all">
                            <PlayArrowIcon className="play-icon" />
                            <span>PLAY ALL</span>
                        </div>
                    </div>
                    <h2>Watch later</h2>
                    <div className="metadata">
                        <p className="number__of__videos">
                            <span>2</span>videos •
                        </p>
                        <p className="views">
                            <span>No</span>views •
                        </p>
                        <p className="date__updated">
                            Updated<span className="time">yesterday</span>
                        </p>
                    </div>
                    <div className="privacy">
                        <LockIcon className="lock-icon" />
                        <span>private</span>
                    </div>
                    <div className="more__actions">
                        <ShuffleIcon className="shuffle-icon" />
                        <MoreHorizIcon className="more-icon" />
                    </div>
                </div>
                <div className="subscriber__infor">
                    <Avatar className="avatar-icon">
                        <span>S</span>
                    </Avatar>
                    <span className="subscriber__name">Samuel N. Wanyoike</span>
                </div>
            </div>
            <div className="watchLater__actual__videos">
                <div className="watch__later__header">
                    <SortIcon className="sort-icon" />
                    <span>SORT</span>
                </div>
                <div className="wt__video__div row-1">
                    <div className="draggingIconDiv">
                            <DragHandleIcon className="drag-icon" />
                    </div>
                    <div className="watchLater__videoCard">
                        <img
                            className="wt__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="wt__vcard__details">
                            <span className="wt__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="wt__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="wt__video__div row-2">
                    <div className="draggingIconDiv">
                        <DragHandleIcon className="drag-icon" />
                    </div>

                    <div className="watchLater__videoCard">
                        <img
                            className="wt__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnzbu4nBW-Fned8VKqrPSu7QsB7J80Uf99g&usqp=CAU"
                            alt=""
                        />
                        <div className="wt__vcard__details">
                            <span className="wt__video__title">
                                Simple javascript projects to do over the
                                weekend.
                            </span>
                            <span className="wt__channel__title">The Maniac</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="watchLater__actual__videos__two">
                <div className="watch__later__header">
                    <SortIcon className="sort-icon" />
                    <span>SORT</span>
                </div>
                <div className="wt__video__div row-1">
                    <DragHandleIcon className="drag-icon" />
                    <div className="watchLater__videoCard">
                        <img
                            className="wt__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="wt__vcard__details">
                            <span className="wt__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="wt__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="wt__video__div row-2">
                    <div className="draggingIconDiv">
                        <DragHandleIcon className="drag-icon" />
                    </div>

                    <div className="watchLater__videoCard">
                        <img
                            className="wt__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnzbu4nBW-Fned8VKqrPSu7QsB7J80Uf99g&usqp=CAU"
                            alt=""
                        />
                        <div className="wt__vcard__details">
                            <span className="wt__video__title">
                                Simple javascript projects to do over the
                                weekend.
                            </span>
                            <span className="wt__channel__title">The Maniac</span>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="wt__video__div row-2">
                    <div className="draggingIconDiv">
                        <DragHandleIcon className="drag-icon" />
                    </div>

                    <div className="watchLater__videoCard">
                        <img
                            className="wt__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnzbu4nBW-Fned8VKqrPSu7QsB7J80Uf99g&usqp=CAU"
                            alt=""
                        />
                        <div className="wt__vcard__details">
                            <span className="wt__video__title">
                                Simple javascript projects to do over the
                                weekend.
                            </span>
                            <span className="wt__channel__title">The Maniac</span>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}

export default WatchLater;
