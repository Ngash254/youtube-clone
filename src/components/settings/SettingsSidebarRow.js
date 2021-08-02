import React from "react";
import "./SettingsSidebarRow.css";

function SettingsSidebarRow({ text, selected }) {
    return (
        <div className={`settingsSidebarRow ${selected && "selected"}`}>
            {text}
        </div>
    );
}

export default SettingsSidebarRow;
