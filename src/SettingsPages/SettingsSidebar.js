import React from "react";
import { Link } from "react-router-dom";
import "./SettingsSidebar.css";
import SettingsSidebarRow from "./SettingsSidebarRow";
import { NavLink } from "react-router-dom";

function SettingsSidebar() {
    return (
        <div className="settingsSidebar">
            <h2>SETTINGS</h2>
            <NavLink
                to="/AccountSettings"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Account" />
            </NavLink>

            <NavLink
                to="/NotificationSettings"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Notifications" />
            </NavLink>

            <NavLink
                to="/Playback&Performance"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Playback and Performance" />
            </NavLink>

            <NavLink
                to="/PrivacySettings"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Privacy" />
            </NavLink>

            <NavLink
                to="/ConnectedApps"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Connected apps" />
            </NavLink>

            <NavLink
                to="/Billing&Payments"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Billing and payment" />
            </NavLink>

            <NavLink
                to="/AdvancedSettings"
                activeClassName="current__set__bar"
                style={{ textDecoration: "none", color: "black" }}
            >
                <SettingsSidebarRow text="Advanced settings" />
            </NavLink>
        </div>
    );
}

export default SettingsSidebar;
