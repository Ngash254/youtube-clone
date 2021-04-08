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

            <Link
                to="/PrivacySettings"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Privacy" />
            </Link>

            <Link
                to="/ConnectedApps"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Connected apps" />
            </Link>

            <Link
                to="/Billing&Payments"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Billing and payment" />
            </Link>

            <Link
                to="/AdvancedSettings"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Advanced settings" />
            </Link>
        </div>
    );
}

export default SettingsSidebar;
