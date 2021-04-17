import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideoGameAssetIcon from "@material-ui/icons/VideogameAsset";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsIcon from "@material-ui/icons/Settings";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Avatar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    {
        /*const acStyle = {
        backgroundColor: "blue",
    };*/
    }

    return (
        <div className="sidebar">
            <div className="sidebar__rows">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <SidebarRow selected Icon={HomeIcon} text="Home" />
                </Link>

                <Link
                    to="/Explore"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={ExploreIcon} text="Explore" />
                </Link>

                <Link
                    to="/Subscriptions"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={SubscriptionsIcon} text="Subscriptions" />
                </Link>

                {/*<NavLink to="" activeClassName="active_sidebar_row">
                    <SidebarRow Icon={HomeIcon} text="Home" />
                </NavLink>

                <NavLink to="/Explore" activeClassName="active_sidebar_row">
                    <SidebarRow Icon={ExploreIcon} text="Explore" />
                </NavLink>*/}
            </div>

            <div className="sidebar__rows">
                <Link
                    to="/Library"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={VideoLibraryIcon} text="Library" />
                </Link>

                <Link
                    to="/History"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={HistoryIcon} text="History" />
                </Link>

                <Link
                    to="/YourVideos"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={OndemandVideoIcon} text="Your videos" />
                </Link>

                <Link
                    to="/WatchLater"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={WatchLaterIcon} text="Watch later" />
                </Link>

                <Link
                    to="/LikedVideos"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={ThumbUpIcon} text="Liked Videos" />
                </Link>

                <SidebarRow Icon={ExpandMoreIcon} text="Show more" />
            </div>

            <div className="sidebar__rows">
                <h3 className="sidebar__title">SUBSCRIPTIONS</h3>

                <Link
                    to="/Channel"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={Avatar} text="The Net Ninja" />
                </Link>

                <SidebarRow Icon={Avatar} text="Tech With Tim" />
                <SidebarRow Icon={Avatar} text="NealGuides" />

                <SidebarRow Icon={ExpandMoreIcon} text="Show more" />
            </div>

            <div className="sidebar__rows">
                <h3 className="sidebar__title">MORE FROM YOUTUBE</h3>
                <SidebarRow Icon={VideoGameAssetIcon} text="Gaming" />
                <SidebarRow Icon={LiveTvIcon} text="Live" />
            </div>

            <div className="sidebar__rows">
                <Link
                    to="/Settings"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={SettingsIcon} text="Settings" />
                </Link>

                <Link
                    to="/YourVideos"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={ReportIcon} text="Report history" />
                </Link>
                <Link
                    to="/YourVideos"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={HelpIcon} text="Help" />
                </Link>
                <Link
                    to="/YourVideos"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SidebarRow Icon={FeedbackIcon} text="Send feedback" />
                </Link>
            </div>

            <div className="youtube__links one">
                <a href="nowhere">About</a>
                <a href="nowhere">Press</a>
                <a href="nowhere">Copyright</a>
                <a href="nowhere">Contact us</a>
                <a href="nowhere">Creators</a>
                <a href="nowhere">Advertise</a>
                <a href="nowhere">Developers</a>
            </div>

            <div className="youtube__links two">
                <a href="stillNowhere">Terms</a>
                <a href="stillNowhere">Privacy</a>
                <a href="stillNowhere">Policy and safety</a>
                <a href="stillNowhere">How YouTube works</a>
                <a href="stillNowhere">Test new features</a>
            </div>

            <p className="certification">©2020 No Rights. Just a dummy app</p>
        </div>
    );
}

export default Sidebar;
