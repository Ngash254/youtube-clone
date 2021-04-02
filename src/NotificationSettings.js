import React from "react";
import "./NotificationSettings.css";
import { Avatar } from "@material-ui/core";

function NotificationSettings() {
    return (
        <div className="notificationSettings">
            <div className="notifications__div">
                <h2 className="title1">Notifications</h2>
                <div className="notifications__sub__div">
                    <div className="notifications__sub__div__text">
                        <h2>Choose when and how to be notified.</h2>
                        <h4>
                            Select push and email notifications you'd like to
                            receive.
                        </h4>
                    </div>
                    <div className="notifications__sub__div__avatar">
                        <Avatar
                            className="notifications__sub__div__avatarImg"
                            src="https://image.freepik.com/free-vector/woman-call-center_92863-88.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="notifications__div">
                <h2 className="title2">General</h2>
                <h3 className="subtitle2">
                    Manage your desktop and mobile notifications.
                </h3>
                <div className="notifications__sub__div2">
                    <h3>Your preferences</h3>
                    <div className="notifications__sub__div__preference">
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Subscriptions
                                </span>
                                <p>
                                    Notify me about activity from the{" "}
                                    <a href="#">channels am subscribed to</a>
                                </p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Recommended videos
                                </span>
                                <p>
                                    Notify me on videos I might like based on
                                    what I watch
                                </p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Activity on my Channel
                                </span>
                                <p>
                                    Notify me about comments and other
                                    activities on my channel or videos
                                </p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Activity on my comments
                                </span>
                                <p>
                                    Notify me about activity on my comments on
                                    others' videos
                                </p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Replies to my comments
                                </span>
                                <p>Notify me about replies to my comments</p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Mentions
                                </span>
                                <p>Notify me when others mention my channels</p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="preference__sub__div">
                                <span className="preference-heading">
                                    Shared content
                                </span>
                                <p>
                                    Notify me when others share my content on
                                    their channels
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notifications__div">
                <h2 className="title3">Email Notifications</h2>
                <h3 className="subtitle3">
                    Your emails are sent to{" "}
                    <span>samuelnganga.w@gmail.com</span>. To unsubscribe from
                    an email, click the "Unsubscribe" link at the bottom of it.
                    <a href="#">Learn more</a> about emails from YouTube.
                </h3>
                <div className="notifications__sub__div3">
                    <h3>Permission</h3>
                    <div className="notifications__sub__div__permission">
                        <div className="permission__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="permission__sub__div">
                                <span className="preference-heading">
                                    Send me emails about my YouTube activity and
                                    updates I requested.
                                </span>
                                <p>
                                    If this setting is turned off, YouTube may
                                    still send you messages regarding your
                                    account, required service announcements,
                                    legal notifications, and privacy matters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notifications__sub__div3">
                    <h3>Your preferences</h3>
                    <div className="notifications__sub__div__preference">
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="permission__sub__div">
                                <span className="preference-heading">
                                    General product updates.
                                </span>
                                <p>Announcements and recommendations.</p>
                            </div>
                        </div>
                        <div className="preference__div">
                            <div className="switch__div">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="switch__btn"></div>
                                </label>
                            </div>
                            <div className="permission__sub__div">
                                <span className="preference-heading">
                                    Creator updates and announcements.
                                </span>
                                <p>
                                    Product announcements, creator events, and
                                    personalized tips to grow your YouTube
                                    channel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notifications__sub__div3">
                    <h3>Language</h3>
                    <div className="language__form">
                        <form action="language">
                            <label htmlFor="language">Email language</label>
                            <select name="language">
                                <option value="English">English(US)</option>
                                <option value="English">English(UK)</option>
                                <option value="German">German</option>
                                <option value="French">French</option>
                                <option value="Italian">Italian</option>
                                <option value="Bahasa Indonesia">
                                    Bahasa Indonesia
                                </option>
                                <option value="Bahasa Malaysia">
                                    Bahasa Malaysia
                                </option>
                                <option value="Afrikaans">Afrikaans</option>
                                <option value="Dansk">Dansk</option>
                                <option value="Portuguese">Portuguese</option>
                            </select>
                        </form>
                        <span>This setting applies to emails only.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationSettings;
