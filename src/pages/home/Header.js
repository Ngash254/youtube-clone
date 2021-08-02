import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineSearch } from "react-icons/ai";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    const [input, setInput] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon className="menu__bars" />
                </IconButton>

                <Link to="/">
                    <img
                        className="youtube__logo"
                        title="Home Page"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__center__wrap__div">
                <div className="header__center">
                    <form action="search">
                        <input
                            type="text"
                            placeholder="Search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Link to={`/search/${input}`}>
                            <button className="submit__button">Send</button>
                        </Link>
                    </form>

                    <Link to={`/search/${input}`} title="Search">
                        <AiOutlineSearch className="search__icon" />
                    </Link>
                </div>

                <div className="mic__button">
                    <IconButton
                        className="micIcon__button"
                        title="Search with your voice"
                    >
                        <MicIcon className="mic__icon" />
                    </IconButton>
                </div>
            </div>

            <div className="header__right">
                <div className="header__right__other">
                    <IconButton title="Create">
                        <VideoCallIcon className="header__icon" />
                    </IconButton>

                    <IconButton title="Youtube apps">
                        <AppsIcon className="header__icon" />
                    </IconButton>

                    <IconButton title="Notifications">
                        <NotificationsIcon className="header__icon" />
                    </IconButton>
                </div>

                <div className="header__right__avt">
                    <div className="user__account__avatar">S</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
