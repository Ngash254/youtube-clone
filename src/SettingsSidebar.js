import React from "react";
import { Link } from "react-router-dom";
import "./SettingsSidebar.css";
import SettingsSidebarRow from "./SettingsSidebarRow";

function SettingsSidebar() {
    return (
        <div className="settingsSidebar">
            <h2>SETTINGS</h2>
            <Link
                to="/AccountSettings"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Account" />
            </Link>

            <Link
                to="/NotificationSettings"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Notifications" selected />
            </Link>

            <Link
                to="/Playback&Performance"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Playback and Performance" />
            </Link>

            <SettingsSidebarRow text="Privacy" />
            <SettingsSidebarRow text="Connected apps" />
            <SettingsSidebarRow text="Billing and payment" />
            <SettingsSidebarRow text="Advanced settings" />
        </div>
    );
}

export default SettingsSidebar;
