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

            <SettingsSidebarRow text="Playback and Performance" />
            <SettingsSidebarRow text="Privacy" />
            <SettingsSidebarRow text="Connected apps" />
            <SettingsSidebarRow text="Billing and payment" />
            <SettingsSidebarRow text="Advanced settings" />
        </div>
    );
}

export default SettingsSidebar;
