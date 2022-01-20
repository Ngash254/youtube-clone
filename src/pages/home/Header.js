import React, { useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineSearch } from "react-icons/ai";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getVideosByUserSearchInput } from "../../redux/actions/videosAction";


function Header({toggleSidebar}) {
    const [input, setInput] = useState("");

    const [mainHeader, setMainHeader] = useState(true);
    const hideMainHeader = () => setMainHeader(!mainHeader);

    //to grab a user's photourl
    //destruscture the userProfile property with the name and photoUrl
    //const { userProfile } = useSelector(state => state.auth)
    //for some reason on refresh, the above line doesnt work
    const userProfile = JSON.parse(sessionStorage.getItem("yt-userData"));

    //code to trigger the getVideosByUserSearchInput action creator 
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUserSearchInput = (e) => {
        e.preventDefault();
        //check the length of the input so as not to be 0
        if (input.length === 0) return;
        dispatch(getVideosByUserSearchInput(input));
        //redirect user to the search page
        history.push(`/search/${input}`);
    }
    

    return (
        <div className="header">
            <div className={mainHeader ? "header__left" : "header__left absent"}>
                <IconButton className="menubars__button" onClick={() => toggleSidebar()}>
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

            <div className={mainHeader ? "header__center__wrap__div" : "header__center__wrap__div absent"}>
                <div className="header__center">
                    <form action="search" onSubmit={handleUserSearchInput}>
                        <input
                        id="user-input"
                            type="text"
                            placeholder="Search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        {/*<Link to={`/search/${input}`}>
                            <button className="submit__button">Send</button>
    </Link>*/}
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

            <div className={mainHeader ? "header__center__second" : "header__center__second absent"}>
                <AiOutlineSearch 
                    className="search__icon__two" 
                    onClick={() => { hideMainHeader(); toggleSidebar()}}
                />
                    <IconButton
                        className="micIcon__button"
                        title="Search with your voice"
                    >
                        <MicIcon className="mic__icon__two" />
                    </IconButton>
            </div>

            <div className={mainHeader ? "minor__header absent" : "minor__header"}>
                <ArrowBackIcon 
                    className="arrow-back-icon"
                    onClick={hideMainHeader}
                />
                <div className="minor__header__right">
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
                        <AiOutlineSearch className="minor__header-search-icon" />
                    </Link>
                </div>
            </div>

            <div className={mainHeader ? "header__right" : "header__right absent"}>
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
                {/* To add a user's photourl. 
                    If the user has no photo, first character of their name will be used 
                */}
                    {userProfile
                        ? <img src={userProfile.photoUrl} alt="" className="user__profile__photo" /> 
                        : <div className="user__account__avatar">R</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
