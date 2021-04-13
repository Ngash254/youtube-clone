import React from "react";
import "./AdvSettings.css";
import { Avatar } from "@material-ui/core";

function AdvSettings() {
    return (
        <div className="advSettings">
            <div className="advSettings__div">
                <h2 className="title1">Advanced settings</h2>
                <div className="advSettings__sub__div">
                    <div className="advSettings__sub__div__text">
                        <h2>Setup YouTube exactly how you want it</h2>
                    </div>
                    <div className="advSettings__sub__div__avatar">
                        <Avatar
                            className="advSettingsAvatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnGMc1Ruggm24zOR31EkVPEmR4bUwua_APA&usqp=CAU"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="advSettings__div">
                <div className="adv-sub-div">
                    <div className="adv-heading">
                        <h3>User ID</h3>
                    </div>

                    <div className="some__id">
                        <span id="user-id">qqFDR45tsWEBFYSTTrr6qipcnj</span>
                        <p>COPY</p>
                    </div>
                </div>
                <div className="adv-sub-div">
                    <div className="adv-heading">
                        <h3>Channel ID</h3>
                    </div>
                    <div className="some__id">
                        <span id="channel-id">sWEBFYSTTrr6qipcnjqqFDR45t</span>
                        <p>COPY</p>
                    </div>
                </div>
                <div className="adv-sub-div">
                    <div className="adv-heading">
                        <h3>Move channel</h3>
                    </div>
                    <div className="adv-actions">
                        <h3>Move channel to a brand account</h3>
                        <h4>You can move your channel to a brand account</h4>
                    </div>
                </div>
                <div className="adv-sub-div">
                    <div className="adv-heading">
                        <h3>Delete channel</h3>
                    </div>
                    <div className="adv-actions">
                        <h3>Delete channel</h3>
                        <h4>
                            Deleting your YouTube Channel won't close your
                            Google Account
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvSettings;
