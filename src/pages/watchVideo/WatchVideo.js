import React from "react";
import "./WatchVideo.css";
import SelectedVideoSection from "./SelectedVideoSection";

function WatchVideo() {
    return (
        <div className="watchVideo">
            <div className="primary">
                <SelectedVideoSection />
            </div>
        </div>
    );
}

export default WatchVideo;
