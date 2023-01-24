import React from "react";
import "./NotificationSettings.css";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function NotificationSettings() {
    const work = () => {
        const selected = document.querySelector(".dp-menu");

        const selectedLanguage = document.querySelector(".selected-language");
        const optionsContainer = document.querySelector(".options__container");

        const optionsList = document.querySelectorAll(".option");

        const arrowIconUp = document.querySelector(".arrowIcon-up");
        const arrowIconDown = document.querySelector(".arrowIcon-down");

        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
            arrowIconDown.classList.toggle("off");
            arrowIconUp.classList.toggle("off");
        });

        optionsList.forEach((o) => {
            o.addEventListener("click", () => {
                selectedLanguage.innerHTML = o.querySelector(
                    ".opt-label"
                ).innerHTML;
                optionsContainer.classList.remove("active");
                arrowIconDown.classList.remove("off");
                arrowIconUp.classList.add("off");
            });
        });
    };
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
                                    {/*eslint-disable-next-line*/}
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
                    {/*eslint-disable-next-line*/}
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
                    <div className="form__container">
                        <span className="some__guideline">
                            This setting applies to emails only.
                        </span>
                        <div className="select__box">
                            <span className="email-label">Email language</span>
                            <div className="selection__div">
                                <div className="user__choice" id="user-choice">
                                    <span
                                        className="dp-menu selected-language"
                                        onClick={work}
                                    >
                                        Selected language
                                    </span>

                                    <ArrowDropDownIcon
                                        className="dp-menu arrowIcon-down"
                                        onClick={work}
                                    />
                                    <ArrowDropUpIcon
                                        className="dp-menu arrowIcon-up off"
                                        onClick={work}
                                    />
                                </div>
                                <div className="options__container">
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="afrikaans"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Afrikaans"
                                            className="opt-label"
                                        >
                                            Afrikaans
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Azerbaycan"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Azerbaycan"
                                            className="opt-label"
                                        >
                                            Azerbaycan
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="afrikaans"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Afrikaans"
                                            className="opt-label"
                                        >
                                            Afrikaans
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Bahasa"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Bahasa"
                                            className="opt-label"
                                        >
                                            Bahasa
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Bosanki"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Bosanki"
                                            className="opt-label"
                                        >
                                            Bosanki
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Catala"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Catala"
                                            className="opt-label"
                                        >
                                            Catala
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="English(UK)"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="English(UK)"
                                            className="opt-label"
                                        >
                                            English(UK)
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="English(US)"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="English(US)"
                                            className="opt-label"
                                        >
                                            English(US)
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="French"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="French"
                                            className="opt-label"
                                        >
                                            French
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Italian"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Italian"
                                            className="opt-label"
                                        >
                                            Italian
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            className="radio"
                                            id="Portuguese"
                                            name="language"
                                        />
                                        <label
                                            htmlfor="Portuguese"
                                            className="opt-label"
                                        >
                                            Portuguese
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="language__form">
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
    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default NotificationSettings;
