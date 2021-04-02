import React from 'react';
import "./SidebarRow.css"

function SidebarRow({
    selected,
    Icon,
    text
}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>

            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{text}</h2>
        </div>
    )
}

export default SidebarRow;
