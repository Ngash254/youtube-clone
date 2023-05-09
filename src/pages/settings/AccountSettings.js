import React from "react";
import "./AccountSettings.css";
import { Avatar } from "@material-ui/core";

function AccountSettings() {
    const userProfile = JSON.parse(sessionStorage.getItem("yt-userData"));

    return (
        <div className="accountSettings">
            <div className="acc__div one">
                <h2 className="title1">Account</h2>
                <div className="acc__sub__div">
                    <div className="acc__sub__div__text">
                        <h2>
                            Choose how you appear and what you see on youtube.
                        </h2>
                        <h4>
                            Signed in as{" "}
                            {userProfile ? (
                                <b id="user-email">{userProfile.name}.</b>
                            ) : (
                                <span>user@email.com</span>
                            )}
                        </h4>
                    </div>
                    <div className="acc__sub__div__avatar">
                        <Avatar
                            className="acc__sub__div__avatarImg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="acc__div second">
                <h2 className="title2">Your youtube channel.</h2>
                <h4 className="subtitle2">
                    This is your public presence on YouTube. You need a channel
                    to upload your own videos, comment on videos, or create
                    playlists.
                </h4>
                <div className="acc__sub__div2">
                    <h3>Your channel</h3>
                    <div className="acc__sub__div2__channel">
                        <div className="avatar2__div">
                            <Avatar className="acc__sub__div2__avatar">
                                <span>S</span>
                            </Avatar>
                            {userProfile ? (
                                <h4 id="user-email">{userProfile.name}.</h4>
                            ) : (
                                <span>username</span>
                            )}
                        </div>
                        <span className="channel__acts">
                            Channel status and features.
                        </span>
                        <span className="channel__acts">
                            Create a new channel.
                        </span>
                        <span className="channel__acts">
                            View advanced settings.
                        </span>
                    </div>
                </div>
            </div>
            <div className="acc__div last">
                <h2 className="title3">Your account.</h2>
                <h4 className="subtitle3">
                    You sign in to youtube with your google account.
                </h4>
                <div className="acc__sub__div3">
                    <h3>Google Account</h3>
                    <div className="acc__sub__div3__googleAccount">
                        <span className="google__account__acts">
                            View or change your google account settings.
                        </span>
                        <h4>
                            You will be redirected to your Google Account Page.
                        </h4>
                    </div>
                </div>
                <div className="acc__sub__div3">
                    <h3>Membership</h3>
                    <div className="acc__sub__div3__googleAccount">
                        <span className="google__account__acts">
                            <p>No membership |</p> Get YouTube Premium.
                        </span>
                        <h4>
                            YouTube Premium offers uninterrupted music, ad-free
                            videos, and more.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
