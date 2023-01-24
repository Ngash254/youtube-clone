import React from "react";
import "./PrivacySettings.css";
import { Avatar } from "@material-ui/core";

function PrivacySettings() {
    return (
        <div className="privacySettings">
            <div className="privacy__div">
                <h2 className="title1">Privacy</h2>
                <div className="privacy__sub__div">
                    <div className="privacy__sub__div__text">
                        <h2>Manage what you share on YouTube.</h2>
                        <h4>
                            Choose who can see your saved playlists and
                            subscriptions
                        </h4>
                        <h4>
                            {/*eslint-disable-next-line*/}
                            Review <a href="#">YouTube Terms of Service</a> and{" "}
                            {/*eslint-disable-next-line*/}
                            <a href="#">Google Privacy Policy</a>
                        </h4>
                    </div>
                    <div className="privacy__sub__div__avatar">
                        <Avatar
                            className="notifications__sub__div__avatarImg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmnV-qMD2ldLt85_-oBBuBPnAhGlwjtukwQ&usqp=CAU"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="privacy__div">
                <div className="privacy__sub__div2">
                    <h3>Playlists and subscriptions</h3>
                    <div className="privacy__sub__div__subscriptions">
                        <div className="privacy__subscriptions__sub__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="subscriptions__sub__div">
                                <span className="preference-heading">
                                    Keep all my saved playlists private.
                                </span>
                                <p>
                                    Playlists created by others won’t appear on
                                    your channel. Playlists created by you have
                                    separate, individual privacy settings.{" "}
                                    <a href="./tt">Learn more</a>
                                </p>
                            </div>
                        </div>
                        <div className="privacy__subscriptions__sub__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="subscriptions__sub__div">
                                <span className="subscriptions-heading">
                                    Keep all my subscriptions private.
                                </span>
                                <p>
                                    Your subscriptions won't be visible to
                                    others. <a href="/ss">Learn more</a> about
                                    what could make your subscriptions visible
                                    or manage your subscriptions{" "}
                                    <a href="/kkk">here</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="privacy__sub__div2">
                    <h3>Adds on YouTube</h3>
                    <div className="privacy__sub__div__subscriptions">
                        <p>
                            You may see ads on YouTube based on general factors,
                            like the topic of a video. The ads you see may also
                            depend on your <a href="kk">Google Ads Settings</a>.
                            To learn more about how ads work for family accounts
                            with kids, visit the{" "}
                            <a href="kk">Google for Families Help Center</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacySettings;
