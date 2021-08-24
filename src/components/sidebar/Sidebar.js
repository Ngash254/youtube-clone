import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VideoGameAssetIcon from "@material-ui/icons/VideogameAsset";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsIcon from "@material-ui/icons/Settings";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { NavLink } from "react-router-dom";

const SideBarDataGrp1 = [
    { icon: <HomeIcon />, text: "Home", path: "/" },
    { icon: <ExploreIcon />, text: "Explore", path: "/Explore" },
    {
        icon: <SubscriptionsIcon />,
        text: "Subscriptions",
        path: "/Subscriptions",
    },
    { icon: <VideoLibraryIcon />, text: "Library", path: "/Library" },
];


const SideBarDataGrp2 = [
    { icon: <HistoryIcon />, text: "History", path: "/History" },
    { icon: <OndemandVideoIcon />, text: "Your videos", path: "/YourVideos" },
    { icon: <WatchLaterIcon />, text: "Watch later", path: "/WatchLater" },
    { icon: <ThumbUpIcon />, text: "Liked videos", path: "/LikedVideos" },
];

const SideBarDataGrp3 = [
    { icon: <VideoGameAssetIcon />, text: "Gaming", path: "/YourVideos" },
    { icon: <LiveTvIcon />, text: "Live", path: "/YourVideos" },
];

const SideBarDataGrp4 = [
    { icon: <SettingsIcon />, text: "Settings", path: "/Settings" },
    { icon: <ReportIcon />, text: "Report history", path: "/YourVideos" },
    { icon: <HelpIcon />, text: "Help", path: "/YourVideos" },
    { icon: <FeedbackIcon />, text: "Send feedback", path: "/YourVideos" },
];

function Sidebar({sidebar, toggleSidebar}) {
    

    return (
        <div 
            className={
                (sidebar ? "sidebar-mini" : "sidebar") 
            }
            onClick={() => toggleSidebar()}
        >
            <div className="sidebar__rows rows-one">
                {SideBarDataGrp1.map((arr, index) => (
                    <li className="sidebar__items" title={arr.text}>
                        <NavLink
                            exact
                            to={arr.path}
                            activeClassName="sidebarRow__selected"
                            key={index}
                        >
                            <span className="row__icon">{arr.icon}</span>
                            <span className="row__title">{arr.text}</span>
                        </NavLink>
                    </li>
                ))}
            </div>

            <div className="sidebar__rows rows-two">
                {SideBarDataGrp2.map((arr, index) => (
                    <li className="sidebar__items" title={arr.text}>
                        <NavLink
                            exact
                            to={arr.path}
                            activeClassName="sidebarRow__selected"
                            key={index}
                        >
                            <span className="row__icon">{arr.icon}</span>
                            <span className="row__title">{arr.text}</span>
                        </NavLink>
                    </li>
                ))}
            </div>

            <div className="sidebar__rows rows-two">
                <h3 className="sidebar__title">MORE FROM YOUTUBE</h3>
                {SideBarDataGrp3.map((arr, index) => (
                    <li className="sidebar__items" title={arr.text}>
                        <NavLink
                            exact
                            to={arr.path}
                            activeClassName="sidebarRow__selected"
                            key={index}
                        >
                            <span className="row__icon">{arr.icon}</span>
                            <span className="row__title">{arr.text}</span>
                        </NavLink>
                    </li>
                ))}
            </div>

            <div className="sidebar__rows rows-two">
                {SideBarDataGrp4.map((arr, index) => (
                    <li className="sidebar__items" title={arr.text}>
                        <NavLink
                            exact
                            to={arr.path}
                            activeClassName="sidebarRow__selected"
                            key={index}
                        >
                            <span className="row__icon">{arr.icon}</span>
                            <span className="row__title">{arr.text}</span>
                        </NavLink>
                    </li>
                ))}
            </div>

            <div className="youtube__links one">
                <a href="https://www.youtube.com/about/">About</a>
                <a href="https://blog.youtube/press/">Press</a>
                <a href="https://www.youtube.com/howyoutubeworks/policies/copyright/">
                    Copyright
                </a>
                <a href="https://www.youtube.com/t/contact_us/">Contact us</a>
                <a href="https://www.youtube.com/creators/">Creators</a>
                <a href="https://www.youtube.com/ads/">Advertise</a>
                <a href="https://developers.google.com/youtube">Developers</a>
            </div>

            <div className="youtube__links two">
                <a href="nowhere">Terms</a>
                <a href="stillNowhere">Privacy</a>
                <a href="stillNowhere">Policy and safety</a>
                <a href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
                    How YouTube works
                </a>
                <a href="https://www.youtube.com/new">Test new features</a>
            </div>

            <p className="certification">©2021 No Rights. Just a dummy app</p>
        </div>
    );
}

export default Sidebar;
