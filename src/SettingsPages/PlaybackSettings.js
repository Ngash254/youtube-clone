import React from "react";
import "./PlaybackSettings.css";
import { Avatar } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

function PlaybackSettings() {
    return (
        <div className="playbackSettings">
            <div className="playback__div">
                <h2 className="title1">Playback and performance</h2>
                <div className="playback__sub__div">
                    <div className="playback__sub__div__text">
                        <h2>Control your video viewing experience.</h2>
                        <h4>Playback settings apply to this browser only.</h4>
                    </div>
                    <div className="playback__sub__div__avatar">
                        <Avatar
                            className="playback__sub__div__avatarImg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9T49aCmVvD8UhGtzpNzlLyKmG5vWlsYcvw&usqp=CAU"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="playback__div">
                <div className="playback__sub__div2">
                    <h3>Info cards</h3>
                    <div className="checkbox__div">
                        <input type="checkbox" />
                        <span>Show in-video info cards</span>
                        <HelpIcon className="help-icon" />
                    </div>
                </div>
                <div className="playback__sub__div2">
                    <h3>Subtitles and Closed Captions</h3>
                    <div className="checkbox__div">
                        <input type="checkbox" />
                        <span>Always show captions</span>
                    </div>
                </div>
                <div className="playback__sub__div2">
                    <h2 className="blank">.</h2>
                    <div className="checkbox__div">
                        <input type="checkbox" />
                        <span>
                            Include auto-generated captions(when available)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaybackSettings;
