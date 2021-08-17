import React from "react";
import "./LikedVideos.css";
import LockIcon from "@material-ui/icons/Lock";
import { Avatar } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ShuffleIcon from "@material-ui/icons/Shuffle";

function LikedVideos() {
    return (
        <div className="likedVideos">
            <div className="lv__summary">
                <div className="lv__video__details">
                    <div className="lv__image">
                        <div className="play__all">
                            <PlayArrowIcon className="play-icon" />
                            <span>PLAY ALL</span>
                        </div>
                    </div>
                    <h2>Liked Videos</h2>
                    <div className="metadata">
                        <p className="number__of__videos">
                            <span>6</span>videos •
                        </p>
                        <p className="views">
                            <span>No</span>views •
                        </p>
                        <p className="date__updated">
                            Last updated on
                            <span className="time">Feb 7, 2021</span>
                        </p>
                    </div>
                    <div className="privacy">
                        <LockIcon className="lock-icon" />
                        <span>private</span>
                    </div>
                    <div className="more__actions">
                        <ShuffleIcon className="shuffle-icon" />
                    </div>
                </div>
                <div className="subscriber__infor">
                    <Avatar className="avatar-icon">
                        <span>S</span>
                    </Avatar>
                    <span className="subscriber__name">Samuel N. Wanyoike</span>
                </div>
            </div>
            <div className="lv__summary__two">
                <div className="lv__video__details">
                    <div className="lv__image">
                        <div className="play__all">
                            <PlayArrowIcon className="play-icon" />
                            <span>PLAY ALL</span>
                        </div>
                    </div>
                    <h2 className="bigger__title">Liked Videos</h2>
                    <div className="metadata">
                        <p className="number__of__videos">
                            <span>6</span>videos •
                        </p>
                        <p className="views">
                            <span>No</span>views •
                        </p>
                        <p className="date__updated">
                            Last updated on
                            <span className="time">Feb 7, 2021</span>
                        </p>
                    </div>
                    <div className="privacy">
                        <LockIcon className="lock-icon" />
                        <span>private</span>
                    </div>
                    <div className="more__actions">
                        <ShuffleIcon className="shuffle-icon" />
                    </div>
                </div>
                <div className="subscriber__infor">
                    <Avatar className="avatar-icon">
                        <span>S</span>
                    </Avatar>
                    <span className="subscriber__name">Samuel N. Wanyoike</span>
                </div>
            </div>
            <div className="likedVideos__actual__videos">
                <div className="lv__video__div row-1">
                    <span className="video__number">1</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-2">
                    <span className="video__number">2</span>

                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnzbu4nBW-Fned8VKqrPSu7QsB7J80Uf99g&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Simple javascript projects to do over the
                                weekend.
                            </span>
                            <span className="channel__title">The Maniac</span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-3">
                    <span className="video__number">3</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-4">
                    <span className="video__number">4</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-5">
                    <span className="video__number">5</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-6">
                    <span className="video__number">6</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="likedVideos__actual__videos__two">
                <div className="lv__video__div row-1">
                    <span className="video__number">1</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-2">
                    <span className="video__number">2</span>

                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnzbu4nBW-Fned8VKqrPSu7QsB7J80Uf99g&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Simple javascript projects to do over the
                                weekend.
                            </span>
                            <span className="channel__title">The Maniac</span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-3">
                    <span className="video__number">3</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-4">
                    <span className="video__number">4</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-5">
                    <span className="video__number">5</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lv__video__div row-6">
                    <span className="video__number">6</span>
                    <div className="likedVideos__videoCard">
                        <img
                            className="lv__vcard__img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW-5-db1fsdiSgTwugoHS1cViSdMS3xeilA&usqp=CAU"
                            alt=""
                        />
                        <div className="lv__vcard__details">
                            <span className="lv__video__title">
                                Fundamentals of Javascript
                            </span>
                            <span className="lv__channel__title">
                                Javascript community
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LikedVideos;
