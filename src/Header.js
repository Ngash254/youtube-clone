import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    const [input, setInput] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <Link to="/">
                    <img
                        className="youtube__logo"
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

                    <Link to={`/search/${input}`}>
                        <SearchIcon className="search__icon" />
                    </Link>
                </div>

                <div className="mic__button">
                    <IconButton className="micIcon__button">
                        <MicIcon className="mic__icon" />
                    </IconButton>
                </div>
            </div>

            <div className="header__right">
                <IconButton>
                    <VideoCallIcon className="header__icon" />
                </IconButton>

                <IconButton>
                    <AppsIcon className="header__icon" />
                </IconButton>

                <IconButton>
                    <NotificationsIcon className="header__icon" />
                </IconButton>

                <Avatar className="user__account__avatar">S</Avatar>
            </div>
        </div>
    );
}

export default Header;
